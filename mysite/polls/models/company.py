from django.db import models

# Create your models here.
class Company(models.Model):
    name=models.CharField(max_length=30, verbose_name='Nombre de la empresa')
    address=models.CharField(max_length=30, verbose_name='Direccion de la empresa')
    rut=models.AutoField(primary_key=True, verbose_name='RUT de la empresa')
    phone=models.IntegerField(verbose_name='Telefono de la empresa')