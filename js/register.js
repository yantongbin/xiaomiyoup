var register = (function(){
    var _input = document.querySelector('#inp_text');
    console.log(_input);
    return{
        init(){
            this.event();
        },
        event(){
            var $p , $span , reg , $button;
            $p = document.querySelector('.error p');
            $span = document.querySelector('.error_title');
            $button = document.querySelector('.but button');
            console.log($button);
            reg = /^1[35789]\d{9}$/
            _input.onblur = function(){
                if(this.value == ''){
                    $p.style.display = 'block';
                    $span.innerHTML =`<span class="error_title">请输入手机号</span>`;
                }else if(reg.test(this.value) === false){
                    $p.style.display = 'block';
                    $span.innerHTML =`<span class="error_title">请输入正确手机号</span>`;
                } else if(reg.test(this.value)){
                    $p.className = 'success'
                    $p.style.display = 'none';
                }
            }
            $button.onclick = function(){
                    if($p.className.indexOf('success') === -1){
                    _input.onfocus = function(){
                        if(this.value == ''){
                            $p.style.display = 'block';
                            $span.innerHTML =`<span class="error_title">请输入手机号</span>`;
                        }
                    }                        
                    _input.focus();
                    return;
                }
                alert('输入成功')
            }
        }
    }
}())