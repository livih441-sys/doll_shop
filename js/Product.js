// For product 
const btns = document.querySelectorAll(".sidelink button");
const cards = document.querySelectorAll(".card");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click",filterCards)
    
}

function filterCards(e){
    const btnType = e.target.dataset.btn;
    cards.forEach(
        card => {
            card.style.display = "block";
            if (!btnType) {
                return;
            }
            const cardType = card.dataset.info.split(" ")[0];
            if (cardType !== btnType){
                card.style.display = "none";
            }
        }
    )
}

btns[0].addEventListener("click", (e)=>{
    cards.forEach(card=>{
        card.style.display = "block";
    })
})