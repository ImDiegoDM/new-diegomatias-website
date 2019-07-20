$(document).ready(function(){
  let dragging=false;
  let mouseDown;
  let storedPosition=0;
  let getPosition = true;

  let deltaMove;

  $('body').mousedown(function(event){
    mouseDown = event.clientX;
  })

  $('body').mousemove(function(event){
    const moveAmount = -.01;

    if(mouseDown){
      deltaMove = event.clientX - mouseDown;
      mouseDown = event.clientX;

      if(dragging){
        event.preventDefault();
        moveScreen(deltaMove*moveAmount);
        return;
      }

      
      if(Math.abs(deltaMove) > 0 && !dragging){
        dragging = true;
        moveScreen(deltaMove*moveAmount);
      }
    }
  })

  $('body').on('mouseleave',function(){
    mouseDown = undefined;
    dragging = false;
  })

  $('body').mouseup(function(event){
    mouseDown = undefined;
    if(dragging){
      let moveAmount = -.004;
      let m = deltaMove*moveAmount
      let dir = m > 0 ? 1:-1

      m = Math.abs(m)
      remainingMove(m,dir);
      dragging = false;
    }

    storedPosition = 0;
  });

  function remainingMove(amount,direction){
    const resistence = .1;
    amount = amount*100;
    if(amount>0.01 && !mouseDown){
      const moveAmount = (amount-resistence);
      moveScreen((moveAmount/100)*direction);

      setTimeout(function(){
        remainingMove((moveAmount/100),direction)
      },10);
    }
  }

  // Galery open handler
  $('[data-type="gallery-selector"]').mouseup(function(){
    if(dragging){
      return
    }

    const project = $(this).attr('data-target');

    const selector = '[data-type="project-description"][data-target="'+project+'"]';
    $(selector).css('display','')

  });

  // Project Exit handler
  $('[data-type="project-description-exit"]').click(function(){
    const project = $(this).attr('data-target');

    const selector = '[data-type="project-description"][data-target="'+project+'"]';
    $(selector).css('display','none')
  });

  // move screen on x axis
  function moveScreen(direction){
    const scrollAmoutn = 100;
    const amount = scrollAmoutn*direction;
    const old = $('html').scrollLeft();
    $('html').scrollLeft(old+amount)
  }

  // mousewheel handler for chrome
  $('html').on('mousewheel',function(e){
    const direction = (e.originalEvent.wheelDelta / 120)*-1;
    moveScreen(direction)
  })

  // mousewheel handler for firfox
  $('html').on('DOMMouseScroll',function(e){
    moveScreen(e.originalEvent.detail > 0 ? 1:-1)
  })

  // gallery image select handler
  $('[data-type="project-description-select-image"]').click(function(){
    const projectId = $(this).attr('data-project');
    const previewElement = $('[data-type="project-description-preview"][data-project="'+projectId+'"');

    const url = $(this).attr('data-url');

    previewElement.attr('src',url);
  })

  // on contact submit
  $('[data-type="contact-form"]').submit(function(e){
    e.preventDefault()

    const data={}
    $(this).find('input,textarea').each(function(){
      if($(this).attr('type') === 'submit'){
        return
      }

      data[$(this).attr('name')] = $(this).val()
    });

    $(this).css('display','none')
    $('[data-type="loading.message"]').css('display','')

    $.post('./contact',data).done(function() {
      $('[data-type="success.message"]').css('display','')
    }).fail(function() {
      $('[data-type="error.message"]').css('display','')
    }).always(function() {
      $('[data-type="loading.message"]').css('display','none')
    })

  })
})