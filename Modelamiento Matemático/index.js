$(document).ready(function () {

    //Variables Usadas
    //T = Trebor  CR = Corazones Rojos  CN = Corazones Negrsos B = Brillos
    var cards = [
        'AT', '2T', '3T', '4T', '5T', '6T', '7T', '8T', '9T', '10T', 'JT', 'QT', 'KT',
        'ACR', '2CR', '3CR', '4CR', '5CR', '6CR', '7CR', '8CR', '9CR', '10CR', 'JCR', 'QCR', 'KCR',
        'ACN', '2CN', '3CN', '4CN', '5CN', '6CN', '7CN', '8CN', '9CN', '10CN', 'JCN', 'QCN', 'KCN',
        'AB', '2B', '3B', '4B', '5B', '6B', '7B', '8B', '9B', '10B', 'JB', 'QB', 'KB'
    ];

    var group = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];


    //Iniciar la partida
    $("#start").click(function () {
        //Barajar las cartas
        var orderCards = shuffleCards(cards);

        //Asignar la imagen de la primera carta activa
        $("#cardK").attr("src", "./Recursos/" + orderCards[12][3] + ".png");
        console.log(orderCards[12][3].substring(1, 2));

        //Variables
        let cardActive = orderCards[12][3];
        let groupActive = group[12];
        let cardBefore = orderCards[12][3];
        let groupBeforeIndex = 12;
        let aux;

        if (orderCards[12][3].substring(1, 2) !== '0') {
            while ((cardActive.charAt(0) !== groupActive)) {
                determinateCard(orderCards, cardActive, groupBeforeIndex, group);
                cardActive = 'AT';
                groupActive = group[0];
            }
            // showLostGame();
        } else {
            // while ((cardActive.substring(0, 2) !== groupActive)) {
            //     console.log('Funciona');
            //     cardActive = 'AT';
            //     groupActive = group[0];
            // }
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
    return groupCards;
}

//Asignar la carta a su respectivo grupo
function determinateCard(orderCards, cardActive, groupBeforeIndex, group) {
    let active = {};
    switch (cardActive.charAt(0)) {
        case 'A':
            assingCard(orderCards, 0, groupBeforeIndex, 'A', group[groupBeforeIndex], cardActive);
            active = {card: orderCards[0][1], group: 0}
            return active;
        case '2':
            assingCard(orderCards, 1, groupBeforeIndex, '2', group[groupBeforeIndex], cardActive);
            active = {card: orderCards[1][1], group: 1}
            return active;
        case '3':
            assingCard(orderCards, 2, groupBeforeIndex, '3', group[groupBeforeIndex], cardActive);
            active = {card: orderCards[2][1], group: 2}
            return active;
        case '4':
            assingCard(orderCards, 3, groupBeforeIndex, '4', group[groupBeforeIndex], cardActive);
            active = {card: orderCards[3][1], group: 3}
            return active;
        case '5':
            assingCard(orderCards, 4, groupBeforeIndex, '5', group[groupBeforeIndex], cardActive);
            active = {card: orderCards[4][1], group: 4}
            return active;
        case '6':
            assingCard(orderCards, 5, groupBeforeIndex, '6', group[groupBeforeIndex], cardActive);
            active = {card: orderCards[5][1], group: 5}
            return active;
        case '7':
            assingCard(orderCards, 6, groupBeforeIndex, '7', group[groupBeforeIndex], cardActive);
            active = {card: orderCards[6][1], group: 6}
            return active;
        case '8':
            assingCard(orderCards, 7, groupBeforeIndex, '8', group[groupBeforeIndex], cardActive);
            active = {card: orderCards[7][1], group: 7}
            return active;
        case '9':
            assingCard(orderCards, 8, groupBeforeIndex, '9', group[groupBeforeIndex], cardActive);
            active = {card: orderCards[8][1], group: 8}
            return active;
        case 'J':
            assingCard(orderCards, 10, groupBeforeIndex, 'J', group[groupBeforeIndex], cardActive);
            active = {card: orderCards[10][1], group: 10}
            return active;
        case 'Q':
            assingCard(orderCards, 11, groupBeforeIndex, 'Q', group[groupBeforeIndex], cardActive);
            active = {card: orderCards[11][1], group: 11}
            return active;
        case 'K':
            assingCard(orderCards, 12, groupBeforeIndex, 'K', group[groupBeforeIndex], cardActive);
            active = {card: orderCards[12][1], group: 12}
            return active;
        default:
            assingCard(orderCards, 9, groupBeforeIndex, '10', group[groupBeforeIndex], cardActive);
            break;
    }
}


//Asignar la carta en el lugar que le corresponde
/*
    orderCards = Arreglo de las cartas
    i = grupo de cartas al que se agrega la carta (0 = 'A', 1 = '2', ...)
    j = grupo de cartas al que se elimina la carta (0 = 'A', 1 = '2', ...)
    nameI = nombre del grupo de cartas al que se agrega la carta.
    nameJ = nomnre del grupo de cartas al que se elimina la carta.
    card = carta activa
*/
function assingCard(orderCards, i, j, nameI, nameJ, card) {
    orderCards[i].push(card);
    orderCards[j].splice(card, 1);
    setTimeout(() => {
        $("#card" + nameI).attr("src", "./Recursos/" + orderCards[i][0] + ".png");
        $("#card" + nameJ).attr("src", "./Recursos/downCard.png");
    }, 2000);
    return orderCards[i][0];
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
