$(function () {


	$('.slider-animals').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		variableWidth: true,
		centerMode: true,
		autoplay: true,
		autoplaySpeed: 4000,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrow-left.svg" alt="arrow-left" />',
		nextArrow: '<img class="slider-arrows slider-arrows__rigth" src="images/arrow-right.svg" alt="arrow-rigth" />',
	});

}

)
