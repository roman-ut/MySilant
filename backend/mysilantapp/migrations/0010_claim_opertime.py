# Generated by Django 4.1.5 on 2023-01-21 16:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mysilantapp', '0009_maintenance_opertime'),
    ]

    operations = [
        migrations.AddField(
            model_name='claim',
            name='operTime',
            field=models.PositiveIntegerField(default=0),
            preserve_default=False,
        ),
    ]
