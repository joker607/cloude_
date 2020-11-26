from django.urls import path
from .views import *

app_name='login'

urlpatterns = [
    path('signup/', signup, name='signup'), #회원가입
    path('signin/', signin, name='signin'), #로그인
    path('signout/', signout, name='signout'), #로그아웃
    ]
