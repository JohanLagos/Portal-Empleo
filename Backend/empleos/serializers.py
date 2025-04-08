from rest_framework import serializers
from .models import Vacante

class VacanteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacante
        fields = '__all__'
        read_only_fields = ['reclutador', 'fecha_publicacion']

