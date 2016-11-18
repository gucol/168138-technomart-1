//объявление переменных для buy-popup
  var BuyLink = document.querySelectorAll(".buy");
  var BuyPopup = document.querySelector(".buy-popup");
  var BuyClose = BuyPopup.querySelector(".buy-popup-close");
  var BuyBasket = document.querySelector(".basket");		
//BUY-POPUP  
//открытие popup:

var buttonBuy;

for (var i = 0; i < BuyLink.length; i++) {
    
    buttonBuy = BuyLink[i];

    buttonBuy.addEventListener("click", function(event){
  event.preventDefault();
  BuyPopup.classList.add("buy-popup-show");
  BuyBasket.classList.add("basket-active");
 });
}

//закрыть buy-popup
		BuyClose.addEventListener ("click", function(event){
			event.preventDefault();
			BuyPopup.classList.remove("buy-popup-show");
		});

		window.addEventListener("keydown", function(event){
			if(event.keyCode === 27) {
				if (BuyPopup.classList.contains("buy-popup-show")){
					BuyPopup.classList.remove("buy-popup-show");
				}
			}
		});

		

