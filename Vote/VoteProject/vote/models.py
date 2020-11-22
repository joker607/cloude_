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
