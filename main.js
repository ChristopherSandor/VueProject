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
                {title: 'name of the wind', author: 'patrick rothfuss'},
                {title: 'the way of kings', author: 'brandon sanderson'},
                {title: 'the final empire', author: 'patrick rothfuss'},
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
        }
    }

})

app.mount('#app');