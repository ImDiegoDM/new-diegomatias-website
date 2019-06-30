$(document).ready(function(){
  console.log('worked')
  $('[data-type="gallery-selector"]').click(function(){
    const project = $(this).attr('data-target');

    const selector = '[data-type="project-description"][data-target="'+project+'"]';
    $(selector).css('display','')

    console.log('clicked on '+project)
  });

  $('[data-type="project-description-exit"]').click(function(){
    const project = $(this).attr('data-target');

    const selector = '[data-type="project-description"][data-target="'+project+'"]';
    $(selector).css('display','none')

    console.log('clicked on '+project)
  });
})