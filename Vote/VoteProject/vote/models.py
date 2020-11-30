from django.db import models

# Create your models here.

class Question(models.Model):
    objects = models.Manager()
    name = models.CharField(max_length = 100)
    date = models.DateTimeField()


class Choice(models.Model):
    name = models.CharField(max_length = 100)
    votes = models.IntegerField(default = 0)
    q = models.ForeignKey(Question, on_delete=models.CASCADE)

class Ex(models.Model):
    postname = models.CharField(max_length=50)
    contents = models.TextField()
    ex_fk = models.ForeignKey(Question, on_delete=models.CASCADE,null=True,default='')

    # 게시글의 제목(postname)이 Post object 대신하기
    def __str__(self):
        return self.postname