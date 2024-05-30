const { createApp } = Vue

createApp({
    data(){
        return {
            todoList: [
                {
                    text: 'buy potatoes',
                    done: true
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
    
}).mount('#app')
