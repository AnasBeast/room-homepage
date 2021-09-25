var images= [
    "https://i.ibb.co/mNzjXY4/desktop-image-hero-1.jpg",
    "https://i.ibb.co/mcP48Bj/desktop-image-hero-1.jpg",
    "https://i.ibb.co/TW1mRSx/desktop-image-hero-3.jpg"
    ];
var num=0;//num is a variable to hold the current image

var part1 = document.querySelector('.part1')
var part2 = document.querySelector('.part2')
var part3 = document.querySelector('.part3')

var parts=[part1,part2,part3]
parts[num]=part1

function next()
{
    

  var slider =document.querySelector('.prev');
  var carousel =document.querySelector('.img1');
  
  parts[num].classList.remove('main')

  num++;
  
  
  //checking whether the new position of image is greater or equal to the no. of images we use
  if(num>=images.length)//images is the defined arary
  {
    num=0;
    //if the condition is true num is defined to hold to first image of the slider
  }
  
  carousel.src=images[num];

  parts[num].classList.add('main')
  
}

function previous()
{
  var slider =document.querySelector('.next');
  var carousel =document.querySelector('.img1');

  parts[num].classList.remove('main')

  num--;
  
  //checking whether the new position of image is bfore or after the first image 
  if(num<0)//images is the defined arary
  {
    num=images.length-1;
    //if the condition is true num is defined to hold to last image of the slider
  }
  carousel.src=images[num];
  parts[num].classList.add('main')
}


document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
    }
    else if (e.keyCode == '40') {
        // down arrow
    }
    else if (e.keyCode == '37') {
       // left arrow
       previous()
    }
    else if (e.keyCode == '39') {
       // right arrow
       next()
    }

}