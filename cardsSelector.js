let Now=new Date();
let Deck = [];
let q = 0;
let FullDeck = [];
let s = 0;
let Pull = {};
let CardFromDeck = {};
let PullDeck = [];
let E = 0;
let Bless = 0;
let Curse = 0;
let DispleyCount = false;
$(document).ready(function () {
    let P11 = false;
    let P12 = false;
    let P21 = false;
    let P22 = false;
    let P23 = false;
    let P31 = false;
    let P32 = false;
    let P4 = false;
    let P5 = false;
    let P6 = false;
    let P8 = false;
    let P9 = false;
    let P101 = false;
    let P102 = false;
    $("#PercksButton").click(function () {
            $("#deck1").css("opacity","0");
            $("#deck2").css("opacity","0");
        $('#console').prepend(`<div class="pConsole"><div class="time"> ${Now.getHours()}:${Now.getMinutes()}:${Now.getSeconds()}</div> You build new deck</div>`);
        $('#buttonBless').fadeTo(100,1);
        $('#buttonCurse').fadeTo(100,1);
        $('#button').fadeTo(50,1);
        ResetFullDeck();
        $('#buttonBless').text("Add bless");
        $("#buttonCurse").text("Add curse");
        if ($("#Perck1_1").is(":checked")) {
            P11 = true;
        } else {
            P11 = false;
        }
        if ($("#Perck1_2").is(":checked")) {
            P12 = true;
        } else {
            P12 = false;
        }
        if ($("#Perck2_1").is(":checked")) {
            P21 = true;
        } else {
            P21 = false;
        }
        if ($("#Perck2_2").is(":checked")) {
            P22 = true;
        } else {
            P22 = false;
        }
        if ($("#Perck2_3").is(":checked")) {
            P23 = true;
        } else {
            P23 = false;
        }
        if ($("#Perck3_1").is(":checked")) {
            P31 = true;
        } else {
            P31 = false;
        }
        if ($("#Perck3_2").is(":checked")) {
            P32 = true;
        } else {
            P32 = false;
        }
        if ($("#Perck4").is(":checked")) {
            P4 = true;
        } else {
            P4 = false;
        }
        if ($("#Perck5").is(":checked")) {
            P5 = true;
        } else {
            P5 = false;
        }
        if ($("#Perck6").is(":checked")) {
            P6 = true;
        } else {
            P6 = false;
        }
        if ($("#Perck8").is(":checked")) {
            P8 = true;
        } else {
            P8 = false;
        }
        if ($("#Perck9").is(":checked")) {
            P9 = true;
        } else {
            P9 = false;
        }
        if ($("#Perck10_1").is(":checked")) {
            P101 = true;
        } else {
            P101 = false;
        }
        if ($("#Perck10_2").is(":checked")) {
            P102 = true;
        } else {
            P102 = false;
        }

        Deck = emptyDeck();
        if (P11) {
            for (let l = Deck.length - 1; l >= 0; l--) {
                if (Deck[l].card === "-1") {
                    // console.log(l + Deck[l].card);
                    Deck.splice(l, 1);
                    q++;
                    if (q === 2) {
                        q = 0;
                        break;
                    }
                }
            }
        }
        if (P12) {
            for (let l = Deck.length - 1; l >= 0; l--) {
                if (Deck[l].card === "-1") {
                    // console.log(l + Deck[l].card);
                    Deck.splice(l, 1);
                    q++;
                    if (q === 2) {
                        q = 0;
                        break;
                    }
                }
            }
        }
        if (P21) {
            for (let l = Deck.length - 1; 1 >= 0; l--) {
                if (Deck[l].card === "+0") {
                    Deck[l] = {card: "+1", image: "<img src=\"png/card_+1.png\" height=\"128\" width=\"200\"/>"};
                    q++;
                    if (q === 2) {
                        q = 0;
                        break;
                    }
                }
            }
        }
        if (P22) {
            for (let l = Deck.length - 1; 1 >= 0; l--) {
                if (Deck[l].card === "+0") {
                    Deck[l] = {card: "+1", image: "<img src=\"png/card_+1.png\" height=\"128\" width=\"200\"/>"};
                    q++;
                    if (q === 2) {
                        q = 0;
                        break;
                    }
                }
            }
        }
        if (P23) {
            for (let l = Deck.length - 1; 1 >= 0; l--) {
                if (Deck[l].card === "+0") {
                    Deck[l] = {card: "+1", image: "<img src=\"png/card_+1.png\" height=\"128\" width=\"200\"/>"};
                    q++;
                    if (q === 2) {
                        q = 0;
                        break;
                    }
                }
            }
        }
        if (P31) {
            for (let l = 1; l < 3; l++) {
                Deck[Deck.length] = {
                    card: "=> +1",
                    image: "<img src=\"png/card_+1++.png\" height=\"128\" width=\"200\"/>"
                };
            }
        }
        if (P32) {
            for (let l = 1; l < 3; l++) {
                Deck[Deck.length] = {
                    card: "=> +1",
                    image: "<img src=\"png/card_+1++.png\" height=\"128\" width=\"200\"/>"
                };
            }
        }
        if (P4) {
            Deck[Deck.length] = {
                card: "+2?",
                image: "<img src=\"png/card_+2_DISADVANTAGE.png\" height=\"128\" width=\"200\"/>"
            };
        }
        if (P5) {
            Deck[Deck.length] = {
                card: "+1 poison",
                image: "<img src=\"png/card_+1_POISEN.png\" height=\"128\" width=\"200\"/>"
            };
        }
        if (P6) {
            Deck[Deck.length] = {
                card: "+1 wound",
                image: "<img src=\"png/card_+1_WOUND.png\" height=\"128\" width=\"200\"/>"
            };
        }
        if (P8) {
            Deck[Deck.length] = {
                card: "+1 immobilize",
                image: "<img src=\"png/card_+1_PARALIZED.png\" height=\"128\" width=\"200\"/>"
            };
        }
        if (P9) {
            Deck[Deck.length] = {
                card: "+1 stun",
                image: "<img src=\"png/card_+0_STUN.png\" height=\"128\" width=\"200\"/>"
            };
        }
        if (P101) {
            Deck[Deck.length] = {
                card: "=> +target",
                image: "<img src=\"png/card_+TARGET.png\" height=\"128\" width=\"200\"/>"
            };
        }
        if (P102) {
            Deck[Deck.length] = {
                card: "=> +target",
                image: "<img src=\"png/card_+TARGET.png\" height=\"128\" width=\"200\"/>"
            };
        }
        console.log(Deck);
        FullDeck = [...Deck];
    });

});

