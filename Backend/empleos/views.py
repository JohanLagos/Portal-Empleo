from rest_framework import generics, permissions
from .models import Vacante
from .serializers import VacanteSerializer

# Create your views here.
class PublicarVacanteView(generics.CreateAPIView):
    queryset = Vacante.objects.all()
    serializer_class = VacanteSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        if self.request.user.tipo_usuario != 'reclutador':
            raise PermissionError("Solo los usuarios con rol 'reclutador' pueden publicar vacantes.")
        serializer.save(reclutador=self.request.user)