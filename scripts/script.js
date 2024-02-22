const cards = document.querySelectorAll(".card");

for (let index = 0; index < cards.length; index++) {
  const card = cards[index];
card.addEventListener('click' , function () {
    //console.log("clicked");
     const totalPriceElement = document.getElementById('totalPrice');
     const totalPriceText = totalPriceElement.innerText;
     const totalPriceNumber = parseInt(totalPriceText);
     const totalPrice = totalPriceNumber + 550;
     totalPriceElement.innerText = totalPrice;

     if(totalPriceNumber > 4){
        function myFunction() {
            alert("You can select maximum 4 seat!");
          }
          
     }else{
        
     }
})
}