function emptyDeck() {
    let cp0 = 6;
    let cp1 = 5;
    let cm1 = 5;
    let cp2 = 1;
    let cm2 = 1;
    let cx2 = 1;
    let cmiss = 1;
    let ED = [];
    let t = 0;
    for (let q = 0; q < cp0; q++) {
        ED[t++] = {card: "+0", image: "<img src=\"png/card_+0.png\" height=\"128\" width=\"200\"/>"};
    }
    for (let q = 0; q < cp1; q++) {
        ED[t++] = {card: "+1", image: "<img src=\"png/card_+1.png\" height=\"128\" width=\"200\"/>"};
    }
    for (let q = 0; q < cm1; q++) {
        ED[t++] = {card: "-1", image: "<img src=\"png/card_-1.png\" height=\"128\" width=\"200\"/>"};
    }
    for (let q = 0; q < cp2; q++) {
        ED[t++] = {card: "+2", image: "<img src=\"png/card_+2.png\" height=\"128\" width=\"200\"/>"};
    }
    for (let q = 0; q < cm2; q++) {
        ED[t++] = {card: "-2", image: "<img src=\"png/card_-2.png\" height=\"128\" width=\"200\"/>"};
    }
    for (let q = 0; q < cx2; q++) {
        ED[t++] = {card: "x2", image: "<img src=\"png/card_X2.png\" height=\"128\" width=\"200\"/>"};
    }
    for (let q = 0; q < cmiss; q++) {
        ED[t++] = {card: "miss", image: "<img src=\"png/card_MISS.png\" height=\"128\" width=\"200\"/>"};
    }
    return ED
}

function ResetFullDeck() {
    FullDeck = [...Deck];
    PullDeck = [];
    E = 0;
    Bless=0;
    Curse=0;



}

