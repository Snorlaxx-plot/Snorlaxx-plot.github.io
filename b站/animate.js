function animate(obj, target, callback) {
    clearInterval(obj.timer);//只保留一个定时器
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10;//步长计算
        step = step > 0 ? Math.ceil(step) : Math.floor(step);//步长取整
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            /* if (callback) {//回调函数
                callback();
            } */
            callback && callback();
        }
        obj.style.left = obj.offsetLeft + step + 'px';//target目标位置，向目标位置移动

    }, 10)
}

//页面滚动函数
function animateY(obj, target, callback) {
    clearInterval(obj.timer);//只保留一个定时器
    obj.timer = setInterval(function () {
        var step = (target - window.pageYOffset) / 10;//步长计算
        step = step > 0 ? Math.ceil(step) : Math.floor(step);//步长取整
        if (window.pageYOffset == target) {
            clearInterval(obj.timer);
            if (callback) {//回调函数
                callback();
            }
        }
        window.scroll(0, window.pageYOffset + step);
    }, 10)
}
