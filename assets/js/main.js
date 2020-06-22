/*
	Visualize by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

$(function () {

	// Vars.
	var $window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper');

	// Breakpoints.
	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	// Disable animations/transitions until everything's loaded.
	$body.addClass('is-loading');

	$window.on('load', function () {
		$body.removeClass('is-loading');
	});

	// Poptrox.
	$window.on('load', function () {

		$('.thumbnails').poptrox({
			onPopupClose: function () { $body.removeClass('is-covered'); },
			onPopupOpen: function () { $body.addClass('is-covered'); },
			baseZIndex: 10001,
			useBodyOverflow: false,
			usePopupEasyClose: true,
			overlayColor: '#000000',
			overlayOpacity: 0.75,
			popupLoaderText: '',
			fadeSpeed: 500,
			usePopupDefaultStyling: false,
			windowMargin: (skel.breakpoint('small').active ? 5 : 50)
		});

	});

});


const linkDescritpion = document.querySelector('.myWork')
const mainContainer = document.querySelector('body')


mainContainer.addEventListener('mouseover', (e) => {
	if (e.target.classList.contains('fa-youtube')) { linkDescritpion.innerHTML = 'YouTube playlist of my projects' }
	else if (e.target.classList.contains('fa-github')) { linkDescritpion.innerHTML = 'My GitHub page' }
	else if (e.target.classList.contains('fa-file')) { linkDescritpion.innerHTML = 'View & download my resume' }
	else if (e.target.classList.contains('fa-linkedin')) { linkDescritpion.innerHTML = 'My LinkedIn profile' }
	else if (e.target.classList.contains('fa-envelope-o')) { linkDescritpion.innerHTML = 'Send me an email' }
})

mainContainer.addEventListener('mouseout', (event) => {
	if (event.target.classList.contains('icon')) {
		linkDescritpion.innerHTML = ''
	}
})