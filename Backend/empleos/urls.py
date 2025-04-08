from django.urls import path
from .views import PublicarVacanteView

urlpatterns = [
    path('publicar/', PublicarVacanteView.as_view(), name='publicar-vacante'),
]