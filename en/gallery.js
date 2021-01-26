	$(document).ready(function() {
		
		/* This is basic - uses default settings */
		$("ul.thumbs a").fancybox({
			
			'transitionIn'	:	'elastic',
			'transitionOut'	:	'elastic',
			overlayOpacity		:	0.8,
			overlayColor		:	'#000'
		
		});
		
		
		$(".nav td a.maschere").click(function(){
      $("ul.thumbs").find("span").hide();
			$(".nav td a").removeClass("current");
			$("ul.thumbs a").css("opacity", "1");
			$(this).addClass("current");
			$("ul.thumbs a[rel=ex], ul.thumbs a[rel=oggettiscena], ul.thumbs a[rel=luce], ul.thumbs a[rel=accessori], ul.thumbs a[rel=restauro1], ul.thumbs a[rel=restauro2], ul.thumbs a[rel=restauro3], ul.thumbs a[rel=concettuale1], ul.thumbs a[rel=concettuale2], ul.thumbs a[rel=concettuale3], ul.thumbs a[rel=concettuale4], ul.thumbs a[rel=scultura]").animate({opacity: ".2"}, "slow").parent().append("<span></span>");
			return false;
		});
		
		$(".nav td a.ex").click(function(){
			$("ul.thumbs").find("span").hide();
			$(".nav td a").removeClass("current");
			$("ul.thumbs a").css("opacity", "1");																	
			$(this).addClass("current");
			$("ul.thumbs a[rel=maschere], ul.thumbs a[rel=oggettiscena], ul.thumbs a[rel=luce], ul.thumbs a[rel=accessori], ul.thumbs a[rel=restauro1], ul.thumbs a[rel=restauro2], ul.thumbs a[rel=restauro3], ul.thumbs a[rel=concettuale1], ul.thumbs a[rel=concettuale2], ul.thumbs a[rel=concettuale3], ul.thumbs a[rel=concettuale4], ul.thumbs a[rel=scultura]").animate({opacity: ".2"}, "slow").parent().append("<span></span>");
			return false;
		});
		
		$(".nav td a.oggettiscena").click(function(){
			$("ul.thumbs").find("span").hide();
			$(".nav td a").removeClass("current");
			$("ul.thumbs a").css("opacity", "1");																	
			$(this).addClass("current");
			$("ul.thumbs a[rel=maschere], ul.thumbs a[rel=ex], ul.thumbs a[rel=luce], ul.thumbs a[rel=accessori], ul.thumbs a[rel=restauro1], ul.thumbs a[rel=restauro2], ul.thumbs a[rel=restauro3], ul.thumbs a[rel=concettuale1], ul.thumbs a[rel=concettuale2], ul.thumbs a[rel=concettuale3], ul.thumbs a[rel=concettuale4], ul.thumbs a[rel=scultura]").animate({opacity: ".2"}, "slow").parent().append("<span></span>");
			return false;
		});
	
		
    $(".nav td a.luce").click(function(){
			$("ul.thumbs").find("span").hide();
			$(".nav td a").removeClass("current");
			$("ul.thumbs a").css("opacity", "1");																	
			$(this).addClass("current");
			$("ul.thumbs a[rel=maschere], ul.thumbs a[rel=ex], ul.thumbs a[rel=oggettiscena], ul.thumbs a[rel=accessori], ul.thumbs a[rel=restauro1], ul.thumbs a[rel=restauro2], ul.thumbs a[rel=restauro3], ul.thumbs a[rel=concettuale1], ul.thumbs a[rel=concettuale2], ul.thumbs a[rel=concettuale3], ul.thumbs a[rel=concettuale4], ul.thumbs a[rel=scultura]").animate({opacity: ".2"}, "slow").parent().append("<span></span>");
			return false;
		});
    
    
    $(".nav td a.accessori").click(function(){
			$("ul.thumbs").find("span").hide();
			$(".nav td a").removeClass("current");
			$("ul.thumbs a").css("opacity", "1");																	
			$(this).addClass("current");
			$("ul.thumbs a[rel=maschere], ul.thumbs a[rel=ex], ul.thumbs a[rel=luce], ul.thumbs a[rel=oggettiscena], ul.thumbs a[rel=restauro1], ul.thumbs a[rel=restauro2], ul.thumbs a[rel=restauro3], ul.thumbs a[rel=concettuale1], ul.thumbs a[rel=concettuale2], ul.thumbs a[rel=concettuale3], ul.thumbs a[rel=concettuale4], ul.thumbs a[rel=scultura]").animate({opacity: ".2"}, "slow").parent().append("<span></span>");
			return false;
		});
    
    $(".nav td a.restauro").click(function(){
			$("ul.thumbs").find("span").hide();
			$(".nav td a").removeClass("current");
			$("ul.thumbs a").css("opacity", "1");																	
			$(this).addClass("current");
			$("ul.thumbs a[rel=maschere], ul.thumbs a[rel=ex], ul.thumbs a[rel=luce], ul.thumbs a[rel=oggettiscena], ul.thumbs a[rel=accessori], ul.thumbs a[rel=concettuale1], ul.thumbs a[rel=concettuale2], ul.thumbs a[rel=concettuale3], ul.thumbs a[rel=concettuale4], ul.thumbs a[rel=scultura]").animate({opacity: ".2"}, "slow").parent().append("<span></span>");
			return false;
		});
	
    $(".nav td a.concettuale").click(function(){
			$("ul.thumbs").find("span").hide();
			$(".nav td a").removeClass("current");
			$("ul.thumbs a").css("opacity", "1");																	
			$(this).addClass("current");
			$("ul.thumbs a[rel=maschere], ul.thumbs a[rel=ex], ul.thumbs a[rel=luce], ul.thumbs a[rel=oggettiscena], ul.thumbs a[rel=accessori], ul.thumbs a[rel=restauro1], ul.thumbs a[rel=restauro2], ul.thumbs a[rel=restauro3], ul.thumbs a[rel=scultura]").animate({opacity: ".2"}, "slow").parent().append("<span></span>");
			return false;
		});
    
    $(".nav td a.scultura").click(function(){
			$("ul.thumbs").find("span").hide();
			$(".nav td a").removeClass("current");
			$("ul.thumbs a").css("opacity", "1");																	
			$(this).addClass("current");
			$("ul.thumbs a[rel=maschere], ul.thumbs a[rel=ex], ul.thumbs a[rel=luce], ul.thumbs a[rel=oggettiscena], ul.thumbs a[rel=accessori], ul.thumbs a[rel=concettuale1], ul.thumbs a[rel=concettuale2], ul.thumbs a[rel=concettuale3], ul.thumbs a[rel=concettuale4], ul.thumbs a[rel=restauro1], ul.thumbs a[rel=restauro2], ul.thumbs a[rel=restauro3]").animate({opacity: ".2"}, "slow").parent().append("<span></span>");
			return false;
		});
    
		//subpage init
		$("a.subpage").fancybox({
			'transitionIn'	:	'elastic',
			'transitionOut'	:	'elastic',
			overlayOpacity		:	0.8,
			overlayColor		:	'#000'
		});
	
	
});