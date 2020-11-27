from django.http.response import HttpResponseRedirect
from django.shortcuts import render, get_object_or_404
from django.shortcuts import render
from .models import Question, Choice
from django.urls import reverse
from django.contrib.auth.decorators import login_required #login_required를 선언하고


# Create your views here.

def index(request):
    a = Question.objects.all()
    return render(request, 'vote/index.html', {'a':a})

@login_required

def detail(request, qid):
    b=get_object_or_404(Question, id=qid)
    return render(request, 'vote/detail.html',{'q':b})

def vote(request):
    if request.method == "POST":
        c_id = request.POST.get('a')
        c = get_object_or_404(Choice, id = c_id)
        c.votes += 1
        c.save()
        return HttpResponseRedirect( reverse('vote:result',args=(c.q.id ,)  ) )

def result(request, q_id):
    return render(request,'vote/result.html',{'q':get_object_or_404(Question,id=q_id)})


def qregister(request):
    if request.method == "GET":
        form = QuestionForm()
        return render(request, 'vote/qregister.html', {'f':form})
    
    elif request.method == "POST":
        form = QuestionForm(request.POST)
        if form.is_valid():
            q = form.save(commit=False)
            q.date = datetime.now()
            q.save()
            return HttpResponseRedirect(reverse('vote:index'))