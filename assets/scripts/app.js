const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Chemistry",
				weight: 12.3
			}, {
				text: "Math",
				weight: 8
			}, {
				text: "Biology",
				weight: 14
			}, {
				text: "English",
				weight: 3
			}, //{
				//text: "Science",
				//weight: 7
			//}, 
			{
				text: "Civics",
				weight: 10
			}, {
				text: "B.Indonesia",
				weight: 9
			}, {
				text: "Physics",
				weight: 15
			}, {
				text: "Mandarin",
				weight: 7
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 500; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				" Am a Senior High ","From Prime One School.", " Love everything about Math ", " And Physics."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
