/* 
	jQuery for CG website
	
*/
	
	var disciplineSelection, degreeSelection, courseSelection, inter; 
	
	$(document).ready(function(){
		
		// Return to top code
		$('#return').click(function(){
			$('html, body').animate({ scrollTop: 0 }, 'slow');
		});
		
		if($('.showreel').length > 0){
			 $(".images").slides({
	        	container: 'showreel',
	        	play: 5000,
	        	effect: 'slide'
	         });
		}

		selectInfo();
	
	});
	
	
/*	$(document).ready(function(){

		$('#downloads').click(function(){
			$('#darkbox_background, #darkbox_container').css({
				'height':$(window).height()
			});
			$('#darkbox_background, #darkbox_container').fadeIn(200);
		});

		$('#close_button a').click(function(){
			$('#darkbox_background, #darkbox_container').fadeOut(200);
		});

	});
*/	

	function selectInfo(){
		
		var attribute, self, parent, fadeSpeed = 10;
		
		$('span.link').click(function(){
			
			self = $(this);
			parent = self.parent('.text');
			
			attribute = $(this).find('img').attr('id');
			
			// If discipline div
			if(attribute == 'compsci' || attribute == 'design'){
		
			
				disciplineSelection = attribute;		
					
				if(courseSelection != null){
				
					if(disciplineSelection == 'compsci' && degreeSelection == 'undergrad'){

						if(courseSelection != null){
							$('#courses_'+courseSelection).fadeOut(fadeSpeed);
						}
						$('#courses_1').fadeIn(fadeSpeed);
						courseSelection = 1;

					} else if(disciplineSelection == 'compsci' && degreeSelection == 'postgrad'){

						if(courseSelection != null){
							$('#courses_'+courseSelection).fadeOut(fadeSpeed);
						}
						$('#courses_2').fadeIn(fadeSpeed);
						courseSelection = 2;

					} else if(disciplineSelection == 'design' && degreeSelection == 'undergrad'){

						if(courseSelection != null){
							$('#courses_'+courseSelection).fadeOut(fadeSpeed);
						}
						$('#courses_3').fadeIn(fadeSpeed);
						courseSelection = 3;

					} else if(disciplineSelection == 'design' && degreeSelection == 'postgrad'){

						if(courseSelection != null){
							$('#courses_'+courseSelection).fadeOut(fadeSpeed);
						}
						$('#courses_4').fadeIn(fadeSpeed);
						courseSelection = 4;
					}
				
				}
				
				if(attribute == 'compsci') {
					$('#degree').find('span.undergrad p').html('Undergraduate</br>Study (BSc)');
					$('#degree').find('span.postgrad p').html('Postgraduate</br>Study (MSc)');
				} else if(attribute == 'design'){
					$('#degree').find('span.undergrad p').html('Undergraduate</br>Study (BDI)');
					$('#degree').find('span.postgrad p').html('Postgraduate</br>Study (MDI)');
				}
				
				if(parent.find('span.link img').hasClass('active')){
				
					parent.find('span.link img').removeClass('active');
					self.find('img.dotted-line').addClass('active');
				} else {
					self.find('img.dotted-line').addClass('active');
				}
				$('#degree').fadeIn(fadeSpeed);
			
			} else if(attribute == 'undergrad' || attribute == 'postgrad'){ // Or degree div
				
			
				degreeSelection = attribute;
				
				if(parent.find('span.link img').hasClass('active')){
			
					parent.find('span.link img').removeClass('active');
					self.find('img.dotted-line').addClass('active');
				} else {
					self.find('img.dotted-line').addClass('active');
				}
				
				if(disciplineSelection == 'compsci' && degreeSelection == 'undergrad'){
					
					if(courseSelection != null){
						$('#courses_'+courseSelection).fadeOut(fadeSpeed);
					}
					$('#courses_1').fadeIn(fadeSpeed);
					courseSelection = 1;
										
				} else if(disciplineSelection == 'compsci' && degreeSelection == 'postgrad'){
						
					if(courseSelection != null){
						$('#courses_'+courseSelection).fadeOut(fadeSpeed);
					}
					$('#courses_2').fadeIn(fadeSpeed);
					courseSelection = 2;
						
				} else if(disciplineSelection == 'design' && degreeSelection == 'undergrad'){
					
					if(courseSelection != null){
						$('#courses_'+courseSelection).fadeOut(fadeSpeed);
					}
					$('#courses_3').fadeIn(fadeSpeed);
					courseSelection = 3;
						
				} else if(disciplineSelection == 'design' && degreeSelection == 'postgrad'){
					 
					if(courseSelection != null){
						$('#courses_'+courseSelection).fadeOut(fadeSpeed);
					}
					$('#courses_4').fadeIn(fadeSpeed);
					courseSelection = 4;
				} 
			}
		});		
	}