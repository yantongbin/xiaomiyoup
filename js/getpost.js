function sendAjax(url, obj) {//设置了method的默认值为GET
    const xhr = new XMLHttpRequest();
    const newObj = {
        method: 'GET',
        data: null,
    }
    //传来的值和默认值合并
    Object.assign(newObj, obj);
    // for(var i in newObj){
    //     if(i in obj){
    //         newObj[i] = obj[i];
    //     }
    // }
    let capital = newObj.method.toUpperCase();
    if (capital == 'GET') {
        let flag = url.indexOf('?') == -1 ? "?" : "&";
        url += `${flag}_=${Date.now()}`
        for (var i in newObj.data) {
            url += `&${i}=${newObj.data[i]}`;
        }
        url.slice(0, newObj.data)
        newObj.data = null;
    } else if (capital == 'POST') {
        newObj.data = JSON.stringify(newObj.data);
    } else {
        return;
    }
    xhr.open(newObj.method, url, true);
    xhr.send(newObj.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var data = xhr.response;//获取返回的数据+
                newObj.success && newObj.success(data);
            } else {
                newObj.error && newObj.error(data);
            }
        }
    }
}