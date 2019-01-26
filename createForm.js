function createFrom(formBody){
    //console.log(formBody)
    var form = document.createElement("form");
    form.name = "mainForm"+(indificator++);
    formBody.forEach(createField);
    ///////////////////
    form.setAttribute('onsubmit','return validateFormSubmit()');
    form.action = 'https://www.onliner.by/'
    ///////////////////
    document.body.appendChild(form);
    function createField(fieldObj){
      var li = document.createElement("tr");
      var fieldName = document.createElement("td");
      fieldName.innerHTML += fieldObj.label;
      //console.log(fieldName)
      li.appendChild(fieldName);
      li.appendChild(createInputField(fieldObj.kind));
      form.appendChild(li);
      function createInputField(type){
        var inputField;
        switch(type){
          case "longtext":
            inputField = document.createElement("input");
            inputField.style.width = "490px";
            inputField.name = fieldObj.name;
            inputField.dataset.type = type;
            return inputField;
            breake;
          case "number":
            inputField = document.createElement("input");
            inputField.name = fieldObj.name;
            inputField.dataset.type = type;
            return inputField;
            breake;
          case "combo":
            inputField = document.createElement("select");
            inputField.name = fieldObj.name;
            inputField.style.width = "204px";
            inputField.style.marginLeft = "2px";
            fieldObj.variants.forEach((j)=>{
              inputField.options[j.value] = new Option(j.text,j.value)
            })
            inputField.options[0] = null;
            inputField.dataset.type = type;
            return inputField;
            breake;
          case "shorttext":
            inputField = document.createElement("input");
            inputField.style.width = "200px";
            inputField.name = fieldObj.name;
            inputField.dataset.type = type;
            return inputField;
            breake;
          case "radio":
            inputField = document.createElement("td");
            fieldObj.variants.forEach((j)=>{
              var checkbox = document.createElement("input");
              var checkboxText = document.createElement("a");
              checkbox.type = "radio";
              checkbox.name = fieldObj.name;
              checkboxText.innerHTML += j.text;
              checkbox.checked = true;
              inputField.appendChild(checkbox);
              inputField.appendChild(checkboxText);
            });
            inputField.dataset.type = type;
            return inputField;
            breake;
          case "check":
            inputField = document.createElement("input");
            inputField.type = "checkbox";
            inputField.name = fieldObj.name;
            inputField.dataset.type = type;
            return inputField;
            breake;
          case "memo":
            inputField = document.createElement("textarea");
            inputField.style = "width: 608px; height: 50px";
            inputField.name = fieldObj.name;
            inputField.dataset.type = type;
            return inputField;
            breake;
          case "submit":
            inputField = document.createElement("input");
            inputField.type = "submit";
            inputField.value = fieldObj.label;
            inputField.dataset.type = type;
            return inputField;
            breake;
        }
      };
      /*
      function createNameOfFormField(){
        var fieldName = document.createElement("td");
        fieldName.innerHTML += fieldObj.label;
        console.log(fieldName)
        return fieldName
      };
      */
    }
  }