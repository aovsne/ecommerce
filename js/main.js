// constructive notation
function consoles(name,price,brand,inStock,image){
	this.name = name
	this.price = price
	this.brand = brand
	this.inStock = inStock
	this.image = image
}

// creating array for the objects
var djArray = []

// creating variables for each consoles with arguments.
var ddjsx = new consoles('DDJ-SX', 1000,'Pioneer', 50, 'img/ddjsx.png')
var ddjwego = new consoles('DDJ-WEGO', 267,'Pioneer', 100, 'img/ddjwego.png')
var ddjsb2 = new consoles('DDJ-SB2', 209,'Pioneer', 29, 'img/sb2.png')
var mixtrack = new consoles('MIXTRACK3', 149,'Numark', 100, 'img/mixtrack.png')
var nvii = new consoles('NVII', 699,'Numark', 57, 'img/nv2.png')
var ns7fx = new consoles('NS7FX', 1499,'Numark', 20, 'img/ns7.png')

djArray.push(ddjsx)
djArray.push(ddjwego)
djArray.push(ddjsb2)
djArray.push(mixtrack)
djArray.push(nvii)
djArray.push(ns7fx)

// for loop
for(i = 0; i < djArray.length; i++){
	// textNode
	var djName = document.createTextNode(djArray[i].name)
	var price = document.createTextNode('Price:$ ' + djArray[i].price)
	var brand = document.createTextNode('Brand: ' + djArray[i].brand)
	var btnText = document.createTextNode('BUY NOW')
	var inStock = document.createTextNode('In Stock: ' + djArray[i].inStock)
	var img = djArray[i].image
	

	// new element
	
	var newDiv = document.createElement('div')
	newDiv.className = 'one col-sm-4'
	var divThum = document.createElement('div')
	divThum.className = 'console' + [i] + ' thumbnail'
	var newH3 = document.createElement('h3')
	newH3.className = 'head3'
	var priceH4 = document.createElement('h4')
	var stockH4 = document.createElement('h4')
	var brandH4 = document.createElement('h4')
	var newImg = document.createElement('img')
	var button = document.createElement('button')
	button.className = 'btn btn-primary'
	newImg.setAttribute('src', img)
	newImg.className = 'img-responsive'

	// appending child
	divThum.appendChild(newH3)
	divThum.appendChild(newImg)
	divThum.appendChild(brandH4)
	divThum.appendChild(priceH4)
	divThum.appendChild(stockH4)
	divThum.appendChild(button)
	button.appendChild(btnText)

	
	

	newH3.appendChild(djName)
	priceH4.appendChild(price)
	brandH4.appendChild(brand)
	stockH4.appendChild(inStock)
	newDiv.appendChild(divThum)

	
	document.getElementById('dj').appendChild(newDiv)


}