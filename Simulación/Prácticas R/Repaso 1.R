#Integracion por Riemann 
pnorm(1)-pnorm(-1)

m = 5000 #Nro de rectangulos
a =-1 #Inicio del Intervalo
b =1  #Fin del Intervalo
w = (b-a)/m #Ancho de cada rectangulo
g = seq(a+w/2,b-w/2,length = m) #Arreglo con el ancho de cada rectangulo
h = 1/sqrt(2*pi) * exp(-g^2/2) #Arreglo con la altura de cada rectangulo
sum(w*h) #Area Total


#Integracion por MonteCarlo
m=5000 #numero de puntos aleatorios
a= -1; b=1 #intervalos
w = (b-a)/m #Ancho de cada rectangulo
u = a+(b-a)*runif(m) #vector de m puntos aleatorios
h = dnorm(u) #alturas de cada uno de los puntos
sum(w*h)


#The Acceptnce-Rejection Method
set.seed(12)
m = 5000
u = runif(m,0,1)
h = runif(m,0,0.4)
frac.acc= mean(h<dnorm(u))
0.4*frac.acc

##Random Sampling Method 
set.seed(2020)
m=500000
a=0; b=1
z = rnorm(m)
mean(z>a&z<=b)

# Regla del Trapecio
trapezoid = function(ftn,a,b,n){
  h=(b-a)/n #Ancho de cada intervalo
  x.vec = seq(a,b,by=h) #Vector del ancho de cada trapecio 
  f.vec =sapply(x.vec, ftn) #Vector que aplica una funcion al vector 
  T=h*(f.vec[1]/2+sum(f.vec[2:n])+f.vec[n+1]/2) #Suma todas las areas del trapecio
  return(T)
}

ftn6 =function(x) return(4*x^3)
trapezoid (ftn6,0,1,n=20)

simpson_n = function(ftn,a,b,n){
  n=max(c(2*(n%/%2),4)) 
  #h es el ancho de cada intervalo
  h=(b-a)/n
  #x-sub-i impar
  x.vec1 = seq(a+h, b-h, by=2*h)
  #pares
  x.vec2 = seq(a+2*h, b-2*h,by=2*h)
  #calculo de los valores para y
  f.vec1 = sapply(x.vec1, ftn)
  f.vec2 = sapply(x.vec2, ftn)
  S = h/3*(ftn(a)+ 4*sum(f.vec1)+2*sum(f.vec2)+ftn(b))
  return(S)
  }

ftn6 = function(x) return(4*x^3)
simpson_n(ftn6,0,1,20)




