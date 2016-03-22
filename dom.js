

window.onload = function () {
    var box = document.getElementById('box');
    // alert(hasClass(box,'aa'));
    // alert(box.className);
    
    addClass(box,'ccc');
    addClass(box,'aaa');
    addClass(box,'bbb');
    
    // 如果要清空className
    // box.className = 'eee'; //这样就能全部清空了
    removeClass(box,'ccc');
    removeClass(box,'aaa');
    removeClass(box,'bbb');
}


function hasClass(element,cName) {
   return (!!element.className.match(new RegExp('(\\s|^)' + cName + '(\\s|$)')));
}

// 添加一个class
function addClass(element,cName) {
    if(!hasClass(element,cName)){
        element.className += ' '+cName;
    }
}

// 移除一个class
function removeClass(element,cName) {
    if(hasClass(element,cName)){
        element.className = element.className.replace((new RegExp('(\\s|^)' + cName + '(\\s|$)')),' ');
    }
}