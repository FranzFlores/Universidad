// T = Trebor  CR = Corazones Rojos  CN = Corazones Negrsos B = Brillos
var cardsPlay = [
    'AT', '2T', '3T', '4T', '5T', '6T', '7T', '8T', '9T', '10T', 'JT', 'QT', 'KT',
    'ACR', '2CR', '3CR', '4CR', '5CR', '6CR', '7CR', '8CR', '9CR', '10CR', 'JCR', 'QCR', 'KCR',
    'ACN', '2CN', '3CN', '4CN', '5CN', '6CN', '7CN', '8CN', '9CN', '10CN', 'JCN', 'QCN', 'KCN',
    'AB', '2B', '3B', '4B', '5B', '6B', '7B', '8B', '9B', '10B', 'JB', 'QB', 'KB'
];
var group = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var orderCards = shuffleCards(cardsPlay);
var cardActive = '';
var indexActive = 0;

//Se ejecuta al hacer click en el botón de Iniciar Partida
$("#start").click(function () {
    $('#start').prop('disabled', true);
    $("#cardK").attr("src", "./Recursos/" + orderCards[12][3] + ".png");

    cardActive = orderCards[12][3];
    indexActive = 12;
    console.log(orderCards);
    selectCard(orderCards, group, cardActive, indexActive);
});


//Barajar las cartas y asignar en cada grupo
/*
    cards = Arreglo de cartas iniciales
*/
function shuffleCards(cards) {
    var groupCards = [[], [], [], [], [], [], [], [], [], [], [], [], []];
    let cardRandom = 0;
    groupCards.forEach(group => {
        for (let i = 0; i < 4; i++) {
            cardRandom = Math.floor(Math.random() * (cards.length - 0));
            group.push(cards[cardRandom]);
            cards.splice(cardRandom, 1);
        }
    });
    return groupCards;
}


//Asignar la carta en el lugar que le corresponde
/*
    orderCards = Arreglo de las cartas
    i = grupo de cartas al que se agrega la carta (0 = 'A', 1 = '2', ...)
    j = grupo de cartas al que se elimina la carta (0 = 'A', 1 = '2', ...)
    card = carta activa
*/
function assingCard(orderCards, i, j, card) {
    if (!assingCard.didrun) {
        assingCard.didrun = true;
    } else {
        orderCards[i].push(card);
        orderCards[j].splice(card, 1);
    }
    return orderCards;
}

//Muestra la imagen de la carta que está activa o en juego
/*
    orderCards = Arreglo de las cartas
    i = grupo de cartas al que se agrega la carta (0 = 'A', 1 = '2', ...)
    nameI = Nombre del grupo al que se agrega la carta (0 = 'A', 1 = '2', ...)
    namej = Nombre del grupo al que se elimina la carta (0 = 'A', 1 = '2', ...)
*/
const orderImages = (orderCards, i, nameI, nameJ) => new Promise((resolve) => {
    setTimeout(() => {
        $("#card" + nameI).attr("src", "./Recursos/" + orderCards[i][0] + ".png");
        $("#card" + nameJ).attr("src", "./Recursos/downCard.png");
        resolve();
    }, 1500);
});


