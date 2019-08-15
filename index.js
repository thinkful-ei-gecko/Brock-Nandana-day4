/*eslint-env jquery*/
'use strict';
/*$('.thumbnail').on('click', e => {
  //console.log(e.target);
  $('').replacewith($('.thumbnail'));
});*/


function clickHandler(){

  $('.thumbnail').click(function (event) {
    const imgSrc = $(this).find('img').attr('src');
    const imgAlt = $(this).find('img').attr('alt');

  $('.hero img').attr('src', imgSrc);
  $('.hero img').attr('alt', imgAlt);
  });
}
$(clickHandler);