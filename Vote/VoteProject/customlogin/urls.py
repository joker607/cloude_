from django.urls import path
from .views import *

app_name='login'
urlpatterns = [
    path('signup/', signup, name='signup'),
    ]
