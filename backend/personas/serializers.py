from rest_framework import serializers
from personas.models import Persona, Automovil

class PersonaSerializer(serializers.ModelSerializer):
	"""Serializer para presentar el modelo de personas"""
	class Meta:
		model = Persona
		fields = ("nombre","paterno","materno","fecha","id")

class AutomovilSerializer(serializers.ModelSerializer):
	"""Serializer para presentar el modelo de automovil"""
	class Meta:
		model = Automovil
		fields = ("marca","tipo","anio","color","id","owner_id")