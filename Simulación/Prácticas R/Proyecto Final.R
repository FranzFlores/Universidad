#Proyecto Final -> Presa de Agua


#------------------Enunciado 1---------------------
#funcion Area
A = function(h) {
    if(h<0) {
        h=0
    }    
    return(h)
}

#Declarar la funcion Volumen
V = function(h,hmax) {
    if(h<0) {
        h=0
    }

    if(h>hmax){
        return(hmax^2/2)
    }else{
        return(h^2/2)
    }
}


#------------------Enunciado 2---------------------


#-------------------------------Calculo de la funcion height
#Funcion A
A = function(h) return(h)

#Funcion de altura height
height = function(h,hmax,v,ftn){
    if(h<0) {h=0}
    if(h>hmax) {h = hmax}
    return(sqrt(h^2 + 2*v))
}

#Valores de h
h = c(0,2,4,1,1)

#Valores de v
v = c(1,1,1,0.1,-0,1)

#Uso de la funcion height
height(h,hmax=4,v,ftn=A(h))



#--------------------------------Altura en el tiempo t

Ht = function(v,hmax,a,b){
    if(v<0){
        v=0
    }
    
    #h = sqrt(2*v)
    #h=1
h=0

    if(h>hmax){
        h = hmax
    }

    if(h<=2){
        return(sqrt((h^2)+ 2*(v-a-(b*(100*h^2)))))
    }else{
        return(sqrt((h^2)+ 2*(v-a- (b*(400*(h-1))))))  
    }
}

Ht(14.31711,10,1,0.05)

