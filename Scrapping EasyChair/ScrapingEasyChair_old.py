from bs4 import BeautifulSoup
import requests
import json

informacionEventos=[]
data ={}
stateselection = "https://easychair.org/cfp/"
r = requests.get(stateselection)  # me devuelve el url
soup = BeautifulSoup(r.text, "html.parser")  # r.text me devuelve la pagina.  Parseo el html
rows = soup.find_all("tbody")
filas= rows[1].find_all("tr")
lista = []
for fila in filas:
    celdas = fila.find_all("td")
    acronimo=celdas[0].find("a").text.strip()
    nombre=celdas[1].text.strip()
    lugar=celdas[2].text.strip()
    l_lugar = lugar.split(",")
    ciudad = l_lugar[0]
    pais = l_lugar [-1].strip()

    if(celdas[3].find("span")):
        deadline=celdas[3].find("span").text.strip()
    else:
        deadline="-"
    if (celdas[4].find("span")):
        fechaInicio = celdas[4].find("span").text.strip()
    else:
        fechaInicio = "-"
    arregloTopico=[]
    topicos=celdas[5].find_all("a")
    mensaje = ""
    topicoTemp = ""
    for topico in topicos:
        if(topico != ""):
            topicoTemp = topico.find("span").text.strip() + "," + topicoTemp
        else:
            topicoTemp = topico.find("span").text.strip()
        #arregloTopico.append(topicoTemp)
    data={
            'acronimo':acronimo,
            'nombre':nombre,
            'descripcion':"",
            'ciudad':ciudad,
            'pais': pais,
            'deadline':deadline,
            'fechaInicio':fechaInicio,
            'topicos':topicoTemp }
    lista.append(data)
    #informacionEventos.append(data)

with open('data.json', 'w',encoding='utf8') as file:
    json.dump(lista, file, indent=4,ensure_ascii=False)






        
