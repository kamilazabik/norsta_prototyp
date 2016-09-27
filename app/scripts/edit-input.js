var textAreaMemo;



function divClicked() {
  // console.log('THIS')
  // console.log($(this))
  var divHtml = $(this).html();
  var editableText = $("<textarea />")
  // editableText.attr('wrap', 'hard')
  editableText.val(divHtml);
  $(this).replaceWith(editableText);
  editableText.focus();
  // setup the blur event for this new textarea
  editableText.blur(editableTextBlurred);


  function setHeight(e) {
    $(e).css({'height':'auto','overflow-y':'hidden'}).height(e.scrollHeight);
  }
  $('textarea').each(function () {
    setHeight(this);
  }).on('input', function () {
    setHeight(this);
  });

}


function editableTextBlurred() {
  console.log('THIS')
  console.log($(this))
  var html = $(this).val();
  console.log(html);
  var viewableText = $("<div>")
  viewableText.html(html);

  console.log(viewableText);
  $(this).replaceWith(viewableText);
  // setup the click event for this new div
  viewableText.click(divClicked);





}



$(document).ready(function() {
  $(".editable_text").click(divClicked);
});