function CardPull() {
    s = Math.floor(Math.random() * FullDeck.length);
    if (Pull.card === "x2" || Pull.card === "miss" ) {
        console.log("reset");
        ResetFullDeck();
    }
    if (Pull.card === "bless") {
        --Bless;
        if (Bless === 0) {
            $('#buttonBless').text("Add bless")
        } else {
            $('#buttonBless').text("Bless " + Bless);
        }
        for (let z = 0; z < Deck.length; z++) {
            if (Deck[z].card === "bless") {
                Deck.splice(z, 1);
                z = Deck.length;
            }
        }

    }
    if (Pull.card === "curse") {
        --Curse;
        if (Curse === 0) {
            $("#buttonCurse").text("Add curse")
        } else {
            $('#buttonCurse').text("Curse " + Curse);
        }
        for (let z = 0; z < Deck.length; z++) {
            if (Deck[z].card === "curse") {
                Deck.splice(z, 1);
                z = Deck.length;
            }
        }

    }

    Pull = FullDeck[s];
    FullDeck.splice(s, 1);

    return Pull
}

function animate1() {
    $("#deck1").fadeTo(100,1);
    let DivXFYF = Object.values($("#fulldeck").offset());
    let DivXF = DivXFYF[1];
    let DivYF = DivXFYF[0];
    let DivX1Y1 = Object.values($("#deck1").offset());
    let DivX1 = DivX1Y1[1];
    let DivY1 = DivX1Y1[0];
    console.log("anomate1");
    $("#fulldeck")
        .animate({left: -(DivXF - DivX1), top: +(DivY1 - DivYF)}, 100, function () {
            $("#deck1").html(CardFromDeck.image);
        })
        .fadeOut(100)
        .animate({left: +(DivXF - DivX1) / 300, top: -(DivY1 - DivYF) / 300}, 100)
        .fadeIn(100)
}

function animate2() {
    $("#deck2").fadeTo(100,1);
    let DivXFYF = Object.values($("#fulldeck").offset());
    let DivXF = DivXFYF[1];
    let DivYF = DivXFYF[0];
    let DivX2Y2 = Object.values($("#deck2").offset());
    let DivX2 = DivX2Y2[1];
    let DivY2 = DivX2Y2[0];
    console.log("anomate2");
    $("#fulldeck")
        .animate({left: +(DivX2 - DivXF), top: +(DivY2 - DivYF)}, 100, function () {
            $("#deck2").html(CardFromDeck.image);
        })
        .fadeOut(100)
        .animate({left: -(DivX2 - DivXF) / 300, top: -(DivY2 - DivYF) / 300}, 100)
        .fadeIn(100)
}

function DispleyCard() {

    console.log($("#fulldeck").offset());
    $("#fulldeck").html("<img src=\"png/card_back.png\" height=\"128\" width=\"200\"/>");
    if (DispleyCount === false) {
        animate2();
        DispleyCount = true;
    } else {
        animate1();
        DispleyCount = false;
    }
}

$(document).ready(function () {
    $("#button").click(function () {
        if (Deck.length === 0) {
            console.log("Deck is empty");
        } else {
            CardFromDeck = CardPull();
            $('#console').prepend(`<div class="pConsole"><div class="time"> ${Now.getHours()}:${Now.getMinutes()}:${Now.getSeconds()} </div> You draw "${CardFromDeck.card}"</div>`);
            PullDeck[E] = CardFromDeck;
            console.log("card index: " + E);
            DispleyCard();
            E++;
            console.log(CardFromDeck);
            console.log(PullDeck.length);
            console.log(PullDeck);
        }
    });

    $('#buttonBless').click(function () {
            if (Bless < 9) {
                Deck[Deck.length] = {
                    card: "bless",
                    image: "<img src=\"png/card_bless.png\" height=\"128\" width=\"200\"/>"
                };
                FullDeck[FullDeck.length] = {
                    card: "bless",
                    image: "<img src=\"png/card_bless.png\" height=\"128\" width=\"200\"/>"
                };
                $('#buttonBless').text('Bless ' + (++Bless));
            }
        }
    );
    $('#buttonCurse').click(function () {
        if (Curse < 9) {
            Deck[Deck.length] = {
                card: "curse",
                image: "<img src=\"png/card_curse.png\" height=\"128\" width=\"200\"/>"
            };
            FullDeck[FullDeck.length] = {
                card: "curse",
                image: "<img src=\"png/card_curse.png\" height=\"128\" width=\"200\"/>"
            };
            $('#buttonCurse').text('Curse ' + (++Curse));
        }
    })
});




