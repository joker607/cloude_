from django.urls import path #상위 파일을 선언해주고
from .views import * #views에 정의한 함수 모두를 선언해준다.
app_name='vote'

urlpatterns = [
    path('', index), #해당 path에는 ''를 입력했지만 실제로는 vote/라는 뜻
    path('<int:qid>',detail, name='detail'),
    path('vote/', vote, name='vote'),
    path('result/<int:q_id>/', result, name='result'),
    ]