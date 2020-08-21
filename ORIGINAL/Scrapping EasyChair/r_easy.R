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
lc = separate(datos.1,col = fechaInicio,into = c("mes","año"),sep = ",")
lc_1 = separate(lc,col = ,mes,into = c("mes","día"),sep = " ")
#View(lc)
#View(lc_1)
datos.2["fecha"]

lc2 = separate(datos.2,col = fecha,into = c("mes","año"),sep = ",")
lc_2 = separate(lc2,col = ,mes,into = c("mes","día"),sep = " ")
#View(lc2)
#View(lc_2)

names(lc_1)[names(lc_1)=="acronimo"]<-"Acrónimo"
names(lc_1)[names(lc_1)=="nombre"]<-"Título"
names(lc_1)[names(lc_1)=="descripcion"]<-"Descripción"
names(lc_1)[names(lc_1)=="topicos"]<-"Tópicos"
names(lc_1)[names(lc_1)=="año"]<-"Año"
names(lc_1)[names(lc_1)=="mes"]<-"Mes"
names(lc_1)[names(lc_1)=="día"]<-"Día"
names(lc_1)[names(lc_1)=="ciudad"]<-"Ciudad"
names(lc_1)[names(lc_1)=="pais"]<-"País"

names(lc_2)[names(lc_2)=="acronimo"]<-"Acrónimo"
names(lc_2)[names(lc_2)=="titulo"]<-"Título"
names(lc_2)[names(lc_2)=="descripción"]<-"Descripción"
names(lc_2)[names(lc_2)=="año"]<-"Año"
names(lc_2)[names(lc_2)=="mes"]<-"Mes"
names(lc_2)[names(lc_2)=="día"]<-"Día"
names(lc_2)[names(lc_2)=="topicos"]<-"Tópicos"
names(lc_2)[names(lc_2)=="ciudad"]<-"Ciudad"
names(lc_2)[names(lc_2)=="pais"]<-"País"

View(lc_1)
View(lc_2)

informacion_datos1 = data.frame(lc_1["Acrónimo"], lc_1["Título"],lc_1["Descripción"],lc_1["Año"],lc_1["Mes"],lc_1["Día"],lc_1["Ciudad"],lc_1["País"],lc_1["Tópicos"])
informacion_datos2 = data.frame(lc_2["Acrónimo"], lc_2["Título"],lc_2["Descripción"],lc_2["Año"],lc_2["Mes"],lc_2["Día"],lc_2["Ciudad"],lc_2["País"],lc_2["Tópicos"])
general = rbind(informacion_datos1,informacion_datos2)

View(general)

setwd("./") 
informacion = data.frame(general["Acrónimo"],general["Título"], general["Descripción"],general["Año"],general["Mes"],general["Día"],general["Ciudad"],general["País"],general["Tópicos"])
write.csv(informacion, file="Datos_Generales_2.0.csv")

