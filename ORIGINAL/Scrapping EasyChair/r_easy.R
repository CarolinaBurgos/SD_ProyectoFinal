#install.packages("dplyr", dependencies=TRUE, repos='http://cran.rstudio.com/')
library(jsonlite)
library(dplyr)
library(tidyr)

json_easyChair = "./data.json"
json_ieee = "./data_ieee.json"

datos.1 <- fromJSON(json_easyChair)
datos.2 <- fromJSON(json_ieee)
#View(datos.1)
#View(datos.2)


datos.1["fechaInicio"]
lc = separate(datos.1,col = fechaInicio,into = c("mes","a�o"),sep = ",")
lc_1 = separate(lc,col = ,mes,into = c("mes","d�a"),sep = " ")
#View(lc)
#View(lc_1)
datos.2["fecha"]

lc2 = separate(datos.2,col = fecha,into = c("mes","a�o"),sep = ",")
lc_2 = separate(lc2,col = ,mes,into = c("mes","d�a"),sep = " ")
#View(lc2)
#View(lc_2)

names(lc_1)[names(lc_1)=="acronimo"]<-"Acr�nimo"
names(lc_1)[names(lc_1)=="nombre"]<-"T�tulo"
names(lc_1)[names(lc_1)=="descripcion"]<-"Descripci�n"
names(lc_1)[names(lc_1)=="topicos"]<-"T�picos"
names(lc_1)[names(lc_1)=="a�o"]<-"A�o"
names(lc_1)[names(lc_1)=="mes"]<-"Mes"
names(lc_1)[names(lc_1)=="d�a"]<-"D�a"
names(lc_1)[names(lc_1)=="ciudad"]<-"Ciudad"
names(lc_1)[names(lc_1)=="pais"]<-"Pa�s"

names(lc_2)[names(lc_2)=="acronimo"]<-"Acr�nimo"
names(lc_2)[names(lc_2)=="titulo"]<-"T�tulo"
names(lc_2)[names(lc_2)=="descripci�n"]<-"Descripci�n"
names(lc_2)[names(lc_2)=="a�o"]<-"A�o"
names(lc_2)[names(lc_2)=="mes"]<-"Mes"
names(lc_2)[names(lc_2)=="d�a"]<-"D�a"
names(lc_2)[names(lc_2)=="topicos"]<-"T�picos"
names(lc_2)[names(lc_2)=="ciudad"]<-"Ciudad"
names(lc_2)[names(lc_2)=="pais"]<-"Pa�s"

View(lc_1)
View(lc_2)

informacion_datos1 = data.frame(lc_1["Acr�nimo"], lc_1["T�tulo"],lc_1["Descripci�n"],lc_1["A�o"],lc_1["Mes"],lc_1["D�a"],lc_1["Ciudad"],lc_1["Pa�s"],lc_1["T�picos"])
informacion_datos2 = data.frame(lc_2["Acr�nimo"], lc_2["T�tulo"],lc_2["Descripci�n"],lc_2["A�o"],lc_2["Mes"],lc_2["D�a"],lc_2["Ciudad"],lc_2["Pa�s"],lc_2["T�picos"])
general = rbind(informacion_datos1,informacion_datos2)

View(general)

setwd("./") 
informacion = data.frame(general["Acr�nimo"],general["T�tulo"], general["Descripci�n"],general["A�o"],general["Mes"],general["D�a"],general["Ciudad"],general["Pa�s"],general["T�picos"])
write.csv(informacion, file="Datos_Generales_2.0.csv")

