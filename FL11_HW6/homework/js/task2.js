
alert('Please, input 3 numbers (a, b, c) for triangle sides length');
let a = prompt('Enter side a', '0');
let b = prompt('Enter side b', '0');
let c = prompt('Enter side c', '0');

let numA = parseInt(a);
let numB = parseInt(b);
let numC = parseInt(c);

if (numA + numB <= numC || numA + numC <= numB || numB + numC <= numA){
	alert('Triangle doesn’t exist');	
} else if (numA !== numB && numA !== numC && numB !== numC){
	alert('Normal triangle');
} else if (numA === numB && numB === numC){
	alert('Eequivalent triangle');
} else {
	alert('Isosceles triangle');
}
