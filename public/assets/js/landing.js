$(document).ready(function() {
    setTimeout(function() {
      $("#main").removeClass("is-loading");
    }, 100)
  
    var move = anime({
      targets: ['.I', '.G'],
      color: ['#27F40B', '#0BF4DB', '#D10BF4', '#FFFFFF', '#27F40B', '#D10BF4'],
      opacity: ['.5', '1'],
      easing: 'linear',
      duration: 2000,
      loop: 1
    });
  
    var move = anime({
      targets: ['.EE', '.N', '.E'],
      color: ['#27F40B', '#0BF4DB', '#D10BF4', '#FFFFFF', '#27F40B', '#D10BF4'],
      easing: 'linear',
      duration: 500,
      loop: 4
    });
  
    var move = anime({
      targets: '.A',
      color: ['#27F40B', '#0BF4DB', '#D10BF4', '#FFFFFF', '#27F40B', '#D10BF4'],
      easing: 'linear',
      duration: 500,
      loop: 4
    });
  
  
    var move = anime({
      targets: '.T',
      color: ['#27F40B', '#0BF4DB', '#D10BF4', '#FFFFFF', '#27F40B', '#D10BF4'],
      easing: 'linear',
      duration: 500,
      loop: 4
    });
  
    var move = anime({
      targets: '.C',
      color: ['#27F40B', '#0BF4DB', '#D10BF4', '#FFFFFF', '#27F40B', '#D10BF4'],
      easing: 'linear',
      duration: 500,
      loop: 4
    });
  
    var move = anime({
      targets: ['.H', '.W'],
      color: ['#FFFFFF', '#27F40B', '#D10BF4'],
      easing: 'linear',
      duration: 500,
      delay: 1000,
      loop: 2
    });
  
    var move = anime({
      targets: ['.B', '.C', '.R'],
      color: ['#FFFFFF', '#D10BF4'],
      easing: 'linear',
      duration: 75,
      loop: 50
    });
  
    //logo animation
    var CSStransforms = anime({
    targets: '#img',
    	
    translateY: [0, -50, 0],
    scale: 1,
    duration: 1000,
    	easing: 'linear',
    rotate: '1turn',
    });
  
  
  
  
    //animate size
    $('.letters').animate({
      fontSize: '8pvw'
    }, 'slow');
  
    $('.letters').animate({
      fontSize: '10vw'
    }, 'slow');
  
    $('.letters').animate({
      fontSize: '8vw'
    }, 'slow');
  
    $('.letters').animate({
      fontSize: '10vw'
    }, 'slow');
  
    $('.letters').animate({
      fontSize: '8vw'
    }, 'slow');
  
    
  
  
  
    //animate textShadow
    //$('.letters').animate({
    //textShadow: '5px 5px 5px #D10BF4'}, "slow");
  
    //	$('.letters').animate({
    //	textShadow: '0px 0px 0px black'}, "slow");
  
  
  
  });