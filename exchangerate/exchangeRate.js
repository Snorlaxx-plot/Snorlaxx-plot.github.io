window.addEventListener('load', function () {

    value1 = document.querySelector('#top');
    value2 = document.querySelector('#bottom');
    change = document.querySelector('.iconfont');
    equation = document.querySelector('.equation');
    res1 = document.querySelector('#res1');
    res2 = document.querySelector('#res2');


    calculate();

    function calculate() {
        var v1 = value1.value;
        // console.log(v1);
        var v2 = value2.value;
        // console.log(v2);
        fetch(`https://api.exchangerate-api.com/v4/latest/${v1}`)
            .then(res => res.json())
            .then(data => {
                const rate = data.rates[v2];//获得汇率

                // equation.innerText = `1${currency_one} = ${rate}${currency_two}`;//模板字符串
                equation.innerText = 1 + '' + v1 + '=' + rate + '' + v2;//模板字符串

                res2.value = (res1.value * rate).toFixed(2);
                console.log(res2.value);
                res2.innerText = res2.value;
            });
    }

    value1.addEventListener('change', calculate);
    value2.addEventListener('change', calculate);
    res1.addEventListener('input', calculate);
    res2.addEventListener('input', function (e) {
        e.preventDefault();
    })
    change.addEventListener('click', function () {
        const temp = value1.value;
        value1.value = value2.value;
        value2.value = temp;
        calculate();
    })


})