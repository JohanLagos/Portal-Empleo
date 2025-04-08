from django.db import models
from django.conf import settings

# Create your models here.
class Vacante(models.Model):
    reclutador = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    titulo = models.CharField(max_length=100)
    descripcion = models.TextField()
    requisitos = models.TextField()
    ubicacion = models.CharField(max_length=100, blank=True, null=True)
    fecha_publicacion = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.titulo