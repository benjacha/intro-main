
from unittest.util import _MAX_LENGTH
from django.db import models

animales = [('Perro', 'Perro'),('Gato', 'Gato'),('Conejo', 'Conejo'),('Tortuga', 'Tortuga'),('Loro', 'Loro'),('Hamster', 'Hamster'),('Pez', 'Pez'),('Hurón', 'Hurón') ]  
class Mascotas(models.Model):
    
    usuario= models.CharField(max_length=100)
    imagen = models.ImageField(upload_to ='uploads/')
    animal = models.CharField(max_length=10,choices=animales,default='Perro',)
    nombre = models.CharField(max_length=100)
    fecha = models.DateTimeField(auto_now=True)

class Fav(models.Model):
    fav = models.CharField(max_length=10,choices=animales,default='Perro')
    usuario= models.CharField(max_length=100, unique=True)

class Preguntas(models.Model):
    usuario = models.CharField(max_length=100)
    pregunta = models.TextField(max_length=1000)

class Respuestas(models.Model):
    respuesta = models.TextField(max_length=1000)
    usuario= models.CharField(max_length=100)
    pregunta= models.IntegerField( null=True)
