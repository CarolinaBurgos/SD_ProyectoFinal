from bs4 import BeautifulSoup
import requests
import json
import csv
import io

informacionEventos=[]
data ={}
stateselection = "https://easychair.org/cfp/"
r = requests.get(stateselection)  # me devuelve el url
soup = BeautifulSoup(r.text, "html.parser")  # r.text me devuelve la pagina.  Parseo el html
rows = soup.find_all("tbody")
filas= rows[1].find_all("tr")
#lista = []



with open('Datos_Generales.csv', 'w',newline='',encoding="utf-8") as file:
    fieldnames = ['Acronimo', 'Titulo','Descripcion', 'Año','Mes', 'Dia','Ciudad', 'Pais','Topicos']
    writer = csv.DictWriter(file, fieldnames=fieldnames)
    writer.writeheader()

#with io.open('data.csv', 'w',newline='',encoding="utf-8") as file:
 #   fieldnames = ['Acrónimo', 'Título','Descripción', 'Año','Mes', 'Día','Ciudad', 'País','Tópicos']
  #  writer = csv.DictWriter(file, fieldnames=fieldnames)
   # writer.writeheader()



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
        #lista.append("")

        #lista.append( '"number","Acrónimo","Título","Descripción","Año","Mes","Día","Ciudad","País","Tópicos"')
        for topico in topicos:
            if(topico != ""):
                topicoTemp = topico.find("span").text.strip() + "," + topicoTemp
            else:
                topicoTemp = topico.find("span").text.strip()
            #arregloTopico.append(topicoTemp)
        #data={
        #      'acronimo':acronimo,
        #       'nombre':nombre,
        #      'descripcion':"",
        #      'ciudad':ciudad,
        #      'pais': pais,
        #     'deadline':deadline,
        #    'fechaInicio':fechaInicio,
            #    'topicos':topicoTemp }    
        #print("acronimo:" +acronimo+ " ,nombre "+ nombre+ " ,descripcion "+ "-"+ " ,ciudad "+ ciudad+ " ,pais "+ pais+ " ,deadline "+ deadline+ " ,fechaInicio "+ fechaInicio+ " ,topicos "+ topicoTemp+"\n")                                      
        if(len(fechaInicio.split(" "))==3):
            writer.writerow({'Acronimo': acronimo, 'Titulo':  str(nombre), 'Descripcion': "-", 'Año':  fechaInicio.split(" ")[2], 'Mes':  fechaInicio.split(" ")[0], 'Dia':  fechaInicio.split(" ")[1].split(",")[0], 'Ciudad': ciudad, 'Pais':  pais, 'Topicos':  topicoTemp})
        else:
            writer.writerow({'Acronimo': acronimo, 'Titulo':  str(nombre), 'Descripcion': "-", 'Año':  "-", 'Mes':  "-", 'Dia':  "-", 'Ciudad': ciudad, 'Pais':  pais, 'Topicos':  topicoTemp})
        
    #lista.append(data)
    #informacionEventos.append(data)
#https://www.programiz.com/python-programming/writing-csv-files#:~:text=DictWriter()%20class%20can%20be,file%20from%20a%20Python%20dictionary.&text=(file%2C%20fieldnames)-,Here%2C,written%20in%20the%20CSV%20file
#with open('data.csv', 'w',encoding='utf8') as file:
 #   json.dump(lista, file, indent=4,ensure_ascii=False)


    #json.dump(lista, file, indent=4,ensure_ascii=False)





        
