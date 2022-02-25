function greet() {
	const d = new Date();
	let hour = d.getHours();

	let greet = ""

	if(hour < 12){
		greet = "Buenos días"
	} else if (hour < 19) {
		greet = "Buenas tardes"
	} else{
		greet = "Buenas noches"
	}

	console.log(greet)
}

module.exports.greeting = greet