const cart = new Vue({
    el: '.main',
    data: {
        books:
            [
                {
                    id: 1,
                    bname: '《算法导论》',
                    price: 99.00,
                    count: 1,
                    date: '2020/9/20'
                },
                {
                    id: 2,
                    bname: '《UNIX编程艺术》',
                    price: 99.00,
                    count: 1,
                    date: '2020/9/20'
                }, {
                    id: 3,
                    bname: '《编程珠玑》',
                    price: 99.00,
                    count: 1,
                    date: '2020/9/20'
                }, {
                    id: 4,
                    bname: '《JavaScript高级程序设计》',
                    price: 99.00,
                    count: 1,
                    date: '2020/9/20'
                }
            ],
        id: [1, 2, 3],
    },
    methods: {
        decrement(index) {
            this.books[index].count--;
        },
        increment(index) {
            this.books[index].count++;
        },
        remove(index) {
            this.books.splice(index, 1);
        }
    },
    computed: {
        totalPrice() {
            rep = 0;
            for (let i = 0; i < this.books.length; i++) {
                rep += this.books[i].price * this.books[i].count;
            }
            return rep;
        }
    },
    filters: {
        showPrice(price) {//这个price不是vue对象的 不用this
            return '$' + price.toFixed(2);
        }
    }




})







