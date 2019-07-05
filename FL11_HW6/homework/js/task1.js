let a1 = prompt('enter coordinate x for point A');
let a2 = prompt('enter coordinate y for point A');
let b1 = prompt('enter coordinate x for point B');
let b2 = prompt('enter coordinate y for point B');
let c1 = prompt('enter coordinate x for point C');
let c2 = prompt('enter coordinate y for point C');

let A1 = Math.round(parseFloat(a1));
let A2 = Math.round(parseFloat(a2));
let B1 = Math.round(parseFloat(b1));
let B2 = Math.round(parseFloat(b2));
let C1 = Math.round(parseFloat(c1));
let C2 = Math.round(parseFloat(c2));

let segmentDivideByHalf;
let z = 2;

if ((A1 + B1) / z === C1 && (A2 + B2) / z === C2){
	segmentDivideByHalf = true;
} else {
	segmentDivideByHalf = false;
}

console.log(segmentDivideByHalf);
