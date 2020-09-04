window.addEventListener('load', function () {
    var seats = document.querySelector('.seats').querySelectorAll('.seat');
    // console.log(seats);
    var button = document.querySelector('.commit');
    //从document对象中，获取select标签
    var selects = document.getElementById('movie');
    //select标签获取的值其实是一个数组--a.options[]; 然后，选定项的下标是--a.selectedIndex
    var selected = 0;
    var sNum = document.querySelector('.seatNum');
    var price = document.querySelector('.price');
    var seatNums = 0;
    var totalPrice = 0;
    seats.forEach(function (one) {
        // console.log(one);
        function fn1() { one.className = 'seat border'; }
        function fn2() {
            one.className = 'seat';
        }
        one.addEventListener('mouseover', fn1)
        one.addEventListener('mouseout', fn2)
        one.addEventListener('click', function () {
            /* if (one.className == 'seat blue') {
                seatNums++;
            } */
            if (one.className != 'seat disable') {
                if (one.className == 'seat blue') {
                    seatNums--;
                    one.className = 'seat';
                    one.addEventListener('mouseover', fn1)
                    one.addEventListener('mouseout', fn2)

                } else {
                    one.className = 'seat blue';
                    seatNums++;
                    // console.log(one);
                    one.removeEventListener('mouseover', fn1)
                    one.removeEventListener('mouseout', fn2)
                }
            }
            selected = selects.options[selects.selectedIndex].value;
            totalPrice = selected * seatNums;
            // console.log(seatNums);
            sNum.innerHTML = '' + seatNums + '';
            price.innerHTML = '' + totalPrice + '';
        })
        button.addEventListener('click', function () {
            location.assign('../video/video.html');
        })
        /* button.addEventListener('click', function () {
            var used = seats.some(function (one) {
                return one.className == 'seat blue';
            })
            used.forEach(function (one) {
                one.className = 'seat disable';
            })
        }) */
    })
    /* console.log(seats);
    button.addEventListener('click', function () {
        var used = seats.filter(function (one) {
            return one.className == 'seat blue';
        })
        used.forEach(function (one) {
            one.className = 'seat disable';
        })
    }) */


    /* seats.forEach(function (one) { 
        if (one.className == 'seat blue') {
            seatNum++;
        }
    }) */

})