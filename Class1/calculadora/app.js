let mateBasica = require('./mate');

const prompt = require('prompt-sync')();

const name = prompt('Select Operation (+, -, *, /)');
const numb1 = prompt('Input number');
const numb2 = prompt('Input second number');

switch (name) {
	case '+':
  		console.log(mateBasica.suma(numb1,numb2));
    	break;
	case '-':
		console.log(mateBasica.resta(numb1,numb2));
		break;
	case '*':
		console.log(mateBasica.producto(numb1,numb2));
		break;
	case '/':
		console.log(mateBasica.division(numb1,numb2));
		break;
  default:
    console.log(`Sorry, we did not find the operatio: ${name}.`);
};
