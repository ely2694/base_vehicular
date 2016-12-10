from django.db import models
from django.utils import timezone

class Persona(models.Model):
    """ Modelo para personas"""
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    paterno = models.CharField(max_length=100)
    materno = models.CharField(max_length=100)
    fecha = models.DateTimeField(default=timezone.now)

class Automovil(models.Model):
	"""Modelo para automoviles"""
	owner = models.ForeignKey(Persona)
	id = models.AutoField(primary_key=True)
	marca = models.CharField(max_length=100)
	tipo = models.CharField(max_length=100)
	anio = models.CharField(max_length=100)
	color = models.CharField(max_length=100)
