# Generated by Django 3.1.3 on 2020-11-30 11:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('vote', '0002_post'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='po',
            field=models.ForeignKey(default='', null=True, on_delete=django.db.models.deletion.CASCADE, to='vote.question'),
        ),
    ]
