/* Create a webpage with a 16*16 square grid of divs */
$(document).ready(function() {

function draw_grid() {
	for(i = 0; i < grid_size; i++) {
		for(j = 0; j < grid_size; j++)
			$("#wrapper").append("<div class='box'></div>");
	}
}

function hover() {
	$(".box").mouseover(function() {
		// $(this).css("background-color", 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')');
		var opacity = $(this).css("opacity");
		console.log(opacity);
		opacity -= 0.1;
		$(this).css("opacity", opacity);
	});
}

$("button").click(function() {
	grid_size = prompt("Please enter the number of boxes per side", "16");

	$("#wrapper").empty();

	draw_grid();

	$(".box").height(320 / grid_size);
	$(".box").width(320 / grid_size);

	hover();
});

var grid_size = 16;

draw_grid();
hover();


});