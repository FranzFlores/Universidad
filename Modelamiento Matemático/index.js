$(document).ready(function () {

    //Variables Usadas
    //T = Trebor  CR = Corazones Rojos  CN = Corazones Negrsos B = Brillos
    var cards = [
        'AT', '2T', '3T', '4T', '5T', '6T', '7T', '8T', '9T', '10T', 'JT', 'QT', 'KT',
        'ACR', '2CR', '3CR', '4CR', '5CR', '6CR', '7CR', '8CR', '9CR', '10CR', 'JCR', 'QCR', 'KCR',
        'ACN', '2CN', '3CN', '4CN', '5CN', '6CN', '7CN', '8CN', '9CN', '10CN', 'JCN', 'QCN', 'KCN',
        'AB', '2B', '3B', '4B', '5B', '6B', '7B', '8B', '9B', '10B', 'JB', 'QB', 'KB'
    ];

    //Iniciar la partida
    $("#start").click(function () {
        var orderCards = shuffleCards(cards);
        $("#cardK").attr("src", "./Recursos/" + orderCards[12][3] + ".png");

        console.log(orderCards[12][3].substring(1, 2));
        if (orderCards[12][3].substring(1, 2) !== '0') {
            switch (orderCards[12][3].charAt(0)) {
                case 'A':
                    assingCard(orderCards, 0, 12, 'A', 'K');
                    break;
                case '2':
                    assingCard(orderCards, 1, 12, '2', 'K');
                    break;
                case '3':
                    assingCard(orderCards, 2, 12, '3', 'K');
                    break;
                case '4':
                    assingCard(orderCards, 3, 12, '4', 'K');
                    break;
                case '5':
                    assingCard(orderCards, 4, 12, '5', 'K');
                    break;
                case '6':
                    assingCard(orderCards, 5, 12, '6', 'K');
                    break;
                case '7':
                    assingCard(orderCards, 6, 12, '7', 'K');
                    break;
                case '8':
                    assingCard(orderCards, 7, 12, '8', 'K');
                    break;
                case '9':
                    assingCard(orderCards, 8, 12, '9', 'K');
                    break;
                case 'J':
                    assingCard(orderCards, 10, 12, 'J', 'K');
                    break;
                case 'Q':
                    assingCard(orderCards, 11, 12, 'Q', 'K');
                    break;
                case 'K':
                    showLostGame();
                    break;
                default:
                    break;
            }
        } else {
            assingCard(orderCards, 9, 12, '10', 'K');
        }
    });

});

//Barajar las cartas y asignar en cada grupo
function shuffleCards(cards) {
    var groupCards = [[], [], [], [], [], [], [], [], [], [], [], [], []];
    groupCards.forEach(group => {
        for (let i = 0; i < 4; i++) {
            let cardRandom = Math.floor(Math.random() * (cards.length - 0));
            group.push(cards[cardRandom]);
            cards.splice(cardRandom, 1);
        }
    });
    console.log(groupCards);
    return groupCards;
}

//Asignar la carta en el lugar que le corresponde
/*
    orderCards = Arreglo de las cartas
    i = grupo de cartas al que se agrega la carta (0 = 'A', 1 = '2', ...)
    j = grupo de cartas al que se elimina la carta (0 = 'A', 1 = '2', ...)
    nameI = nombre del grupo de cartas al que se agrega la carta.
    nameJ = nomnre del grupo de cartas al que se elimina la carta
*/
function assingCard(orderCards, i, j, nameI, nameJ) {
    orderCards[i].push(orderCards[12][3]);
    orderCards[j].splice(orderCards[12][3], 1);
    setTimeout(() => {
        $("#card" + nameI).attr("src", "./Recursos/" + orderCards[0][3] + ".png");
        $("#card" + nameJ).attr("src", "./Recursos/downCard.png");
    }, 2000);
    return i;
}

//Mostrar mensaje de juego perdido
function showLostGame() {
    $("#alert").html(`
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
        Has perdido la partida
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `);
}

