  var indificator = 1;
  createFrom(obj);

  document.forms[0].elements[0].focus()
  //document.forms[0].elements[0].onclick = ()=>console.log("dfsdfdsf")
  //console.log(document.getElementsByTagName('input'))
  var inputArr = document.getElementsByTagName('input')
  for(i=0;i<inputArr.length;i++){
    inputArr[i].onblur = inputAlert;
  }
  var textareaArr = document.getElementsByTagName('textarea')
  for(i=0;i<textareaArr.length;i++){
    textareaArr[i].onblur = inputAlert;
  }