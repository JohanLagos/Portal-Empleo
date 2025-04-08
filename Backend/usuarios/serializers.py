from rest_framework import serializers
from .models import Usuario

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['id', 'first_name', 'last_name', 'username', 'email', 'password', 'tipo_usuario']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = Usuario.objects.create_user(**validated_data)
        return user
