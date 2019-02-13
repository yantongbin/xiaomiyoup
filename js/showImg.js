var _ImgMove = (function () {
    var _div , _ul, _ulList, _ol, _olList, index,timer , _leftBtn , _rightBtn
    _div = document.querySelector('.banner_right');
    _ul = document.querySelector('.imgList');
    _ulList = _ul.querySelectorAll('li');
    _ol = document.querySelector('.circleList');
    _olList = document.querySelectorAll('.circleList li');
    _leftBtn = document.querySelector('.right_arrow');
    _rightBtn = document.querySelector('.left_arrow');
    index = 0;
    timer = null;
    return {
        init() {
            var fristImg = _ul.firstElementChild;
            var lastImg = _ul.lastElementChild;
            _ul.appendChild(fristImg.cloneNode(true));
            _ul.insertBefore(lastImg.cloneNode(true), fristImg);
            this.event()
            this.autoPlay(index);
            console.log(_olList);
        },

        event() {
            const self = this;
            for (var i = 0; i < _olList.length; i++) {
                _olList[i].index = i;
            }
            _ol.onclick = function (e) {
                var e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.nodeName === 'LI'){
                    self.showImg(target.index);
                    self.autoPlay(index);
                }    
            },

            _leftBtn.onclick = function(){
                index--;
                self.showImg(index);
                self.autoPlay(index);
            }
            _rightBtn.onclick = function(){
                index++;
                self.showImg(index);
                self.autoPlay(index);
            }            
        },

        showImg(_index) {
            if(!isNaN(_index)){
                index = _index;
            }
            if(index > _olList.length - 1){
                _ul.style.left = 0;
                index = 0;
            } else if(index < 0){
                _ul.style.left = (_olList.length + 1) * -988 + 'px';
                index = _olList.length - 1;
            }
            for (var i = 0; i < _olList.length; i++) {
                _olList[i].classList.remove('bg_cl');
            }
            _olList[index].classList.add('bg_cl');
            move('.imgList' , 'left' , (index + 1) * -988 , 500);
        },

        autoPlay(_index) {
            const _this = this;
            if(!isNaN(_index)){
                index = _index;
            }
            clearInterval(timer);
            timer = setInterval( _ => {
                index++;
                _this.showImg(index);
            } , 2000)

        }
    }
}())


function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    }
    return obj.currentStyle[attr];
}