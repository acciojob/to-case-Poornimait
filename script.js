function toCase(text) {
	
	res=text.toLowerCase()+"-"+text.toUpperCase();
	
	console.log(res);
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
