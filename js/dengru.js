var dengru = (function(){
    return{
        init(){
            this.event();
        },
        event(){
            var $inpUser = document.querySelector('#user');
            var $inpPwd = document.querySelector('#pwd');
            var $btn = document.querySelector('.btn');
            var $icon = document.querySelector('.p_hint .plaint')
            var $span = document.querySelector('.p_hint span');
            $btn.addEventListener('click', function(){
                if($inpUser.value ===''){
                    $inpUser.onfocus = function(){
                        $icon.style.display = 'inline-block'
                        $span.innerHTML =`<span class="sp_st">请输入用户名</span>`
                    }
                    $inpUser.focus();
                    return;
                } else if($inpPwd.value ===''){
                    $inpPwd.onfocus = function(){
                        $icon.style.display = 'inline-block'
                        $span.innerHTML =`<span class="sp_st">请输入密码</span>`
                    }
                    $inpPwd.focus();
                    return;
                }
            },false);
        }
    }
}())