// NEED HELP PAGE SCRIPTS
const accordionHeader = document.querySelectorAll('.programs-first-kids-hospice__inner__all-accordions__accordion__header');

accordionHeader.forEach(accordionHeader => {
	accordionHeader.addEventListener('click', event => {
		const currentActiveHeader = document.querySelector('.programs-first-kids-hospice__inner__all-accordions__accordion__header.active');
		if (currentActiveHeader && currentActiveHeader !== accordionHeader) {
			currentActiveHeader.classList.toggle('active');
			currentActiveHeader.nextElementSibling.style.maxHeight = 0;
		}

		accordionHeader.classList.toggle('active');
		const accordionBody = accordionHeader.nextElementSibling;

		if (accordionHeader.classList.contains('active')) {
			accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
		} else {
			accordionBody.style.maxHeight = 0;
		}
	});
});
// END NEED HELP PAGE SCRIPTS



// LEGAL ENTITIES PAGE SCRIPTS
const accordionHeaderLegal = document.querySelectorAll('.legal-programs-first-kids-hospice__inner__all-accordions__accordion__header');

accordionHeaderLegal.forEach(accordionHeaderLegal => {
	accordionHeaderLegal.addEventListener('click', event => {
		const currentActiveHeaderLegal = document.querySelector('.legal-programs-first-kids-hospice__inner__all-accordions__accordion__header.active-legal');
		if (currentActiveHeaderLegal && currentActiveHeaderLegal !== accordionHeaderLegal) {
			currentActiveHeaderLegal.classList.toggle('active-legal');
			currentActiveHeaderLegal.nextElementSibling.style.maxHeight = 0;
		}

		accordionHeaderLegal.classList.toggle('active-legal');
		const accordionBodyLegal = accordionHeaderLegal.nextElementSibling;

		if (accordionHeaderLegal.classList.contains('active-legal')) {
			accordionBodyLegal.style.maxHeight = accordionBodyLegal.scrollHeight + 'px';
		} else {
			accordionBodyLegal.style.maxHeight = 0;
		}
	});
});
// END LEGAL ENTITIES PAGE SCRIPTS




//Volunteering accordion 
const accordionHeaderVolunteering = document.querySelectorAll('.blc__volunteering-accordion__inner__all-accordions__accordion__header');

accordionHeaderVolunteering.forEach(accordionHeaderVolunteering => {
	accordionHeaderVolunteering.addEventListener('click', event => {
		const currentActiveHeaderVolunteering = document.querySelector('.blc__volunteering-accordion__inner__all-accordions__accordion__header.active-volunteering');
		if (currentActiveHeaderVolunteering && currentActiveHeaderVolunteering !== accordionHeaderVolunteering) {
			currentActiveHeaderVolunteering.classList.toggle('active-volunteering');
			currentActiveHeaderVolunteering.nextElementSibling.style.maxHeight = 0;
		}

		accordionHeaderVolunteering.classList.toggle('active-volunteering');
		const accordionBodyVolunteering = accordionHeaderVolunteering.nextElementSibling;

		if (accordionHeaderVolunteering.classList.contains('active-volunteering')) {
			accordionBodyVolunteering.style.maxHeight = accordionBodyVolunteering.scrollHeight + 'px';
		} else {
			accordionBodyVolunteering.style.maxHeight = 0;
		}
	});
});
//volunteering slider
$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		autoplay:true,
		speed:1800,
		autoplaySpeed:900,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

//slider mainpage our-kins
$('.slider-card').slick({
	lazyLoad: 'ondemand',
	slidesToShow: 3,
	dots: true,
	speed: 800,
	slidesToScroll: 1
});

//slider mainpage our-sponsors
$(document).ready(function () {
	$('.blc-sponsor_slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 4,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 900,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 550,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});
});

//slider-photo volunteering 
$('.slider-photo').slick({
	lazyLoad: 'ondemand',
	slidesToShow: 3,
	dots: true,
	speed: 800,
	slidesToScroll: 1
});


const accordionHeaderLegalEntities = document.querySelectorAll('.cooparation-accord__inner__all-accordions__accordion__header');

accordionHeaderLegalEntities.forEach(accordionHeaderLgalEntities => {
	accordionHeaderLgalEntities.addEventListener('click', event => {
		const currentActiveHeaderLegalEntities = document.querySelector('.cooparation-accord__inner__all-accordions__accordion__header.active');
		if (currentActiveHeaderLegalEntities && currentActiveHeaderLegalEntities !== accordionHeaderLegalEntities) {
			currentActiveHeaderLegalEntities.classList.toggle('active');
			currentActiveHeaderLegalEntities.nextElementSibling.style.maxHeight = 0;
		}

		accordionHeaderLegalEntities.classList.toggle('active');
		const accordionBodyLegalEntities = accordionHeaderLegalEntities.nextElementSibling;

		if (accordionHeaderLegalEntities.classList.contains('active')) {
			accordionBodyLegalEntities.style.maxHeight = LegalEntities.scrollHeight + 'px';
		} else {
			accordionBodyLegalEntities.style.maxHeight = 0;
		}
	});
});