# Generated by Django 4.1.2 on 2022-11-30 01:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Fav',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fav', models.CharField(choices=[('Perro', 'Perro'), ('Gato', 'Gato'), ('Conejo', 'Conejo'), ('Tortuga', 'Tortuga'), ('Loro', 'Loro'), ('Hamster', 'Hamster'), ('Pez', 'Pez'), ('Hurón', 'Hurón')], default='Perro', max_length=10)),
                ('usuario', models.CharField(max_length=100, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Mascotas',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('usuario', models.CharField(max_length=100)),
                ('imagen', models.ImageField(upload_to='uploads/')),
                ('animal', models.CharField(choices=[('Perro', 'Perro'), ('Gato', 'Gato'), ('Conejo', 'Conejo'), ('Tortuga', 'Tortuga'), ('Loro', 'Loro'), ('Hamster', 'Hamster'), ('Pez', 'Pez'), ('Hurón', 'Hurón')], default='Perro', max_length=10)),
                ('nombre', models.CharField(max_length=100)),
                ('fecha', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Preguntas',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('usuario', models.CharField(max_length=100)),
                ('pregunta', models.TextField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='Respuestas',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('respuesta', models.TextField(max_length=1000)),
                ('usuario', models.CharField(max_length=100)),
                ('pregunta', models.CharField(max_length=100, null=True)),
            ],
        ),
    ]
