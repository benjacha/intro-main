from html.entities import html5
from django.shortcuts import render, redirect
from .forms import NewRegister, MascotaForm, FavForm, ForoForm,RespForm
from .models import Mascotas, Fav, Preguntas, Respuestas
from django.http import HttpResponse
from django.template import loader
from django.contrib import messages
from django.contrib.auth.forms import UserCreationForm  
from django.contrib.auth.models import User
# Create your views here.

def home(request):
    lista_favorito= Fav.objects.all()
    return render (request, 'home.html', {
        'lista_favorito': lista_favorito
        } )
    
def loro(request):
    return render(request, 'mascotas\loro.html')
def huron(request):
    return render(request, 'mascotas\huron.html')
def hamster(request):
    return render(request, 'mascotas\hamster.html')
def pez(request):
    return render(request, 'mascotas\pez.html')
def galeria(request):
    lista_user= User.objects.all()
    lista_fav= Fav.objects.all()
    if  request.method == "POST":
        form= MascotaForm(request.POST, request.FILES)
        formu= FavForm(request.POST, request.FILES)
        if form.is_valid():
            instance = form.save(commit=False)
            instance.usuario = request.user.username
            form.save()
            return redirect('ver')
        else:
            form = MascotaForm()
        if formu.is_valid():
            instance = formu.save(commit=False)
            instance.usuario = request.user.username
            formu.save()
            return redirect('home')
        else:
            form = FavForm()
    
    return render(request, 'galeria.html', {'form': MascotaForm,'formu': FavForm ,'lista_user': lista_user, 'lista_fav': lista_fav})
def foro(request):
    if  request.method == "POST":
        form= ForoForm(request.POST)
        if form.is_valid():
            instance = form.save(commit=False)
            instance.usuario = request.user.username
            form.save()
            return redirect('verpreguntas')
        else:
            form = ForoForm()
    return render(request, 'foro.html', {'form': ForoForm   })
  

def prueba(request):
    return render(request, 'registration/login.html')
def perropag(request):
    return render(request, 'mascotas\perro.html')
def gatopag(request):
    return render(request, 'mascotas\gato.html')
def mascota1pag(request):
    return render(request, 'mascotas\mascotas.html')
def mascota2pag(request):
    return render(request, 'mascotas\mascotass.html')
def login2(request):
    form = UserCreationForm()
    return render(request,'registration/login2.html',{'form': form})


def quizhamster(request):
    return render(request, 'quizmascotas\quizhamster.html')
def quizhuron(request):
    return render(request, 'quizmascotas\quizhuron.html')  
def quizpez(request):
    return render(request, 'quizmascotas\quizpez.html')
def quizloro(request):
    return render(request, 'quizmascotas\quizloro.html')
def quizperro(request):
    return render(request, 'quizmascotas\quizperro.html')
def quiztortuga(request):
    return render(request, 'quizmascotas\quiztortuga.html')
def quizconejo(request):
    return render(request, 'quizmascotas\quizconejo.html') 
def quizgato(request):
    return render(request, 'quizmascotas\quizgato.html')
def registerView(request):
    if request.method == "POST":
        form = NewRegister(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login_url')
        else:
            form = NewRegister()
    return render(request, 'registration/register.html',{'form':NewRegister})
def recomendacion(request):
    return render(request, 'recomendacion.html')
def perfil(request, pk):
    lista_fav= Fav.objects.all()
    lista_mascota= Mascotas.objects.all()
    perfil = User.objects.get(pk=pk)
    return render (request, 'perfil.html', {'perfil':perfil , 'lista_mascota':lista_mascota ,'lista_fav':lista_fav})

def ver(request):
    lista_mascotas= Mascotas.objects.all()
    lista_per= User.objects.all()
    return render(request, 'ver.html', {
        'lista_mascotas': lista_mascotas, 'lista_per':lista_per
    })
def verpreguntas(request):
    lista_respuestas= Respuestas.objects.all()
    lista_preguntas= Preguntas.objects.all()
    lista_per= User.objects.all()
    lista_preguntas.reverse()
    return render(request, 'verpreguntas.html', {
        'lista_preguntas': lista_preguntas, 'lista_per':lista_per, "form":RespForm, 'lista_respuestas':lista_respuestas
    })

def borrarfav(request, pk):
    if request.method == "POST":
        fav = Fav.objects.get(pk=pk)
        fav.delete()
    return redirect('ver')

def guardar(request, pk):
    if request.method == "POST":
        form= RespForm(request.POST)
        if form.is_valid():
            instance = form.save(commit=False)
            Pregunta = Preguntas.objects.get(pk=pk)
            instance.pregunta = Pregunta
    return redirect('verpreguntas')

def borraranimal(request, pk):
    if request.method == "POST":
        mascota = Mascotas.objects.get(pk=pk)
        mascota.delete()
    return redirect('ver')
def respuesta(request, pk):
    Pregun = Preguntas.objects.get(pk=pk)
    lista_respuestas= Respuestas.objects.all()
    lista_per= User.objects.all()
    if  request.method == "POST":
        form= RespForm(request.POST)
        if form.is_valid():
            instance = form.save(commit=False)
            instance.usuario = request.user.username
            instance.pregunta= pk
            form.save()
            return redirect('verpreguntas')
    return render (request, 'respuestas.html',{'Pregun': Pregun , "form":RespForm ,"lista_respuestas":lista_respuestas, "pk": pk,"lista_per":lista_per})
