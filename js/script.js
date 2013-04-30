$(document).ready(function(){

	// Cache the window object
	$window = $(window);

	// Booleans in view
	var first = false;
	var transfer = false;
	var second = false;
	var third = false;

	// Booleans stand position 
	var iphoneHorizontal = false;

	// Booleans device up
	var up = false;

	// Cache the Y offset and the speed of each data-type
	$('[data-type]').each(function() {
		$(this).data('offsetY', parseInt($(this).attr('data-offsetY')));
		$(this).data('width', $(this).attr('data-width'));
		$(this).data('speed', $(this).attr('data-speed'));
	});

	// First section
	$('section[data-type="first"]').each(function(){

		// Store some variables based on where we are
		var $self = $(this),
			offsetCoords = $self.offset(),
			topOffset = offsetCoords.top;

		// When we are scrolling
		$window.scroll(function(){

			if ( ($window.scrollTop() + $window.height()) > (topOffset) &&
			   ( (topOffset + $self.height()) > $window.scrollTop() ) ) {

				first = true;

				$('[data-type="sprite"]', $self).each(function(){
			   		
			   		// Cache the sprite of this section
			   		var $sprite = $(this);

			   		var yPos = -($window.scrollTop() / $sprite.data('speed'));
					var coords = $sprite.data('Xposition') + ' ' + (yPos + $sprite.data('offsetY')) + 'px';

					// Move the device
					$sprite.css({ backgroundPosition: coords});
					
				});

				if (iphoneHorizontal == true && second == false) {
					$('#margin').animate({width : '250px'},1200);
					$('#margin2').animate({width : '250px'},1200);
					iphoneHorizontal = false;
				} else {
					first = false;
				}
			} 
		})
	}); // First section


	// Second Section
	$('section[data-type="second"]').each(function(){

		// Store some variables based on where we are
		var $self = $(this),
			offsetCoords = $self.offset(),
			topOffset = offsetCoords.top;

		$window.scroll(function(){

			if ( ($window.scrollTop() + $window.height()) > (topOffset) &&
			   ( (topOffset + $self.height()) > $window.scrollTop() ) ) {

				second = true;

				// Move the stands
				if (iphoneHorizontal == false){
					$('#margin').animate({width : '480px'},1200);
					$('#margin2').animate({width : '480px'},1200);
					iphoneHorizontal = true;
				}

			   	// Cache the sprite in this section 
			   $('[data-type="sprite2"]', $self).each(function(){

			   		// Cache the sprite
			   		var $sprite = $(this);
			   		
			   		if ($window.scrollTop() > 500 &&  $window.scrollTop() < 2885) {

			   			var speed = -2;
						//console.log("scroll" + $window.scrollTop());
						var yPos = -($window.scrollTop() / speed);
						//console.log(yPos);
						var coords = $sprite.data('Xposition') + ' ' + (yPos + $sprite.data('offsetY')) + 'px';

						var topPos = yPos + $sprite.data('offsetY');
						
						$sprite.css({ backgroundPosition: coords});
			   		}  else if ( $window.scrollTop() > 3200) {

			   			var speed = 2;
						var yPos = -($window.scrollTop() / speed);

						var offsetY = 1900;
						var topPos = yPos + $sprite.data('offsetY');
						
						var coords = $sprite.data('Xposition') + ' ' + (yPos + offsetY) + 'px';

						var topPos = yPos + offsetY;
						$sprite.css({ backgroundPosition: coords});
						//console.log("topPos: " + topPos);
			   		}  
			   })

			} else {
						second = false;
						
					}
		})
	}); // Second section

	// Third Section
	$('section[data-type="third"]').each(function(){

		// Store some variables based on where we are
		var $self = $(this),
			offsetCoords = $self.offset(),
			topOffset = offsetCoords.top;

		$window.scroll(function(){

			if ( ($window.scrollTop() + $window.height()) > (topOffset) &&
			   ( (topOffset + $self.height()) > $window.scrollTop() ) ) {

			   	third = true;


			   if (iphoneHorizontal == true && second == false){
					$('#margin').animate({width : '600px'},1200);
					$('#margin2').animate({width : '600px'},1200);
					iphoneHorizontal = false;
				}
			   	// Cache the sprite in this section 
			   $('[data-type="sprite"]', $self).each(function(){

			   		// Cache the sprite
			   		var $sprite = $(this);
			   		//console.log($window.scrollTop());

			   		if ($window.scrollTop() > 4000 &&  $window.scrollTop() < 5880) {

			   			var speed = -2;
						//console.log("scroll" + $window.scrollTop());
						var yPos = -($window.scrollTop() / speed);
						//console.log(yPos);
						var coords = $sprite.data('Xposition') + ' ' + (yPos + $sprite.data('offsetY')) + 'px';

						var topPos = yPos + $sprite.data('offsetY');
						console.log("now");
						$sprite.css({ backgroundPosition: coords});
					}
				});
			} else {
				third = false;
			}
		});
	}); // Third Section

	

});