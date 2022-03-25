
(function ($) {
	"use strict";

	/*---------------------------------------------------
		Primary Menu
	----------------------------------------------------- */

	// Dropdown show on hover
	$('.primary-menu ul.navbar-nav li.dropdown, .login-signup ul.navbar-nav li.dropdown').on("mouseover", function () {
		if ($(window).width() > 991) {
			$(this).find('> .dropdown-menu').stop().slideDown('fast');
			$(this).bind('mouseleave', function () {
				$(this).find('> .dropdown-menu').stop().css('display', 'none');
			});
		}
	});

	// When dropdown going off to the out of the screen.
	$('.primary-menu .dropdown-menu, .login-signup .dropdown-menu').each(function () {
		var menu = $('#header .header-row').offset();
		var dropdown = $(this).parent().offset();
		var i = (dropdown.left + $(this).outerWidth()) - (menu.left + $('#header .header-row').outerWidth());
		if (i > 0) {
			$(this).css('margin-left', '-' + (i + 5) + 'px');
		}
	});
	$(function () {
		$(".dropdown li").on('mouseenter mouseleave', function (e) {
			if ($(window).width() > 991) {
				var elm = $('.dropdown-menu', this);
				var off = elm.offset();
				var l = off.left;
				var w = elm.width();
				var docW = $(window).width();
				var isEntirelyVisible = (l + w + 30 <= docW);
				if (!isEntirelyVisible) {
					$(elm).addClass('dropdown-menu-right');
					$(elm).parents('.dropdown:first').find('> a.dropdown-toggle > .arrow').addClass('arrow-right');
				} else {
					$(elm).removeClass('dropdown-menu-right');
					$(elm).parents('.dropdown:first').find('> a.dropdown-toggle > .arrow').removeClass('arrow-right');
				}
			}
		});
	});

	// Mobile Collapse Nav
	$('.primary-menu .dropdown-toggle[href="#"], .primary-menu .dropdown-toggle[href!="#"] .arrow, .login-signup .dropdown-toggle[href="#"], .login-signup .dropdown-toggle[href!="#"] .arrow').on('click', function (e) {
		if ($(window).width() < 991) {
			e.preventDefault();
			var $parentli = $(this).closest('li');
			$parentli.siblings('li').find('.dropdown-menu:visible').slideUp();
			$parentli.find('> .dropdown-menu').stop().slideToggle();
			$parentli.siblings('li').find('a .arrow.open').toggleClass('open');
			$parentli.find('> a .arrow').toggleClass('open');
		}
	});

	// DropDown Arrow
	$('.primary-menu, .login-signup').find('a.dropdown-toggle').append($('<i />').addClass('arrow'));

	// Mobile Menu Button Icon
	$('.navbar-toggler').on('click', function () {
		$(this).toggleClass('open');
	});


	// OTP Form (Focusing on next input)
	$("#otp-screen .form-control").keyup(function () {
		if (this.value.length == 0) {
			$(this).blur().parent().prev().children('.form-control').focus();
		}
		else if (this.value.length == this.maxLength) {
			$(this).blur().parent().next().children('.form-control').focus();
		}
	});


	/* Hide dropdown when clicking outside */
	$(document).on('click', function (event) {
		if (!$(event.target).closest(".travellers-class").length) {
			$(".travellers-dropdown").hide();
		}

		/* Hide dropdown when clicking on Done Button */
		$('.submit-done').on('click', function () {
			$('.travellers-dropdown').fadeOut(function () {
				$(this).hide();
			});
		});
	});


	/*---------------------------------------------------
	   Scroll to top
	----------------------------------------------------- */
	$(function () {
		$(window).on('scroll', function () {
			if ($(this).scrollTop() > 150) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
	});
	$('#back-to-top').on("click", function () {
		$('html, body').animate({ scrollTop: 0 }, 'slow');
		return false;
	});


	$('.smooth-scroll a').on("click", function () {
		var sectionTo = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(sectionTo).offset().top - 50
		}, 600);
	});


})(jQuery);