
		
//переменные для карты
		var MapLink = document.querySelector(".map");
		var MapPopup = document.querySelector(".map-popup");
		var MapClose = MapPopup.querySelector(".map-popup-close");

//MAP-POPUP
//открытие карты
		MapLink.addEventListener("click", function(event){
			event.preventDefault();
			MapPopup.classList.add("map-popup-show");
		});
//закрыть карту
		MapClose.addEventListener ("click", function(event){
			event.preventDefault();
			MapPopup.classList.remove("map-popup-show");
		});

		window.addEventListener("keydown", function(event){
			if(event.keyCode === 27) {
				if (MapPopup.classList.contains("map-popup-show")){
					MapPopup.classList.remove("map-popup-show");
				}
			}
		});


//переменные для формы "написать нам"
		var ContactLink = document.querySelector(".search-us");
		var ContactPopup = document.querySelector(".contact-popup");
		var ContactClose = ContactPopup.querySelector(".contact-popup-close");
		
		var ContactForm = ContactPopup.querySelector("form");
		var ContactName = ContactPopup.querySelector("[name=name]");
		var ContactEmail = ContactPopup.querySelector("[name=email]");

		var StorageName = localStorage.getItem("name");


//CONTACT-POPUP
//открытие popup "написать нам"
		ContactLink.addEventListener("click", function(event){
			event.preventDefault();
			ContactPopup.classList.add("contact-popup-show");
			

			if(StorageName) {
				ContactName.value = StorageName;
				ContactEmail.focus();
			} else {
				ContactName.focus();
			}
		});

//закрытие popup "написать нам"
		ContactClose.addEventListener ("click", function(event){
			event.preventDefault();
			ContactPopup.classList.remove("contact-popup-show");
		});

		window.addEventListener("keydown", function(event){
			if(event.keyCode === 27) {
				if (ContactPopup.classList.contains("contact-popup-show")){
					ContactPopup.classList.remove("contact-popup-show");
				}
			}
		});

//работа с формой
		ContactForm.addEventListener("submit", function(event){
			if(!ContactName.value || !ContactEmail.value) {
				event.preventDefault();
				alert("Беда-беда! Вы не указали имя или email! Возможно, Вы вообще ничего не указали.");
			} else {
				localStorage.setItem("name", ContactName.value )
			}	
		});


//объявление переменных для buy-popup
		var BuyLink = document.querySelector(".buy");
		var BuyPopup = document.querySelector(".buy-popup");
		var BuyClose = BuyPopup.querySelector(".buy-popup-close");
		var BuyBasket = document.querySelector(".basket");

//BUY-POPUP		
//открытие popup:
		BuyLink.addEventListener("click", function(event){
			event.preventDefault();
			BuyPopup.classList.add("buy-popup-show");
			BuyBasket.classList.add("basket-active");
		});

//закрытие popup "написать нам"
		BuyClose.addEventListener ("click", function(event){
			event.preventDefault();
			BuyPopup.classList.remove("buy-popup-show");
		});

		window.addEventListener("keydown", function(event){
			if(event.keyCode === 27) {
				if (BuyPopup.classList.contains("buy-popup-show")){
					BuyPopup.classList.remove("Buy-popup-show");
				}
			}
		});