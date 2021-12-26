# Generated by Django 3.2.9 on 2021-12-25 00:37

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('order', '0002_coupons'),
    ]

    operations = [
        migrations.AddField(
            model_name='coupons',
            name='status',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='coupons',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL),
        ),
    ]