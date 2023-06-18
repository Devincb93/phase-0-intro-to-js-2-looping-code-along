const cards = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cards) {
    const messages = [];

    for (let i = 0; i < cards.length; i++) {
       messages.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);

    }
    return messages;
}
writeCards(cards);

function countDown(number) {
    for (let i = 10; i >= 0; i--)
    console.log(i);
}
countDown(10);