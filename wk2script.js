for( var num = 0; num <= 100; num++ ) {
	if (num%3 === 0 && num%5 !== 0) {
		console.log("Fizz");
	} 
	else if (num%5 === 0 && num%3 !== 0) {
		console.log("Buzz");
	}
	else if (num%5 === 0 && !num%3 === 0) {
		console.log("FizzBuzz");
	}
	else {
	   console.log(num); 
	}
}

function showDate() {
	document.getElementById("currentDate").innerHTML = Date();
}
