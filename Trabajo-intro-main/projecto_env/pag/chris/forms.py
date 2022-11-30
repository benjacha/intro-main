from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Mascotas, Fav, Preguntas, Respuestas

class NewRegister(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = User
        fields = ['username', 'password1','password2']
        
    def __init__(self,*args,**kwargs):
        super().__init__(*args, **kwargs)
        self.fields['username'].label = 'Nombre de usuario'
        self.fields['password1'].label = 'Contraseña'
        self.fields['password2'].label = 'Confirmar contraseña'
        for fieldname in ['username', 'password1', 'password2']:
            self.fields[fieldname].help_text = None
class MascotaForm(forms.ModelForm):
    class Meta:
        model= Mascotas
        fields = ['animal', 'nombre','imagen']
    def __init__(self,*args,**kwargs):
        super().__init__(*args, **kwargs)
        self.fields['animal'].label = ''
        self.fields['nombre'].label = ''
        self.fields['imagen'].label = ''

class FavForm(forms.ModelForm):
    class Meta:
        model= Fav
        fields = ['fav']
    def __init__(self,*args,**kwargs):
        super().__init__(*args, **kwargs)
        self.fields['fav'].label = ''
        
class ForoForm(forms.ModelForm):
    class Meta:
        model= Preguntas
        fields = ['pregunta']
    def __init__(self,*args,**kwargs):
        super().__init__(*args, **kwargs)
        self.fields['pregunta'].label = ''

class RespForm(forms.ModelForm):
    class Meta:
        model= Respuestas
        fields = ['respuesta']
    def __init__(self,*args,**kwargs):
        super().__init__(*args, **kwargs)
        self.fields['respuesta'].label = ''