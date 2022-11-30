from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.contrib.auth import views as auth_views
from django.conf.urls.static import static
from .views import galeria,respuesta, quizhuron,guardar, quizloro, quizpez, quizhamster, huron, loro, pez, hamster, borrarfav, home, perropag, gatopag, mascota1pag, mascota2pag, quizperro, quizgato, quiztortuga, quizconejo, recomendacion, perfil, ver,  foro, verpreguntas,borraranimal
from django.contrib.auth.views import LoginView, LogoutView
from . import views
from django.conf import settings
urlpatterns = [
    path('index/', home, name="home"),
    path('galeria/', galeria, name="galeria"),
    path('perro/', perropag, name="perropag" ),
    path('gato/', gatopag, name="gato" ),
    path('mascotas/', mascota1pag, name="mascota1pag" ),
    path('mascotass/', mascota2pag, name="mascota2pag" ),
    path('login/', LoginView.as_view(),name='login_url'),
    path('registro/', views.registerView,name='register_url'),
    path('logout/', LogoutView.as_view(),name='logout'),
    path('perroquiz/', quizperro, name="perroquiz" ),
    path('quizgato/', quizgato, name="quizgato" ),
    path('quiztortuga/', quiztortuga, name="quiztortuga" ),
    path('quizconejo/', quizconejo, name="quizconejo" ), 
    path('recomendacion/', recomendacion, name="recomendacion" ), 
    path('ver/',ver, name="ver"),
    path('guardar/<int:pk>/',guardar, name="guardar"),
    path('perfil/<int:pk>/', perfil , name="perfil"),
    path('foro/',foro, name="foro"),
    path('verpreguntas/',verpreguntas, name="verpreguntas"),
    path('ver/<int:pk>/',borrarfav, name="borrarfav"),
    path('vers/<int:pk>/',borraranimal, name="borraranimal"),
    path('loro/',loro, name="loro"),
    path('pez/',pez, name="pez"),
    path('huron/',huron, name="huron"),
    path('hamster/',hamster, name="hamster"),
    path('quizloro/',quizloro, name="quizloro"),
    path('quizpez/',quizpez, name="quizpez"),
    path('quizhuron/',quizhuron, name="quizhuron"),
    path('quizhamster/',quizhamster, name="quizhamster"),
    path('respuesta/<int:pk>/',respuesta, name="respuesta"),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)