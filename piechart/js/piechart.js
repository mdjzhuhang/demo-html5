var male = 80;
var female = 20;
var pie1 = document.querySelector('#student');
setPie(pie1, male, female);

function setPie(element, num1, num2, total) {
	var total = total ? total : num1 + num2;
	var p1 = 100 * num1 / total; // blue part
	var p2 = 100 * (num1 + num2) / total; // yellow part
	console.log(p1 + '----' + p2)
	element.classList.add('p1-' + p1);
	element.classList.add('p2-' + p2);
}

var part1 = 50;
var part2 = 20;
var part3 = 70;
var total = 200;
var pie2 = document.querySelector('#staff');
setPie3(pie2, part1, part2, part3, total);

function setPie3(element, num1, num2, num3, total) {
	var total = total ? total : num1 + num2 + num3;
	var p1 = 100 * num1 / total; // blue part
	var p2 = 100 * (num1 + num2) / total; // yellow part
	var p3 = 100 * (num1 + num2 + num3) / total; // green part
	console.log(p1 + '----' + p2 + '----' + p3);
	element.classList.add('p1-' + p1);
	element.classList.add('p2-' + p2);
	element.classList.add('p3-' + p3);
}