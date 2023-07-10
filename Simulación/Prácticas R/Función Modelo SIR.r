SIR = function(a, b, N, T){
    #simula el modelo SIR desde un tiempo 0 a T 
    #devuelve el numero de susceptibles, infectados y removidos
    #en el tiempo T
    S = N 
    I = 1
    R = 0
    for (i in 1:T) {
        S = rbinom(1, S, (1-a) ^ I)
        R = R + rbinom(1, I, b)
        I = N + 1 - S - R
        
    }
    return(c(S, I, R))
}
N = 1000
T = 100
#valores multiples para a y b:
a = seq(0.0001, 0.001, by = 0.0001) #10 valores
b = seq(0.1, 0.5, by = 0.05) #10 valores 
a;b;N;T
SIR(a,b,N,T)
#tamaño de una muestra de 400
n.reps = 400
#archivo donde se almacena los resultados 
f.name = "SIR_grid.dat"
#estimar E S[T] para cada combinacion de a y b 
write(c('a', "b", "S_T"), file = f.name, 
      ncolumns = 3)
for (i in 1:length(a)) {
    for (j in 1:length(b)) {
        S.sum = 0
        for (k in 1:n.reps) {
            S.sum = S.sum + SIR(a[i], b[j], N, T)[1]
        }
        write(c(a[i], b[i], S.sum/n.reps),
            file = f.name,
            ncolumns = 3, append = TRUE)
    }
}
g = read.table(f.name, header = TRUE)
library(lattice)#permite comprara una variable con otras
print(wireframe(S_T ~ a*b, data = na.omit(g),
                scales = list(arrows = FALSE),
                aspect = c(.5,1), drape = TRUE,
                xlab = "a", ylab = "b",
                zlab = "E S[T]"))

