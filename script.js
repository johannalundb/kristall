function backgroundCallback() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
  
    if (h >= 7 && h <= 19) {
    	setTimeMode(true);
    } else {
		setTimeMode(false);
    }
}

function clockCallback() {
	var today = new Date();
	var h = today.getHours();
    var m = today.getMinutes();

	$("#clock").html(zeroPad(h) + ":" + zeroPad(m));
}

function zeroPad(i) {
    if (i < 10) {
    	return "0" + i;
    }
    return i;
}

function setTimeMode(isDay) {
	var newClassName = isDay ? "day" : "night";
	var oldClassName = isDay ? "night" : "day";

	if ($(this).hasClass(newClassName)) {
		return;
	}

	$("body").removeClass(oldClassName).addClass(newClassName);
}

$(document).ready(function () {
	var clockInterval = setInterval(clockCallback, 1000);
	var backgroundInterval = setInterval(backgroundCallback, 1000);
	backgroundCallback();

	$(".toggle").click(function () {
		clearInterval(backgroundInterval);
		if ($("body").hasClass("night")) {
			$("body").removeClass("night");
			$("body").addClass("day");
		} else {
			$("body").removeClass("day");
			$("body").addClass("night");
		}
	}); 
});