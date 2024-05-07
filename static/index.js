const vm = new Vue({
    el: '#app',
    delimiters: ['[[', ']]'],
    data(){
        return{
            message: "Hello from VueJs in Flask",
            counter: 0,
            userInfo: undefined
        }
    },
    mounted(){
        axios.get("https://psychic-meme-4jqxq6jr6w6qfv45-5000.app.github.dev/users",{
            headers:{
                'Content-Type': 'application/json',
            }
        }).then(data=>{
           this.userInfo = data.data;
        })
    },
    methods: {
        increaseCounts() {
            this.counter++;
            console.log(`counter: ${this.counter}`)
        }
    },
})