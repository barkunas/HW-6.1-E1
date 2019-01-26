function validateForm(self){
    var type = self.dataset.type
    switch(type){
        case "longtext":
            if(self.value.length>5){
                return true;
                } else return false;
            break;
        case "number":
            if(self.value&&self.value%1==0){
                return true;
                } else return false;
            break;
        case "combo":
        if(self.value.length>5){
            return true;
            } else return false;
        break;
        case "shorttext":
        if(self.value.length>5){
            return true;
            } else return false;
        break;
        case "memo":
        if(self.value.length>20){
            return true;
            } else return false;
        break;
        default:
            return true;
            break;
    }
}
function inputAlert(){
    var self = this;
    drawInputAlert(self);    
};
function validateFormSubmit(){
    //console.log(event)
    let count = 0;
    var elems = event.srcElement.elements;
    //var elems = document.getElementsByTagName("input");
    //var textarea = document.getElementsByTagName("textarea")
    for(i=0;i<elems.length;i++){
        if(validateForm(elems[i])==false){
            drawInputAlert(elems[i])
            count++
        }
    };
    /*
    for(i=0;i<textarea.length;i++){
        if(validateForm(textarea[i])==false){
            drawInputAlert(textarea[i])
            count++
        }
    };
    */
    if(!!!count){
        return true
    }else{
        return false
    };
}
function drawInputAlert(inputElem){
    if(!validateForm(inputElem)){
        inputElem.style.background = "red"
        if(inputElem.parentNode.getElementsByTagName("span").length<1){
            var warning = document.createElement("span");
            warning.innerHTML = "тут ошибочка";
            warning.id = "alarm";
            inputElem.parentNode.appendChild(warning)
        }
    } else {
        inputElem.style.background = null
        if(inputElem.parentNode.getElementsByTagName("span").length>=1){
            var elem = inputElem.parentNode.getElementsByTagName("span")
            inputElem.parentNode.removeChild(elem[0])
        }
    }
}