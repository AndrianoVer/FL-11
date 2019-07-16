let numbers = {
	one: 1,
	two: 2,
	three: 3,
	five: 5,
	eight: 8
}

// Task 0
function getNumbers(str) {
	let filterArr = [];
	let arrSplit;
	arrSplit = str.split('');
	arrSplit.forEach(item => {
		if (!isNaN(item)) {
			filterArr.push(item)
		}				
	});
	return filterArr;			
}
console.log(getNumbers('n1um3ber95'));
console.log(getNumbers('string'));

// Task 1
function findTypes(...args) {
	const result = {};
	args.forEach((element, ind) => {
		result[typeof element] = ind + 1;
	});
	return result;
}

console.log(findTypes('number'));
console.log(findTypes(null, numbers.five, 'hello'));

// Task 2
function executeforEach() {
	let arr = [numbers.one, numbers.two, numbers.three];
	arr.forEach(elem => {
		console.log(elem)
	})
}
executeforEach();

// Task 3

function mapArray(array, n) {
	let arrInc = array;
	let mapArr = arrInc.map(number => {
		return number + n;
	});
	return mapArr;
}
console.log(mapArray([numbers.two, numbers.five, numbers.eight], numbers.three));

// Task 4
function filterArray(arr, maxNumber) {
	let arrIncome = arr;
	let filterArr = arrIncome.filter(function (number) {
		return number < maxNumber;
	});
	return filterArr;
}
console.log(filterArray([numbers.two, numbers.five, numbers.eight], numbers.three));

// Tack 5
function showFormattedDate(date) {	
	let month = [
		'Jan', 'Feb', 'Mar',
		'Apr', 'May', 'Jun', 'Jul',
		'Aug', 'Sep', 'Oct',
		'Nov', 'Dec'
	];

	let day = date.getDate();
	let monthIndex = date.getMonth();
	let year = date.getFullYear();

	return day + ' ' + month[monthIndex] + ' ' + year;
}

console.log('Date:', showFormattedDate(new Date('2019-01-27T01:10:00')));

// Task 6

function canConvertToDate(input) {
	let inputDate = new Date(input);
	if (!isNaN(inputDate.getMonth())) {
		return true;
	}
	return false;
}

console.log(canConvertToDate('2016-13-18T00:00:00'));
console.log(canConvertToDate('2016-03-18T00:00:00'));

// Task 7
function daysBetween(date1, date2) {      
	let one_day = 86400000;
	let date1_ms = date1.getTime();	
	let date2_ms = date2.getTime();	
	let difference_ms = date2_ms - date1_ms;	
	return Math.round(difference_ms / one_day);  
} 
console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));

// Task 8
const data = [
	{
		'_id': '5b5e3168c6bf40f2c1235cd6',
		'index': 0,
		'birthday': '2016-03-18T00:00:00',
		'eyeColor': 'green',
		'name': 'Stein',
		'favoriteFruit': 'apple'
	},
	{
		'_id': '5b5e3168e328c0d72e4f27d8',
		'index': 1,
		'birthday': '1991-02-11T00:00:00',
		'eyeColor': 'blue',
		'name': 'Cortez',
		'favoriteFruit': 'strawberry'
	},
	{
		'_id': '5b5e3168cc79132b631c666a',
		'index': 2,
		'birthday': '1984-04-17T00:00:00',
		'eyeColor': 'blue',
		'name': 'Suzette',
		'favoriteFruit': 'apple'
	},
	{
		'_id': '5b5e31682093adcc6cd0dde5',
		'index': 3,
		'birthday': '1994-04-17T00:00:00',
		'eyeColor': 'green',
		'name': 'George',
		'favoriteFruit': 'banana'
	}
]

function getAmountOfAdultPeople(data){
	let res = [];
	let num = 31536000000;
	let age = 18;

	for (let i = 0; i < data.length; i++) {
		let dateNow = new Date();
		let userBirthday = Math.ceil((dateNow - new Date(data[i].birthday)) / num);
		if (userBirthday > age) {
			res.push(data[i].name + '-' + userBirthday);
		}
	}
	return res.join(' ');
}
console.log(getAmountOfAdultPeople(data));

// Task 9
function getKeys(obj) {
	let keys = [];
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			keys.push(key);
		}
	}
	return keys;
}

console.log(getKeys({keyOne: 1, keyTwo: 2, keyThree: 3}));

// Task 10

function getValues(obj) {
	let values = [];
	for (let key in obj) {
		if(obj.hasOwnProperty(key)) {
			values.push(obj[key])
		}
	}
	return values;
}

console.log(getValues({ keyOne: 1, keyTwo: 2, keyThree: 3 }))