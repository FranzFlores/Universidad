#Ambos cajeros estan ocupados y eres el proximo en ser atendido. Cual es la probabilidad de que tome mas de 5 min antes de ser atendido
#Sea X1 y X2 los tiempos de espera hasta que los cajeros esten libres para atender nuevos cliente. El tiempo hasta que uno de ellos me atienda
# V = min(X1,X2)  P{V>5}

#Pregunta 1
#Tamaño de numeros aleatorios a generar. Entre mas se generen el resultado sera mejor aproximado
m = 100000  
#Valores de lambda de la distribución exponencial 
lam1 = 1/5
lam2 = 1/4
#Vectores que representa los tiempos que se demora en un cajero en atender al cliente
x1 = rexp(m,lam1)
x2 = rexp(m,lam2)
#Obtener los valores minimos de los vectores que contiene los tiempos
V = pmin(x1,x2) 
#Obtiene la probabilidad de que el tiempo mínimo sea igual a los tiempos que tarda el segundo cajero
mean(x2==V)


#Pregunta 2
m = 100000 
lam1 = 1/5
lam2 = 1/4
x1 = rexp(m,lam1)
x2 = rexp(m,lam2)
V = pmin(x1,x2) 
mean(V)

#Pregunta 3
#Tamaño de numeros aleatorios a generar. Entre mas se generen el resultado sera mejor aproximado
m = 100000 
#Valor de lambda de la distribución exponencial 
lam1 = 1/5
#Vector que representa los tiempos que se demora el cajero en atender al cliente
x1 = rexp(m,lam1)
#Obtener el valor mínimo del vector que contiene los tiempos
V = pmin(x1) 
#Obtiene la probabilidad de que el tiempo que tarda el cajera sea mayor 5 minutos
mean(V>5)


m = 100000  
lam1 = 1/5
lam2 = 1/4
x1 = rexp(m,lam1)
x2 = rexp(m,lam2)
V = pmin(x1,x2) 
mean(x2==V)

m = 100000 
lam1 = 1/5
x1 = rexp(m,lam1)
V = pmin(x1) 
mean(V>5)