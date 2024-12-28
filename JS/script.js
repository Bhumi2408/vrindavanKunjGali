$("#right-mobile").click(function(){
    $(".list-menu").slideToggle();
  }); 

  const sliderContainer = document.querySelector(".blog-slider");
  const slideRight = document.querySelector('.right-slider');
  const slideLeft = document.querySelector('.left-slider');
  const upButton = document.querySelector('.up-button');
  const downButton = document.querySelector('.down-button');
  const slidesLength = slideRight.querySelectorAll('.slider').length;
  
  
  let activeSlideIndex = 0;
  
  slideLeft.style.top = `-${(slidesLength - 1) * 500}px`;
  
  upButton.addEventListener('click', () => changeSlide('up'));
  downButton.addEventListener('click', () => changeSlide('down'));
  
  
  
  const changeSlide = (direction) => {
      const sliderHeight  = sliderContainer.clientHeight
      if(direction === 'up'){
          activeSlideIndex++;
          if(activeSlideIndex > slidesLength - 1){
              activeSlideIndex = 0;
          }
      }else if(direction === 'down'){
          activeSlideIndex--;
          if(activeSlideIndex < 0){
              activeSlideIndex = slidesLength - 1;
          }
      }
      slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
      slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
  }
  $("#prem").click(function(){
    $("#prem-more").css("display","block");
    $("#prem").css("display","none");
  });
  $("#prem-less").click(function(){
    $("#prem-more").css("display","none");
    $("#prem").css("display","inline");
  });
  $("#iskcon").click(function(){
    $("#iskcon-more").css("display","block");
    $("#iskcon").css("display","none");
  });
  $("#iskcon-less").click(function(){
    $("#iskcon-more").css("display","none");
    $("#iskcon").css("display","inline");
  });
  $("#radha").click(function(){
    $("#radha-more").css("display","block");
    $("#radha").css("display","none");
  });
  $("#radha-less").click(function(){
    $("#radha-more").css("display","none");
    $("#radha").css("display","inline");
  });
  $("#banke").click(function(){
    $("#banke-more").css("display","block");
    $("#banke").css("display","none");
  });
  $("#banke-less").click(function(){
    $("#banke-more").css("display","none");
    $("#banke").css("display","inline");
  });
  $("#kusum").click(function(){
    $("#kusum-more").css("display","block");
    $("#kusum").css("display","none");
  });
  $("#kusum-less").click(function(){
    $("#kusum-more").css("display","none");
    $("#kusum").css("display","inline");
  });
  $("#many").click(function(){
    $("#many-more").css("display","block");
    $("#many").css("display","none");
  });
  $("#many-less").click(function(){
    $("#many-more").css("display","none");
    $("#many").css("display","inline");
  });



  