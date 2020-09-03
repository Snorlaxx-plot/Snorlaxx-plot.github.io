window.addEventListener('load', function () {
    /* -------------tab栏切换-------------- */
    var titlePaihang = document.querySelector('.live').querySelector('.rightbox').querySelector('.titlePaihang');
    var titleTuijie = document.querySelector('.live').querySelector('.rightbox').querySelector('.titleTuijie');
    var livepic = document.querySelector('.live').querySelector('.rightbox').querySelector('.livepic');
    var paihang = document.querySelector('.live').querySelector('.rightbox').querySelector('.paihang');
    var titlelis = document.querySelector('.live').querySelector('.rightbox').querySelector('.title2').querySelectorAll('li');
    for (var i = 0; i < titlelis.length; i++) {
        titlelis[i].onclick = function () {
            // 排他
            for (var j = 0; j < titlelis.length; j++) {
                titlelis[j].style.color = '#000';
                titlelis[j].style.borderBottomColor = 'transparent';
            }
            this.style.color = '#1cabdd';
            this.style.borderBottomColor = '#1cabdd';
            // paihang.style.display="Block";
            // livepic.style.display='none';

        }
    }
    // 同元素的同个操作，后来覆盖
    // 传统事件的唯一性！！！！
    titlePaihang.onclick = function () {
        paihang.style.display = "Block";
        livepic.style.display = 'none';
        for (var j = 0; j < titlelis.length; j++) {
            titlelis[j].style.color = '#000';
            titlelis[j].style.borderBottomColor = 'transparent';
        }
        this.style.color = '#1cabdd';
        this.style.borderBottomColor = '#1cabdd';
    }
    titleTuijie.onclick = function () {
        paihang.style.display = "none";
        livepic.style.display = 'block';
        for (var j = 0; j < titlelis.length; j++) {
            titlelis[j].style.color = '#000';
            titlelis[j].style.borderBottomColor = 'transparent';
        }
        this.style.color = '#1cabdd';
        this.style.borderBottomColor = '#1cabdd';
    }

    /* -------------侧边栏下拉动态定位-------------- */
    var aside = document.querySelector('aside');
    var article = document.querySelector('article');
    // 必须添加document滚动事件
    var articleTop = article.offsetTop;//不要写死了
    document.addEventListener('scroll', function () {
        // console.log(11);
        var asidet = window.pageYOffset;//必须写在函数内！！！不然只会有一个值
        // console.log(asidet);
        if (asidet >= articleTop) {
            aside.style.position = 'fixed';
            aside.style.top = 143 + 'px';
            aside.style.right = 65 + 7 + 'px';
        }
        else {
            aside.style.position = 'absolute';
            aside.style.top = 0 + 'px';
            aside.style.right = -65 + 'px';
        }
    })

    /* -----轮播图----------- */
    var leftimg = document.querySelector('.leftimg');
    var leftbtn = document.querySelector('.leftbtn');
    var rightbtn = document.querySelector('.rightbtn');
    var ul = document.querySelector('.leftimg').querySelector('ul');
    var imgli = ul.children;//多少张图
    // console.log(imgli.length);
    //按钮显示不显示
    leftimg.addEventListener('mouseover', function () {
        leftbtn.style.display = 'block';
        rightbtn.style.display = 'block';
        clearInterval(imgTimer);
        imgTimer = null;
    })
    leftimg.addEventListener('mouseout', function () {
        leftbtn.style.display = 'none';
        rightbtn.style.display = 'none';
        imgTimer = setInterval(function () { rightbtn.click() }, 5000);
    })
    rightbtn.addEventListener('click', function () {
        animate(ul, -550);
    })
    //动态生成小圆点,几张图几个圆点
    var point = document.querySelector('.point');
    var pointLi = point.querySelector('li');
    var pointUl = point.querySelector('ul');
    var imgwidth = leftimg.offsetWidth;//获得单个宽度
    for (var i = 0; i < imgli.length; i++) {
        var li = document.createElement('li');//生成li
        li.setAttribute('index', i);//自定义属性，为小圆点增加索引
        pointUl.appendChild(li);//插入li
    }
    pointUl.children[0].className = 'current';//当前小圆点
    //点击小圆点变色/换类
    console.log(pointUl.children);
    for (var i = 0; i < pointUl.children.length; i++) {
        pointUl.children[i].addEventListener('click', function () {
            for (var i = 0; i < pointUl.children.length; i++) {
                // pointUl.children[i].style.backgroundColor = '';
                pointUl.children[i].className = '';
            }
            this.className = 'current';//变色，换类就行不用另外写style

            // 点击小圆圈就移动
            var index = this.getAttribute('index');
            //圆点和图片需要同时改变
            num = index;
            circle = index;
            console.log(index);
            // console.log(imgwidth);
            animate(ul, -index * imgwidth);//向左移动的距离为负
        })
    }
    //克隆第一张图片，不增加圆点个数(写在生成小圆圈的后面就行)
    var first = imgli[0].cloneNode(true);
    ul.appendChild(first);
    //点击按钮，图片移动
    var num = 0;
    var circle = 0;
    var flag = true;
    /* 右按钮 */
    rightbtn.addEventListener('click', function () {
        //小圆圆变色
        if (flag) {//节流阀
            flag = false;
            circle++;
            if (circle == imgli.length - 1) { circle = 0; }
            for (var i = 0; i < pointUl.children.length; i++) {
                // pointUl.children[i].style.backgroundColor = '';
                pointUl.children[i].className = '';
            }
            pointUl.children[circle].className = 'current';//变色，换类就行不用另外写style

            //滑动

            if (num == imgli.length - 1) {//先判断后滚
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * imgwidth, function () { flag = true; });//右滚
        }
    })
    /* 左按钮 */
    leftbtn.addEventListener('click', function () {
        if (flag) {
            flag = false;
            circle--;
            if (circle < 0) { circle = imgli.length - 2; }
            for (var i = 0; i < pointUl.children.length; i++) {
                // pointUl.children[i].style.backgroundColor = '';
                pointUl.children[i].className = '';
            }
            pointUl.children[circle].className = 'current';//变色，换类就行不用另外写style

            //滑动

            if (num == 0) {//先判断后滚
                ul.style.left = -(imgli.length - 1) * imgwidth + 'px';
                num = imgli.length - 1;
            }
            num--;
            animate(ul, -num * imgwidth, function () { flag = true; });//右滚
        }
    })
    //自动播放,直接调用右按钮定时器
    var imgTimer = setInterval(function () { rightbtn.click() }, 5000);


    /* --------页面滚动---------- */
    var ico1 = document.querySelector('.ico1');
    var ico2 = document.querySelector('.ico2');
    ico1.addEventListener('click', function () {
        animateY(window, 0);
    })//返回顶部





})
