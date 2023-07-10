#Ejercicio 1

#Enunciado 1
baraja = list(
    Oros.1 = "O1",Oros.2 = "O2",Oros.3 = "O3",Oros.4 = "O4",Oros.5 = "O5",Oros.6 = "O6",Oros.7 = "O7",Oros.10 = "O10",Oros.11 = "011",Oros.12 = "O12",
    Copas.1 = "C1",Copas.2 = "C2",Copas.3 = "C3",Copas.4 = "C4",Copas.5 = "C5",Copas.6 = "C6",Copas.7 = "C7",Copas.10 = "C10",Copas.11 = "C11",Copas.12 = "C12",
    Espadas.1="E1",Espadas.2="E2",Espadas.3  = "E3",Espadas.4  = "E4",Espadas.5  = "E5",Espadas.6  = "E6",Espadas.7  = "E7",Espadas.10  = "E10",Espadas.11 ="E11",Espadas.12="E12",
    Basto.1="B1",Basto.2="B2",Basto.3="B3",Basto.4="B4",Basto.5="B5",Basto.6="B6",Basto.7="B7",Basto.10="B10",Basto.11="B11",Basto.12="B12"
)

#Enunciado 2

A1 <- list()

for(i in 1:4){
    set.seed(2019)
    x <- runif(1,1,40)
    as.integer(x)
    A1[[length(A1)+1]] <- baraja[as.integer(x)]
}


set.seed(2019)
x <- runif(1,1,40)
as.integer(x)

A1 = list(baraja[as.integer(x)])

