from django.db import models

# Create your models here.


class Papers(models.Model):
    acronimo = models.CharField(max_length = 100)
    titulo = models.CharField(max_length = 150)
    descripcion = models.CharField(max_length = 1000)
    año = models.CharField(max_length = 20)
    mes = models.CharField(max_length = 20)
    dia = models.CharField(max_length = 20)
    ciudad = models.CharField(max_length = 40)
    pais = models.CharField(max_length = 40)
    topicos = models.CharField(max_length = 500)
