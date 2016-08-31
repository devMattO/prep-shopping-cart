window.onload = function(){



var items = [
  { "name": "Lusicious Jello Mix", "description": ["Very Elegant", "Trending item", "Come in Purple"], "price": 80.65 },
  { "name": "Tarnished Standing Desk", "description": ["Modular", "Works for both Tall and Loud People", "Smells like Productivity"], "price": 1654.99},
  { "name": "Hand-made Hand Grenades", "description": ["Such gift!", "Much boom!", "Very safe for kids"], "price": 10.44},
  { "name": "Pan-fried Cookie Dough", "description": ["Chocolate", "Family-size", "Hot Mess"], "price": 16.99 },
  { "name": "Fancy Dress Hanger", "description": ["Keep organized", "On Sale"], "price": 67.32 },
  { "name": "Snarky Britsh Mustache 3-Pack", "description": ["Sharing is caring!", "Hugs not drugs", "As seen on 'So You Think You Can Dance - Nigeria!'"], "price": 1.99 },
];

function getItems(goods){
	for (var i = 0; i < goods.length; i++) {

		var mainContainer = document.createElement('div');
		mainContainer.className = 'main';
		document.getElementById('mainWrap').appendChild(mainContainer);

		var rowElement = document.createElement('div');
		rowElement.className = 'row';
		mainContainer.appendChild(rowElement);

		var nameElement = document.createElement('div');
		nameElement.id = 'name';
		nameElement.innerHTML = goods[i].name;
		rowElement.appendChild(nameElement);

		var descriptionElement = document.createElement('div');
		descriptionElement.id = 'description';
		descriptionElement.innerHTML = goods[i].description;
		rowElement.appendChild(descriptionElement);

		var priceElement = document.createElement('div');
		priceElement.id = 'price';
		priceElement.innerHTML = goods[i].price;
		rowElement.appendChild(priceElement);

	}

}

getItems(items);

function updateSubtotalList(goods){
	var subtotal = 0;
	for (var i = 0; i < goods.length; i++) {
		subtotal += goods[i].price;
	}
	console.log(subtotal);
}

updateSubtotalList(items);






















};