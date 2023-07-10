#Comentario
#Resolver ecuaciones cuadraticas
#ax^2 + bx + c = 0
#x^2 +  x - 1
a <- 1
b = 1
c = -1
print(b)

(-b + sqrt(b^2 -4*a*c))/(2*a)
(-b - sqrt(b^2 -4*a*c))/(2*a)
log(8)
log(a)
#Obtener ayuda
help("log")
log(8, 2)
data()
co2
pi
Inf+1
#Data types
a = 2
#Conocer el tipo de dato.
class(a)

#Para almacenar data set se guarda en un data frames
library(dslabs)
data("murders")
#Conocer el tipo de dato.
class(murders)
# Tiene datos de homicidios por cada 1000 en EE.UU
#Estructura de un data frame
str(murders)
#Obtener datos head muestra las primeras 6 observaciones o filas.
head(murders)
#Acceder directamente a una columna $ para una de las columnas del dataFrame
murders$population
# Obtener los nombres de cada una de las columnas, usar names()
names(murders)

#VECTORES: numéricos, characteres, logicos
pop = murders$population
#Conocer tamaño
length(pop)
class(pop)

###############################Corte ###########################################
z = 3 == 2 #Valor logico
class(z) 
########### FACTORES ###########
#Almacenar datos de tipo categorico.
class(murders$region) #Tipo factor
levels(murders$region) #Conocer los parametros que comprenden las categorías. O las variaciones existentes

region = murders$region
value = murders$total
#reorder() almacena de forma alfabetica
region = reorder(region, value,FUN = sum )
levels(region)

#### MATRICES ######
##Tamaño, filas, columnas
mat = matrix(1:12,4,3 )
#Acceder a posición
mat[2, 3]
mat[1,]
mat[,3]
#Obtener subconjunto
mat[,2:3]
mat[]
mat[1:2, 2:3]
#Convertir a dataframe
as.data.frame(mat)