//Selecciona la carta activa para luego ordenarla
/*
    cards = Arreglo de cartas
    group = Arreglo de los valores de las cartas (0 = 'A', 1 = '2', ...)
    cardActive = Carta que está en juego y se muestra al usuario
    indexActive = Índice de la carta que está en juego y se muestra al usuario (0 = 'A', 1 = '2', ...)
*/
function selectCard(cards, group, cardActive, indexActive) {
    console.log(cards);
    console.log(cardActive);
    console.log(group[indexActive]);

    if (cardActive.charAt(0) === group[indexActive] || (cardActive.charAt(0) === '1' && group[indexActive] === '10')) {
        showLostGame();
    } else {
        switch (cardActive.charAt(0)) {
            case 'A':
                orderImages(cards, 0, 'A', group[indexActive]).then(() => {
                    cards = assingCard(cards, 0, indexActive, cardActive);
                    cardActive = cards[0][0];
                    indexActive = 0;
                    selectCard(cards, group, cardActive, indexActive);
                });
                break;
            case '2':
                orderImages(cards, 1, '2', group[indexActive]).then(() => {
                    cards = assingCard(cards, 1, indexActive, cardActive);
                    cardActive = cards[1][0];
                    indexActive = 1;
                    selectCard(cards, group, cardActive, indexActive);
                });
                break;
            case '3':
                orderImages(cards, 2, '3', group[indexActive]).then(() => {
                    cards = assingCard(cards, 2, indexActive, cardActive);
                    cardActive = cards[2][0];
                    indexActive = 2;
                    selectCard(cards, group, cardActive, indexActive);
                });
                break;
            case '4':
                orderImages(cards, 3, '4', group[indexActive]).then(() => {
                    cards = assingCard(cards, 3, indexActive, cardActive);
                    cardActive = cards[3][0];
                    indexActive = 3;
                    selectCard(cards, group, cardActive, indexActive);
                });
                break;
            case '5':
                orderImages(cards, 4, '5', group[indexActive]).then(() => {
                    cards = assingCard(cards, 4, indexActive, cardActive);
                    cardActive = cards[4][0];
                    indexActive = 4;
                    selectCard(cards, group, cardActive, indexActive);
                });
                break;
            case '6':
                orderImages(cards, 5, '6', group[indexActive]).then(() => {
                    cards = assingCard(cards, 5, indexActive, cardActive);
                    cardActive = cards[5][0];
                    indexActive = 5;
                    selectCard(cards, group, cardActive, indexActive);
                });
                break;
            case '7':
                orderImages(cards, 6, '7', group[indexActive]).then(() => {
                    cards = assingCard(cards, 6, indexActive, cardActive);
                    cardActive = cards[6][0];
                    indexActive = 6;
                    selectCard(cards, group, cardActive, indexActive);
                });
                break;
            case '8':
                orderImages(cards, 7, '8', group[indexActive]).then(() => {
                    cards = assingCard(cards, 7, indexActive, cardActive);
                    cardActive = cards[7][0];
                    indexActive = 7;
                    selectCard(cards, group, cardActive, indexActive);
                });
                break;
            case '9':
                orderImages(cards, 8, '9', group[indexActive]).then(() => {
                    cards = assingCard(cards, 8, indexActive, cardActive);
                    cardActive = cards[8][0];
                    indexActive = 8;
                    selectCard(cards, group, cardActive, indexActive);
                });
                break;
            case '1':
                orderImages(cards, 9, '10', group[indexActive]).then(() => {
                    cards = assingCard(cards, 9, indexActive, cardActive);
                    cardActive = cards[9][0];
                    indexActive = 9;
                    selectCard(cards, group, cardActive, indexActive);
                });
                break;
            case 'J':
                orderImages(cards, 10, 'J', group[indexActive]).then(() => {
                    cards = assingCard(cards, 10, indexActive, cardActive);
                    cardActive = cards[10][0];
                    indexActive = 10;
                    selectCard(cards, group, cardActive, indexActive);
                });
                break;
            case 'Q':
                orderImages(cards, 11, 'Q', group[indexActive]).then(() => {
                    cards = assingCard(cards, 11, indexActive, cardActive);
                    cardActive = cards[11][0];
                    indexActive = 11;
                    selectCard(cards, group, cardActive, indexActive);
                });
                break;
            case 'K':
                orderImages(cards, 12, 'K', group[indexActive]).then(() => {
                    cards = assingCard(cards, 12, indexActive, cardActive);
                    cardActive = cards[12][0];
                    indexActive = 12;
                    selectCard(cards, group, cardActive, indexActive);
                });
                break;
        }
    }

}


//Mensaje que se muestra en caso de que se pierda la partida
function showLostGame() {
    $("#alert").html(`
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
        Has perdido la partida
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `);
}
