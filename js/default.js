
(function($) {
	//Max equal height
	$.fn.setAllToMaxHeight = function(){
		return this.height( Math.max.apply(this, $.map( this , function(e){ return $(e).height() }) ) );
	}

	
	$(document).ready(function() {

		//Menu movil
		$('#header').on('click', '.nav-toggle', function(event) {
			event.preventDefault();
			$('#header').toggleClass('open');
		});

		// Find all YouTube videos
		var $allVideos = $("#content iframe"),

	    // The element that is fluid width
	    $fluidEl = $("#content");

		// Figure out and save aspect ratio for each video
		$allVideos.each(function() {

		  $(this)
		    .data('aspectRatio', this.height / this.width)

		    // and remove the hard coded width/height
		    .removeAttr('height')
		    .removeAttr('width');

		});

		// When the window is resized
		$(window).resize(function() {

		  var newWidth = $fluidEl.width();

		  // Resize all videos according to their own aspect ratio
		  $allVideos.each(function() {

		    var $el = $(this);
		    $el
		      .width(newWidth)
		      .height(newWidth * $el.data('aspectRatio'));

		  });

		// Kick off one resize to fix all videos on page load
		}).resize();


	});
	$(window).load(function() {
		//JS
		$('.catalogo.catalogo-list').setAllToMaxHeight();
		$('.link').setAllToMaxHeight();
	});

	//Sticky header on scroll
	var headerOffsetTop = $('#header').offset().top;
	$(window).scroll(function() {
		if ($(window).scrollTop() > headerOffsetTop) {
			$('body').addClass('sticky');
		} else {
			$('body').removeClass('sticky');
		}
	});


})(jQuery);