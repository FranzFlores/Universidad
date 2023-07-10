#Vectores con numeros

x = c(1,2,3,4,5)
sum(x) #Devuelve la suma de todos los valores
cumsum(x) #Devuelve la suma de cada uno hasta el final(Suma Acumulada)

#Maximo y minimo
max(x)
min(x)

mean(x) #Promedio 
median(x) #Mediana
var(x) #Varianza
sd(x) #Desviacion Estandar

prod(x) #Producto de todos los valores del vector
cumprod(x) #Producto acumulado de los valores del vector
quantile(x) #Valores de los 5 cuartiles. Devuelve un vector
sort(x) # ordena de menor a mayor los valores del vector
rev(x) # Pone los componentes de un vector en orden inverso

x = c(1,2,3,4,5)
y = c(2,1,5,4,3)

cov(x,y) #covarianza
cor(x,y) #coeficiente de correlacion

#Vectores con cadenas de texto
colores = c("amarillo","rojo","verde")
colores

mas.colores  = c(colores,"azul","negro")
mas.colores 

otros.colores = c("naranja","rosa",1)

#Variables y operaciones logicas
x = 11:20
x == 15 #Analiza elemento por elemento si ese valor es igual a 15
x < 15
x > 15
x <= 15
x >= 15
x != 15
sum(x == 15) #Se encarga de sumar cuantos valores del vector son igual a 15
sum(x<15)
sum(x>15)

# Ejemplo 
# Calcular la media y mediana de un vector y el numero de valores que estan por debajo de la media y de la mediana

x = c(1,5,7,9,3,5,6,2,4,7,5,6,9,8,6,2,5,1,4)
mean(x)
median(x)
sum(x<mean(x))
sum(x<median(x))
sum(x == median(x))

z = 1:5
z[c(TRUE,FALSE,TRUE,FALSE,TRUE)]

# r son los numeros aletorios unif es la distribucion que sigue
x = runif(10)
x[x<0.4] #almacena los valores en x que sean menores a 0.4
x<0.4 #Devuelve un vector con FALSE o TRUE de acuerdo al criterio

x[(x<0.4) | (x>0.8)] #almacena los valores en x que sean menores a 0.4 o mayores a 0.8

sum((x<0.4) | (x>0.8)) #devuelve el numero de valores de los criterios 
sum(x[(x<0.4) | (x>0.8)]) # devuelve la suma  de valores q estan en las condiciones

sum((x<0.4) & (x>0.8)) #devuelve el numero de valores del intervalo 
sum(x[(x<0.4) & (x>0.8)]) # devuelve la suma  de valores q estan en el intervalo

which((x>0.2) & (x<0.6)) #devuelve los indices que cumplen con la condicion

#Creacion de funciones 
#nombre_funcion = function(x,y, ...){ expresiones de la funcion }
media = function(x){sum(x)/length(x)}
y = 1:100
media(y)

#Graficas en R
x = c(1,1,1,1,1,2,2,3,3,3,5,6,6,7,7,7)
table(x) #Tabular los datos en x
barplot(table(x)) #Genera graficas de barras basados en los datos tabulados

x = runif(100)
hist(x)) #Genera histogramas con los datos generados 

x = runif(100)
y = runif(100)
plot(x,y) #Genera un grafico con los puntos en el plano cartesiano

x = rnorm(1000)
y = rnorm(1000)
qqplot(x,y, main = "X e Y con la misma distribucion normal estandar") #Verifica si tienen la misma distribucion en forma grafica

a = rnorm(1000, mean = 3, sd = 2)
qqplot(x,a, main = "x N(0,1),Y(3,2)")

b = rt(1000, df=2) # grados de libertad . Distribucion t de estudio
qqplot(x,b,main = "x N(0,1), a t(2) ")

#OTRAS INSTRUCCIONES

#for
#for(nombre_indice in vector){ comandos }
x = numeric(10)
fibonacci_12 = numeric(12)
fibonacci_12[1] = fibonacci_12[2] = 1

for(i in 3:12){
    fibonacci_12[i] = fibonacci_12[i-2] + fibonacci_12[i-1]
}

fibonacci_12

#DISTRIBUCION UNIFORME
#En el intervalo comprendido entre min y max
# dunif --> Funcion de densidad de la distribucion uniforme
# punif --> Funcion de distribucion 
# qunif --> Funcion de cuantiles
# runif --> Genera valores pseudo-aleatorios

# USO
# dunif(x, min=0, max=0, log=FALSE)
# punif(q,min =0,max =1,lower.tail = TRUE, log.p = FALSE)
# qunif(p, min =0,max=1,lower.tail = TRUE, log.p = FALSE)
# runif(n,min=0,max=1)

# Argumentos
# x,q: vectores de cuantiles
# p: vector de probabilidades
# n: numero de observaciones
# min,max: extremos inferior y superior
# log, log.p: valores logicos; si son TRUE las probabilidades se dan como probabilidades log(p)

# lower.tail: valor logico, si es TRUE las probabilidades son P[X<=x] en otro caso P[X>x]

runif(10)
runif(15, min= -1, max = 2)
#semilla
set.seed(32789)
runif(5)

#Introduccion a la simulacion montecarlo
beads = rep(c("Rojo","Azul"),times = c(2,3)) #rep para repetir un valor y el numero de veces que s desea q se repita 
sample(beads,1) #Escoge de manera aleatoria un valor del vector

B = 10000
events = replicate(B,sample(beads,1)) #repite el proceso una cantidad de veces dadas en el primer parametro
tab = table(events)
tab

prop.table(tab) #probabilidad de cada elemento tabulado