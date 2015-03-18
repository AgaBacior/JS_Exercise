communication.register('Aga');
var objekt = {
	'element':'div',
	'css': {
		'width': '100px',
		'color': 'red',
		'fontSize':'22px'
	},
	'innerText':'Hello'
}
communication.sendTo('Zuza', objekt);

communication.addMessageListener(function(kto,co){

	console.log(kto,co);
	var elem1 = document.createElement(co.element);
	
	var prop;
	for(prop in co.css) {
	elem1.style[prop] = co.css[prop];
	}

	elem1.innerText = co.innerText;
	document.body.appendChild(elem1);

});



