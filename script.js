$(document).ready(function() {


	var fizzBuzz = function() {

		for (var i = 0; i <= 100; i++) {
			if (i % 3 === 0) {
				console.log("fizz");
			} else if (i % 5 === 0) {
				console.log("fuzz")
			} else {
				console.log(i);
			}
		};


	};

	fizzBuzz();


});


