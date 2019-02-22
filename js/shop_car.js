var shopCar = (function(){
    var $box = document.querySelector('.big_box');
    return{
        init(){
            this.event();
            this.getJson();
        },
        event(){
            $box.onclick = function(e){
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.nodeName === 'A'){
                    console.log(1111)
                }
            }
        },
        getJson(){
            console.log(111);
            var shopList = localStorage.shopList || '[]';
            shopList = JSON.parse(shopList);
            this.insertData(shopList);
        },
        setData(){

        },
        insertData(data){
            var arr = [];
            for(var i = 0 ; i<data.length ;i++){
                arr.push(`                
                <div class="ms_list">
                    <div class="msl_title">
                        <a href="javascript:;" class="mst_check"></a>
                        <span>小米/米家自营</span>
                    </div>
                    <div class="shop_product clearfix">
                        <div class="shop_check">
                            <a href="javascript:;" class="mst_check icon"></a>
                        </div>
                        <div class="shop_img">
                            <img src="images/img/shop.jpg" alt="">
                        </div>
                        <div class="shop_message">
                            <p class="sm_title">小米8 青春 全网通版 4GB内存 深空灰 64GB</p>
                        </div>
                        <div class="shop_price">
                            <span>￥<span>10000</span></span> 
                        </div>
                        <div class="shop_num">
                            <div class="sn_box">
                                <a href="javascript:;" class="shop_reduct icon icon_reduct"></a>
                                <span class="snb_box">1</span>
                                <a href="javascript:;" class="shop_add icon icon_add"></a>
                            </div>
                        </div>
                        <div class="shop_total">
                            <span>￥<span>10000</span></span> 
                        </div>
                        <div class="shop_del">
                            <a href="javascript:;" class="delete icon"></a>
                        </div>
                    </div>
                </div>
               ` )   
            }
            $box.innerHTML = arr.join('');
        }
    }
}())