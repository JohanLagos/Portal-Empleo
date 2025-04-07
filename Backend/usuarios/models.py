from django.db import models
from django.conf import settings # Asegúrate de que la configuración de AUTH_USER_MODEL esté configurada correctamente
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Usuario(AbstractUser):
    # Aquí puedes agregar campos adicionales si es necesario
    # Por ejemplo, un campo para almacenar la fecha de registro
    # fecha_registro = models.DateTimeField(auto_now_add=True)

    TIPOS_USUARIO = (
        ('candidato', 'Candidato'),
        ('reclutador', 'Reclutador'),
    )

    tipo_usuario = models.CharField(max_length=20, choices=TIPOS_USUARIO, default='candidato')

    def __str__(self):
        return f"{self.username} ({self.tipo_usuario})"