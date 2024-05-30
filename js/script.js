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
            ],
            newTaskContent: '',
        }
    },
    methods: {
        toggleDone: function(index){
            this.todoList[index].done = !(this.todoList[index].done);
            console.log(this.todoList[index].done)
        },

        removeTask: function(index){
            this.todoList.splice(index, 1);
        },

        addNewTask: function(content){
            const newTask = {
                text: content,
                done: false,
            }

            this.todoList.push(newTask);
            this.clearNewTaskContent();
        },

        clearNewTaskContent: function(){
            this.newTaskContent = '';
        }
    }
    
}).mount('#app')
