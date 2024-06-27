import requests

from flask import Flask, render_template, request, redirect

app = Flask(__name__)
listado_personas= [
    dict(
        name=dict(
            first="Tobias",
            last="Gentile",
        ),
        location=dict(
            city="Rio Cuarto",
        ),
        email="tobiasemmagentile@gmail.com",
        
    ),
    dict(
        name=dict(
            first="Juan Pablo",
            last="Varsky",
        ),
        location=dict(
            city="Los Angeles",
        ),
        email="jpv@gmail.com",
        
    ),
]

#listado_nombres = ['Ana', 'Juan', 'Jose']
#diccionario_nombres = [
#    dict(
#        nombre = 'Ana',
#        edad = 30,
#        pais = 'Argentina',
#    ),

#    dict(
#        nombre = 'Juan',
#        edad = 78,
#        pais = 'Mexico',
#    ),

#    dict(
#        nombre = 'Jose',
#        edad = 21,
#        pais = 'Peru',
#    ),
#]

@app.route('/') # app es la instancia, route el metodo, '/' es el disparador
def index():
    return render_template(
        'index.html',
    )

@app.route('/info') # app es la instancia, route el metodo, '/' es el disparador
def informacion():
    return render_template(
        'informacion.html',
    )

@app.route('/bienvenido/<nombre>')
def bienvenida(nombre):
    return render_template(
        'bienvenida.html',
    )

@app.route('/personas')
def personas():
    listado = listado_personas
    #peticion = requests.get(url="https://randomuser.me/api/?results=20")
    #respuesta = peticion.json()
    #lista_personas = respuesta['results'] #respuesta.GET.('results')
    return render_template(
        'personas.html',
        listado = listado
    #    listado = lista_personas,
    )

@app.route('/personas_add', methods=['POST', 'GET'])
def agregar_personas():
    if request.method == 'POST':
        first_name= request.form['nombre']
        last_name= request.form['apellido']
        email= request.form['email']
        city= request.form['ciudad']

        persona=dict(
            name=dict(
                first=first_name,
                last=last_name,
            ),
            location=dict(
                city=city
            ),
            email=email,
        )
        listado_personas.append(persona)
    return render_template(
        'add_personas.html',
    )