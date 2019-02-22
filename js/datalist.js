// var shop =(function(){
//     return{
//         init(){
//             this.event();
//         },
//         event(){
//             var _this = this;
//             var $btn = document.querySelector('.add-shop');
//             $btn.onclick = function(){
//                 _this.getdata();
//             }
//         },
//         getdata(){
//             var $name1 = document.querySelector('.by h2').innerHTML;
//             var $name2 = document.querySelector('.size-item').innerHTML;
//             var $name3 = document.querySelector('.size-main .size-item').innerHTML;
//             var $price = document.querySelector('.money').innerHTML;
//             var $num = document.querySelector('#txt').value;
//             console.log($num.value);
//             localStorage.name = $name1 + $name2 + $name3;
//             localStorage.price = $price;
//             localStorage.num = $num;
//         }
//     }
// }())
var shop = (function(){
    var $box = document.querySelector('.main_head');
    return{
        init(){
            this.getJson();
        },
        event(){
            var _this = this;
            var $btn = document.querySelector('.add-shop');
            var $minBox = document.querySelector('.by');
            (function(){
                $('.size-main').on('click' , 'div' , function(){
                    $(this).css('border-color','red').siblings().css('border', '1px solid #d6d6d6');
                })
                $('.size .size-main').on('click' , 'div' , function(){
                    $(this).css('border-color', 'red').siblings().css('border', '1px solid #d6d6d6');
                })
                var t = $("#txt");
                $(".minus-max a").click(function(e) {
                    e.preventDefault();
                    t.val(parseInt(t.val()) + 1); //点击加号输入框数值加1
                   
                });
                $(".minus-min a").click(function(e){
                    e.preventDefault()
                    t.val(parseInt(t.val())-1); //点击减号输入框数值减1
                    if(t.val()<=0){
                        t.val(parseInt(t.val())+1); //最小值为1
                    }
                });    
            }());
            $btn.onclick = function(){
                var index = $minBox.getAttribute('index');
                console.log(_this.data[index]);
                var obj = {
                    num:1,
                    ..._this.data[index]
                }
                _this.setData(obj);
            }

                                    
        },
        getJson(){
            var _this = this;
            sendAjax('json/datalist.json',{
                success(data){
                    _this.insertdata(JSON.parse(data));
                }
            })
        },
        insertdata({code,data}){
            var _this = this;
            _this.data = data;
            var $arr = []
            if(code == 200){
                data.forEach((item , index) => {
                    $div = `
                    <div class="banner">
                        <div class="bg-image">
                            <img src="images/img2/bg01.jpg">
                        </div>
                        <div class="sm-image">
                            <ul>
                                <li class="bd">
                                    <img src="images/img2/001.jpg">
                                </li>
                                <li>
                                    <img src="images/img2/002.jpg">
                                </li>
                                <li>
                                    <img src="images/img2/003.jpg">
                                </li>
                                <li>
                                    <img src="images/img2/004.jpg">
                                </li>
                                <li>
                                    <img src="images/img2/005.jpg">
                                </li>
                            </ul>
                            <div class="img-up"></div>
                            <div class="img-down"></div>
                        </div>
                    </div>
                    
                    <div class="by" index = ${item.id}>
                    <h2>${item.name}</h2>
                    <div class="p1">双频GPS，骁龙845处理器，红外人脸解锁，AI变焦双摄，三星AMOLED屏，AI语音助手，多功能NFC</div>
                    <div class="card">
                        <div class="price">
                            <h5>售价</h5>
                            <div class="price-num">
                                <span>￥</span>
                                <span class="money">${item.price}</span>
                                <span>￥2699</span>
                                <span>直降400元</span>
                            </div>
                        </div>
                        <div class="services">
                            <h5>服务</h5>
                            <div class="box2">
                                <p class="icon1">!</p>
                            </div>
                            <div class="services-main">
                                <div class="services-item">
                                    <a class="icon" href="javascript:;"></a>
                                    <span>小米有品甄选精品</span>
                                </div>
                                <div class="services-item">
                                    <a class="icon" href="javascript:;"></a>
                                    <span>由 小米 发货并提供售后</span>
                                </div>
                                <div class="services-item">
                                    <a class="icon" href="javascript:;"></a>
                                    <span>支持7天无理由退货</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="ads">
                        <h5>配送区域</h5>
                        <div>
                            <span>北京北京市海淀区 </span>
                            <a>修改</a>
                        </div>
                    </div>
                    <div class="size-wrap">
                        <div class="size clearfix">
                            <h5>颜色</h5>
                            <div class="size-main">
                                <div class="size-item">黑色</div>
                                <div class="size-item">白色</div>
                                <div class="size-item">蓝色</div>
                                <div class="size-item">金色</div>
                            </div>
                        </div>
                    </div>
                    <div class="size-wrap">
                        <div class="size clearfix">
                            <h5>版本</h5>
                            <div class="size-main">
                                <div class="size-item">6G+64GB</div>
                                <div class="size-item">6G+128GB</div>
                                <div class="size-item">6G+256GB</div>
                                <div class="size-item">8G+128GB</div>
                            </div>
                        </div>
                    </div>
                    <div class="count">
                        <h5>数量</h5>
                        <div class="minus-min">
                            <a href="javascript:;"></a>
                        </div>
                        <input type="text" value="1" id="txt">
                        <div class="minus-max">
                            <a href="javascript:;"></a>
                        </div>
                    </div>
                    <div class="btn-wrap">
                        <div class="btn-main">
                            <a class="buy" href="javascript:;">立即购买</a>
                            <a class="add-shop" href="javascript:;">加入购物车</a>
                        </div>
                        <div class="favor">
                            <a href="javascript:;"></a>
                            <p>收藏</p>
                        </div>
                        <div class="favor-service">
                            <a href="javascript:;"></a>
                            <p>客服</p>
                        </div>
                    </div>
                </div>                                    
                    ` 
                $arr.push($div);
                })

                $box.innerHTML = $arr.join('');
                _this.event();
            }else{
                alert('你没有获取数据的权限');
            }
            
        },
        setData(data){
            var shopList = localStorage.getItem('shopList') || '[]';
            shopList = JSON.parse(shopList);
            // for(var i = 0 ; i < shopList.length ;i++){
            //     console.log(i)                
            //     var item = shopList[i];
            //     if(item.id == data.id){
            //         item.num += data.num;
            //         break;
            //     }
            //     if(i == shopList.length){
            //         shopList.push(data);
            //     }
            shopList.push(data);
            localStorage.shopList = JSON.stringify(shopList);
        }
    }
}())