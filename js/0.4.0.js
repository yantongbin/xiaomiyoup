function getStyle(obj , attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(obj , null)[attr];
    }
    return obj.currentStyle[attr];
}
function move( ele , attr , target , time = 5000 , callBack){
    var obj = ele;
    if(typeof obj  == 'string' ){
        obj = document.querySelector(ele);
    }
    clearInterval(obj.timer);
    //计算每20ms运动的距离
    var _getStyle = parseFloat(getStyle(obj , attr));
    //判断是不是opacit是的话给opacity的值乘以100然后取浮点型，为了防止精度丢失
    if(attr == 'opacity'){
        _getStyle = parseFloat(getStyle(obj , attr)) * 100;
    }    
    var distance = target - _getStyle;
    var s = time / 20;
    var speed = distance / s;  
     obj.timer = setInterval(()=>{
        _getStyle += speed;
        //终止条件
        if((_getStyle >= target && speed > 0) || (_getStyle <= target && speed < 0) ){
            clearInterval(obj.timer);
            _getStyle = target;
        }
        //判断是不是opacity
        if(attr == 'opacity'){
            obj.style[attr] = _getStyle / 100;
        }else{
            obj.style[attr] = _getStyle + 'px';
        }

    } , 20)
}