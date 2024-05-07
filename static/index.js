const vm = new Vue({
    el: '#app',
    delimiters: ['[[', ']]'],
    data(){
        return{
            message: "Hello from VueJs in Flask",
            counter: 0
        }
    },
    methods: {
        increaseCounts() {
            this.counter++;
            console.log(`counter: ${this.counter}`)
        }
    }
})