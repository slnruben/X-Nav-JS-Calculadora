function changer(id, newValue) {
	var element = document.getElementById(id);
	element.innerHTML = newValue;
}

function addToDisplay(id, newValue) {
	var element = document.getElementById(id);
	element.innerHTML = element.innerHTML + newValue;
}

function suma(nums) {
	var total = 0;
	for (i in nums) {
		total += parseInt(nums[i], 2);
	}
	var result = total.toString(2);
	changer("display", result); 
}

function zero() {
	var element = document.getElementById("display");
	addToDisplay("display", "0");
}

function one() {
	var element = document.getElementById("display");
	addToDisplay("display", "1");
}

function add() {
	var element = document.getElementById("display");
	addToDisplay("display", "+");
}

function equal() {
	var div = document.getElementById("display");
	var element = div.innerHTML;
	if (element.indexOf("+") !== -1) {
		var nums = element.split("+");
		suma(nums);
	}
}