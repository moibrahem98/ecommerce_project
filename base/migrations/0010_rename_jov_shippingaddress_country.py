# Generated by Django 3.2.9 on 2021-12-18 16:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0009_rename_country_shippingaddress_jov'),
    ]

    operations = [
        migrations.RenameField(
            model_name='shippingaddress',
            old_name='jov',
            new_name='country',
        ),
    ]