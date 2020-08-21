from bs4 import BeautifulSoup
import requests
import json
url = "http://sites.ieee.org/ecuador/category/eventos/"
r = requests.get(url)
soup = BeautifulSoup(r.text, "html.parser")
information = soup.find_all("article")
datos ={}
lista = []
for info in information:
    titulo = info.find("h2",{"class":"entry-title"})
    data = info.find("div",{"class":"entry-content"})
    time = info.find("time", {"class": "entry-date published"})
    datos= {
            'acronimo':"",
            'titulo':titulo.text.strip(),
            'descripción':data.text.strip(),
            'fecha':time.text.strip(),
            'topicos':"",
            'ciudad':"",
            'pais':""
        }
    lista.append(datos)
with open('data_ieee.json', 'w', encoding='utf8') as file:
    json.dump(lista, file, indent=4,ensure_ascii=False)


