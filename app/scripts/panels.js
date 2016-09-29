function divClicked() {
  console.log('THIS')
  console.log($(this))
  var divHtml = $(this).html();

  if(inputMemo){
    // divHtml = inputMemo.name

    console.log('aaaaaaaaaaaaaaaaaaaa')
    console.log(inputMemo)
    // editableText.val(divHtml);
  }



  var editableText = $("<textarea />")
  editableText.val(divHtml);
  console.log("divHtml")
  console.log(divHtml)
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

var inputMemo;
console.log("inputMemo")
console.log(inputMemo);


function editableTextBlurred() {
  console.log('THIS')
  console.log($(this))
  var html = $(this).val();
  var viewableText = $("<div>")
  viewableText.html(html);

  // setup the click event for this new div



  var obj = $(this).parent()
  console.log(obj)
  console.log(obj.attr('data-name'))

  if(!inputMemo)
  {
    inputMemo={};
  }

  inputMemo[obj.attr('data-name')] = html;

  console.log('html');
  console.log(html);

  // }

  $(this).replaceWith(viewableText);
  viewableText.click(divClicked);
}




$(document).ready(function() {
  $(".editable_text").click(divClicked);
});
//




