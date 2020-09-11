window.addEventListener('load', function () {

    attention = document.querySelectorAll('.red');
    console.log(attention);
    uname = document.querySelector('.uname')
    email = document.querySelector('.email')
    password = document.querySelector('.password')
    confirm1 = document.querySelector('.confirm')
    sub = document.querySelector('.sub')
    logindis = document.querySelector('.logindis')
    const login = document.querySelector('.login')
    // const sublogin = document.querySelector('.sublogin');
    const closebtn = document.querySelector('.closebtn');
    const loginpages = document.querySelector('.loginpage');
    var regexName = /^[\u4E00-\u9FA5A-Za-z0-9_]{3,20}$/;//中文、英文、数字包括下划线3-20个
    var regexEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    var regexPsw = /^\w{3,20}$/;//3-20位密码
    // var flag = [0,0,0,0];
    uname.addEventListener('blur', function () {
        if (regexName.test(uname.value)) {
            attention[0].innerHTML = '';
            attention[0].className = 'green';
            uname.className = 'uname borderg';


        } else {
            attention[0].innerHTML = '用户名位3-20位字符';
            attention[0].className = 'red';
            uname.className = 'uname borderr';

        }
    })
    email.addEventListener('blur', function () {
        if (regexEmail.test(email.value)) {
            attention[1].innerHTML = '';
            attention[1].className = 'green';
            email.className = 'uname borderg';


        } else {
            attention[1].innerHTML = '邮箱格式错误';
            attention[1].className = 'red';
            email.className = 'uname borderr';

        }
    })
    password.addEventListener('blur', function () {
        if (regexPsw.test(password.value)) {
            attention[2].innerHTML = '';
            attention[2].className = 'green';
            password.className = 'uname borderg';


        } else {
            attention[2].innerHTML = '密码格式错误';
            attention[2].className = 'red';
            password.className = 'uname borderr';

        }
    })
    confirm1.addEventListener('blur', function () {
        if (confirm1.value === password.value) {
            attention[3].innerHTML = '';
            attention[3].className = 'green';
            confirm1.className = 'uname borderg';


        } else {
            attention[3].innerHTML = '密码错误';
            attention[3].className = 'red';
            confirm1.className = 'uname borderr';

        }
    })
    // console.log(Array.from(attention));
    // console.log([...attention]);
    sub.addEventListener('click', function (e) {//登录
        console.log([...attention]);//伪数组转真数组
        if ([...attention].some(value => value.className == 'red'
        )) {

            e.preventDefault();
            // alert('!')
        }
        else {
            // alert('提交成功！')
            logindis.classList.remove('display');
            sessionStorage.setItem('username', uname.value);
            if (getname()) {
                login.innerHTML = `WELCOME ${getname()}`;//显示欢迎
                login.removeEventListener('click', loginwindow)
            }

        }
    })


    if (getname()) {//页面加载，查询是否有用户名
        login.innerHTML = `WELCOME ${getname()}`;//显示欢迎
        login.removeEventListener('click', loginwindow)
    } else {
        login.innerHTML = 'LOGIN'
    }
    closebtn.addEventListener('click', function () {//点击按钮关闭窗口
        logindis.classList.remove('display');
    })

    login.addEventListener('click', loginwindow)//点击登录显示窗口
    loginpages.addEventListener('click', (e) => {//阻止点击小窗口关闭窗口的冒泡事件
        e.stopPropagation();
    })
    logindis.addEventListener('click', () => {//点击空余地关闭登录
        logindis.classList.remove('display');
    })
    function getname() {
        // console.log(localStorage.getItem('username'));
        return sessionStorage.getItem('username');


    }
    function loginwindow() {
        logindis.classList.add('display');
    }
})