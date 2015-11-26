$(document).ready(function() {

  $('.readmore').click(showMore);
  //show more
  function showMore(){
    event.preventDefault();
    console.log('read more button clicked');
    //hide read more button
    $('.readmore').hide();
    //show hidden text
    $('#show-this-on-click').slideDown();
    //show read less 
    $('.readless').show();
  };

  $('.readless').click(showLess);
  //show less of blog post
  function showLess() {
    event.preventDefault();
    //Hide read less button
    $('.readless').hide();
    //show less text
    $('#show-this-on-click').slideUp(function() {
    //show read more button
    $('.readmore').show();
    });
  };

  $('.learnmore').click(learnMore);
  //Learn more about Relaxr
  function learnMore() {
    $('#learnmoretext').show();
  }

});
