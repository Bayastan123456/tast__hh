const card = document.querySelector(".card");
const cardList = document.querySelector(".card__list");

for (let i = 0; i < 17; i++) {
  const clonedCard = card.cloneNode(true);
  cardList.append(clonedCard);
}
