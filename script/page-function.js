var index = 1;


function showImage(n) {
    var i;
    var x = document.getElementsByClassName("slider");
    
    if(n > x.length) { index = 1; }
    if(n < 1) { index = x.length; }
    
    for(i=0; i<x.length;i++){
        
        x[i].style.display = "none";
    }
    x[index - 1].style.display = "block"; 
    
}

showImage(1);

function slideIndex(n) {
    index = index + n;
    showImage(index);
}

//auto sliding function

/*
function autoSlide(){
    var i;
    var x = document.getElementsByClassName("slider");
    for(i=0; i<x.length;i++){
        x[i].style.display = "none";
    }
    if(index > x.length){ index = 1; }
    x[index - 1].style.display = "block"; 
    index++;
    setTimeout(autoSlide, 5000);
}

autoSlide();
*/

//slideshow animation: fade effects

/*var fade_in_from = 0;
var fade_out_from = 10;

function fadeOut(element) {
    var target = document.getElementsByClassName(element);
    target.style.display = "block";
    var newSetting = fade_out_from/10;
    target.style.opacity = newSetting;
    //opacity ranges from 0 to 1 (0 - .1 - .2 - .3 - .4 - etc...)
    fade_out_from--;
    
    if(fade_out_from == 0){
        
        target.style.opacity = 0;
        //target.style.display = "none";
        clearTimeout(loopTimer);
        fade_out_from = 10;
        return false;
    }
    var loopTimer = setTimeout('fadeOut(\''+element+'\')', 50);
}*/

//note: not done yet... to be continue tomorrow;

// paralax effect - page effect
$(window).scroll(function() {
    
    var wScroll = $(this).scrollTop();
/*    if(wScroll > $('#banner div div').offset().top) {
    //change this to animation later
        $('nav').css({
            'transform' : 'translate(0px, '+wScroll / -4 +'%)'
        });  
    }*/
    //for nav
    if(wScroll > $('#hr_between-form-main').offset().top) {
        $('nav').addClass('hidden');  
        $('#hidden-menu img').addClass('show-menu');
    } else if (wScroll < $('#section-container1').offset().top + 50) {
        $('nav').removeClass('hidden');
        $('#hidden-menu img').removeClass('show-menu');
    }
    
    
/*    
    //for section 1 images
    if(wScroll > $('#form_container').offset().top) {
        $('#section1-img img').each(function(){
            $('#section1-img img').addClass('is-showing'); 
        });    

    }*/
    
     //for section 1 image
   if(wScroll > $('#section1-img img').offset().top - ($(window).height()/1.25)) { //<--the animation won't be triggered unless it's in like 50% of the screen space..
    
       $('#section1-img img').each(function(i){
            //timeOut transition for each images;
            setTimeout(function(){
                $('#section1-img img').eq(i).addClass('is-showing');
            }, 150*(i+1));                          
        });
   
    }
         //for section 2 image
    if(wScroll > $('#section2-img img').offset().top - ($(window).height()/1.25)) {
       $('#section2-img img').each(function(i){
            //timeOut transition for each images;
            setTimeout(function(){
                $('#section2-img img').eq(i).addClass('is-showing');
            }, 150*(i+1));                          
        });    
    }
     
});






