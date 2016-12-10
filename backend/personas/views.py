from rest_framework import viewsets
from personas.models import Persona, Automovil
from personas.serializers import PersonaSerializer, AutomovilSerializer

class PersonaViewSet(viewsets.ModelViewSet):
	"""Vista para poder editar y modificar las Personas"""
	queryset = Persona.objects.all()
	serializer_class = PersonaSerializer

class AutomovilViewSet(viewsets.ModelViewSet):
	"""Vista para poder modificary editar los automoviles"""
	queryset = Automovil.objects.all()
	serializer_class = AutomovilSerializer