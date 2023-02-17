const app = Vue.createApp({
    data() {
        return{
            // title: 'The Final Empire',
            // author: 'Brandon Sanderson',
            // age: 45,
            showBooks: true,
            // x: 0,
            // y: 0
            books: [
                {title: 'name of the wind', author: 'patrick rothfuss', img:"img1.png", isFav: true},
                {title: 'the way of kings', author: 'brandon sanderson', img:"img2.png", isFav: false},
                {title: 'the final empire', author: 'patrick rothfuss', img:"img3.png", isFav: true},
            ],
            url: "http://www.csandor.com",
        }
    },
    methods: {
        changeTitle(title){
            // this.title = 'Words of Randiance'
            this.title = title
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks;
        },
        handleEvent(e, data){
            console.log(e, e.type);
            if(data){
                console.log(data)
            }
        },
        handleMousemove(e){
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
        toggleFav(book){
            book.isFav = !book.isFav;
        }
    },
    computed: {
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }

})

app.mount('#app');