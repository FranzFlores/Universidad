#Examen Grupo 2

#Pregunta 1
#Generacion  de intervalos de confianza
datos = rnorm(30,-100,100)
x = seq(min(datos),max(datos),length=30)

rbinom(n=30,size=100,prob=0.8)

datos = runif(10)


#Pregunta 2
#Literal A

#Instalacion ociosa = 0
#Instalacion ocupada = 1
estado = 0
cola = 0
tiempoOcurrencia = list()
tiempoProceso = list()
tiempoCola = list()
tiempoSalida = list()

tiempo = 0

for(i in 1:10){    
    #Tiempo en que llega el proximo cliente
    y = rexp(1, 1/15)
    tiempoOcurrencia[[length(tiempoOcurrencia)+1]] <- y
    
    #Proceso de entrada
    if(cola==0){
        #Tiempo que demora el proceso
        x = runif(1,10,15)
        tiempoProceso[[length(tiempoProceso)+1]] <- x

        if(x>y){
            cola = cola+1
            estado = 1
            z = x-y
            tiempoCola[[length(tiempoCola)+1]] <-z
            tiempo = z
        }else{
            estado = 0
            z = 0
            tiempoCola[[length(tiempoCola)+1]] <-z
            tiempo=z
        }
    }else{

        if(tiempo>y){
            cola = cola + 1
            tiempo = tiempo - y
        }else{
            tiempoSalida[[length(tiempoSalida)+1]] = tiempoProceso[1]
            cola = cola - 1
        }
    }
}


x = rexp(100, 1/15) #Tiempo de llegada
tiempo = runif(1000,10,15) #Vector del tiempo

