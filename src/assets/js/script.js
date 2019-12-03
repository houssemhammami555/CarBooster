(function($) {
	
	"use strict";
	
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(500).fadeOut(500);
		}
	}
	

	//Submenu Dropdown Toggle
	if($('.navbar-collapse li.dropdown ul').length){
		$('.navbar-collapse li.dropdown').append('<div class="dropdown-btn"></div>');
		
		//Dropdown Button
		$('.navbar-collapse li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
	}
	
	
	  


	    	//Update Header Style + Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var topHeader = $('.mainmenu-area').innerHeight();
			var windowpos = $(window).scrollTop();
			if (windowpos >= topHeader) {
				$('.scroll-to-top').fadeIn(300);
			} else {
				$('.scroll-to-top').fadeOut(300);
			}
		}
	}
    

	// revolution slider
	function revolutionSliderActiver () {
		if ($('.rev_slider_wrapper #slider1').length) {
			$("#slider1").revolution({
				sliderType:"standard",
				sliderLayout:"auto",
				delay:5000,
				navigation: {
					arrows:{enable:true} 
				},
				gridheight:700 
			});
		};
	}

	//Main BX-Slider
	if($('.main-bxslider').length){
		$('.main-bxslider').bxSlider({
			adaptiveHeight: true,
			auto:true,
			mode:'fade',
			controls: true,
			pause: 5000,
			speed: 700,
			pager: true,
			pagerCustom: '#bx-pager'
		});
	}
	



	//Main BX-Slider
	if($('.testimonial-slide').length){
		$('.testimonial-slide').bxSlider({
			adaptiveHeight: true,
			auto:true,
			mode:'vertical',
			nextSelector: '#slider-next',
			nextText: '',
			maxSlides: 2,
			minSlides: 2,
			moveSlides: 1,
			pause: 5000,
			speed: 700,
			pager: false
		});
	}



	//comfort Slider
	$('.comfort-slide').owlCarousel({
	    loop:true,
	    margin:163,
	    dots:false,
		smartSpeed: 500,
		autoplay: 5000,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            loop:true
	        },
	        480:{
				items:2,
				loop:true
			},
	        768:{
	            items:3,
	            loop:true
	        },
	        1000:{
	            items:4,
	            loop:true
	        }
	    }
	})


	//Sponsors Slider
	$('.sponsors-slider').owlCarousel({
	    loop:true,
	    margin:145,
	    dots:false,
		smartSpeed: 500,
		autoplay: 5000,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:2,
	            loop:true
	        },
	        480:{
				items:3,
				loop:true
			},
	        768:{
	            items:4,
	            loop:true
	        },
	        1000:{
	            items:5,
	            loop:true
	        }
	    }
	})


	//testimonial2 Slider
	$('.testimonial2-slide').owlCarousel({
	    loop:true,
	    margin:95,
	    dots:false,
		smartSpeed: 500,
		autoplay: 5000,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            loop:true
	        },
	        600:{
				items:2,
				loop:true
			}
	    }
	})
	//prosuct Slider
	$('.product-slide').owlCarousel({
	    loop:true,
	    margin:30,
	    dots:false,
		smartSpeed: 500,
		autoplay: 5000,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:2,
	            loop:true
	        },
	        480:{
				items:3,
				loop:true
			}
	    }
	})
	//feature slider
    $(".feature-slide").owlCarousel({ 
	      loop:true,
		  dots : true,
		  smartSpeed : 1000,
		  autoplay: 7000,
		  responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1024:{
				items:1
			},
			1200:{
				items:1
			},
			1400:{
				items:1
			}
		}
    });  
  
	// gallery
	if ($('.single-product-carousel-content-box').length && $('.single-product-carousel-thumbnail-box').length) {

		var $sync1 = $(".single-product-carousel-content-box"),
			$sync2 = $(".single-product-carousel-thumbnail-box"),
			flag = false,
			duration = 1000;

			$sync1
				.owlCarousel({
					items: 1,
					margin: 0,
					loop: true,
					nav: false,
					dots: false
				})
				.on('changed.owl.carousel', function (e) {
					if (!flag) {
						flag = true;
						$sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
						flag = false;
					}
				});

			$sync2
				.owlCarousel({
					margin: 30,
					items: 6,
					nav: false,
					dots: false,
					center: false,
					responsive: {
				        0:{
				            items:3,
				            autoWidth: false
				        },
				        480:{
				            items:4,
				            center: false,
				            autoWidth: false
				        },
				        768:{
				            items:5,
				            autoWidth: false
				        },
				        1000:{
				            items:6,
				            autoWidth: false
				        }
				    },
				})
				.on('click', '.owl-item', function () {
					$sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);

				})
				.on('changed.owl.carousel', function (e) {
					if (!flag) {
						flag = true;		
						$sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
						flag = false;
					}
				});

	}




	//Accordions
	if($('.accordion-box').length){
		$('.accordion-box .acc-btn').on('click', function() {
		if($(this).hasClass('active')!==true){
				$('.accordion-box .acc-btn').removeClass('active');
			}
			
		if ($(this).next('.acc-content').is(':visible')){
				$(this).removeClass('active');
				$(this).next('.acc-content').slideUp(500);
			}
		else{
				$(this).addClass('active');
				$('.accordion-box .acc-content').slideUp(500);
				$(this).next('.acc-content').slideDown(500);	
			}
		});
	}
	


	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox();
	}
	
		 // Gallery masonary style
	if ($('.masonary-gallery').length) {
		$('.masonary-gallery').isotope({
			layoutMode:'masonry'
		});
	}






    	// 7 stickyHeader
	function stickyHeader () {
		if ($('.stricky').length) {
			var strickyScrollPos = 100;
			if($(window).scrollTop() > strickyScrollPos) {
				$('.stricky').removeClass('fadeIn animated');
		      	$('.stricky').addClass('stricky-fixed fadeInDown animated');
			}
			else if($(this).scrollTop() <= strickyScrollPos) {
				$('.stricky').removeClass('stricky-fixed fadeInDown animated');
		      	$('.stricky').addClass('slideIn animated');
			}
		};
	}

	// 4. select menu
	function selectMenu () {
		if ($('.select-menu').length) {
			$('.select-menu').selectmenu();
		};
	}



	//Contact Form Validation
	if($('.contact-us').length){
		$('.contact-us').validate({ // initialize the plugin
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				message: {
					required: true
				},
				subject: {
					required: true
				}
			},
			submitHandler: function (form) { 
				// sending value with ajax request
				var form = $(form);
				$.post(form.attr('action'), form.serialize(), function (response) {
					form.parent('div').append(response);
					form.find('input[type="text"]').val('');
					form.find('input[type="email"]').val('');
					form.find('textarea').val('');
				});
				return false;
			}
		});
	}





	// Scroll to top
	if($('.scroll-to-top').length){
		$(".scroll-to-top").on('click', function() {
		   // animate
		   $('html, body').animate({
			   scrollTop: $('html, body').offset().top
			 }, 1000);
	
		});
	}
	
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}
	
	function galleryMasonaryLayout () {
		if ($('.masonary-gallery').length) {
			$('.masonary-gallery').isotope({
				layoutMode:'masonry'
			});
		}
		if($('.post-filter.masonary').length){
			$('.post-filter.masonary li').children('span').on('click', function(){
				var Self = $(this);
				var selector = Self.parent().attr('data-filter');
				$('.post-filter.masonary li').children('span').parent().removeClass('active');
				Self.parent().addClass('active');
				$('.masonary-gallery').isotope({ filter: selector });
				return false;
			});
		}
	}
	function GalleryFancyboxActivator () {
	  var galleryFcb = $('.fancybox');
	  if(galleryFcb.length){
	    galleryFcb.fancybox({
	      openEffect  : 'elastic',
	      closeEffect : 'elastic',
	      helpers : {
	        media : {}
	      }
	    });
	  }
	}
	function videoFancybox () {
		if ($("a.video-fancybox").length) {
			$("a.video-fancybox").click(function() {
			    $.fancybox({
			            'padding'       : 0,
			            'autoScale'     : false,
			            'transitionIn'  : 'none',
			            'transitionOut' : 'none',
			            'title'         : this.title,
			            'width'         : 680,
			            'height'        : 495,
			            'href'          : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
			            'type'          : 'swf',
			            openEffect      : 'elastic',
					    closeEffect     : 'elastic',
					    helpers         : {
					    	media : {}
					    },
			            'swf'           : {
			            	'wmode'             : 'transparent',
			                'allowfullscreen'   : 'true'
			            }
			        });

			    return false;
			});
		};
	}
	function fleetGallery () {
		if ($('.mixit-gallery').length) {
			$('.mixit-gallery').mixItUp();
		};
	}

//scroll reveal=============================



/* ==========================================================================
   When document is ready, do
   ========================================================================== */
   
	$(document).on('ready', function() {
		revolutionSliderActiver();
		selectMenu();
		galleryMasonaryLayout();
		GalleryFancyboxActivator();
		videoFancybox();
		fleetGallery();
	});

/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	$(window).on('scroll', function() {
		stickyHeader();
		headerStyle();
	});
	
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});
	

})(window.jQuery);