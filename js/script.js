const { createApp } = Vue

createApp({
    data(){
        return {
            todoList: [
                {
                    text: 'buy potatoes',
                    done: false
                },
                {
                    text: 'bau',
                    done: false
                },
                {
                    text: 'miao',
                    done: false
                },
                {
                    text: 'boh',
                    done: false
                },
            ]
        }
    },
    methods: {
        toggleDone: function(index){
            this.todoList[index].done = !(this.todoList[index].done);
            console.log(this.todoList[index].done)
        }
    }
    
}).mount('#app')
