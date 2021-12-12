$(document).ready(function() {

$('.gallery').cycle({ 
    fx:      'scrollRight', 
    next:   '.gallery', 
    timeout:  0, 
    //easing:  'easeInOutBack'       //Had to edit this out because I don't have easing plugin
});
//$('.gallery').cycle({
//		fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
//	});

});