const galleryPhotoDuration = 5000

$(document).ready(function() {
	//these two functions show and hide the sub-menu on the nav-bar
	$('.collapsed').mouseenter(function() {
		if (window.innerWidth >699)
			$('.hiding-menu').slideToggle('fast')
	})
	$('.collapsed').mouseleave(function() {
		if (window.innerWidth >699)
			$('.hiding-menu').slideToggle('fast')
	})
	$('.collapsed').click(function(e) {
		if (e.target!==this && e.target.id!=='mback') {
			return
		}
		if (window.innerWidth<=700)
			$('.hiding-menu').toggleClass('show')
	})
	var $img = $('#main-bg'),//background image
		counter = 0,
		bgList = [//array of strings containing images to use in main slider
			'forest.jpg',
			'market.jpg',
			'town.jpg',
			'cafe.jpg'
		]

	//this function uses timers in order to control the movcement of the slider's images
	setInterval(function() {
		counter++
		$('#main-logo img').css('display','none')
		$('#i'+(counter%4+1)).css('display','block')

	} , galleryPhotoDuration)

	//show the hidden form
	$('#login').click(function(){
		$("#hidden-login").css('display','block')
	})
	function resize() {
		let transformed = `scale(${$('#white-panel')[0].offsetHeight/500}) translate(-50%,-100%)`
		console.log(transformed)
		$('.holder').css('transform',transformed)
	}
	window.addEventListener('resize',resize)
	resize()
	function displayOne(code) {
		console.log(code)
		$('#tabs section').removeClass('active-section')
		$('#tabs-menu div').removeClass('active')
		$('#'+code).addClass('active-section')
		$('#tabs-menu div[data-target="'+code+'"]').addClass('active')
	}
	$('#tabs-menu div').click(function() {
		displayOne($(this).attr('data-target'))
		checkAll()
	})
	$('.img-click').click(function() {
		let src = this.parentElement.querySelector('img').src
		displayImage(src)
	})
	function displayImage(src) {
		window.open(src)
	}
})
