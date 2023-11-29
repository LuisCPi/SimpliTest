from django.db import models

# Create your models here.
class Employee(models.Model):
    company=models.ForeignKey(
        'polls.company',
        verbose_name='Empresa del empleado',
        on_delete=models.PROTECT,
    )
    full_name=models.CharField(max_length=60, verbose_name='Nombre completo del empleado')
    rut=models.AutoField(primary_key=True, verbose_name='RUT del empleado')
    email=models.EmailField(max_length=254, verbose_name='Email del empleado')
