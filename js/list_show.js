var list = (function(){
    var _newRight = document.querySelector('.new_right');
    var _ul = document.querySelector('.banner_left ul');
    var _li = document.querySelectorAll('.banner_left ul li');
    var _bannerRight = document.querySelector('.banner_right');
    var _banner = document.querySelector('.banner');
    console.log(_li);
    return{
        init(){
            this.event();
        },
        event(){
            var _this = this;
            _ul.onmouseover = function(e){
                e = e || window.event;
                var target = e.target || e.srcElemet;
                if(target.nodeName === 'LI' || target.nodeName === 'A'){
                    _this.show();
                }
            };
            _newRight.onmouseover = function(e){
                _this.show();
            };            
            _banner.onmouseout = function(e){
                _this.hidden();
            }

        },
        show(){
            _newRight.style.display = 'block';
            _bannerRight.style.display = 'none';
        },
        hidden(){
            _newRight.style.display = 'none';
            _bannerRight.style.display = 'block';
        }
    }
}())