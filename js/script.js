const { createApp } = Vue

createApp({
    data(){
        return {
            todoList: [
                {
                    text: 'buy potatoes',
                    done: false,
                    toChange: false
                },
                {
                    text: 'bau',
                    done: false,
                    toChange: false
                },
                {
                    text: 'miao',
                    done: false,
                    toChange: false
                },
                {
                    text: 'boh',
                    done: false,
                    toChange: false
                },
            ],
            newTaskContent: '',
            
        }
    },
    methods: {
        toggleDone: function(index){
            this.todoList[index].done = !(this.todoList[index].done);
        },

        removeTask: function(index){
            this.todoList.splice(index, 1);
        },

        addNewTask: function(content){
            content = content.trim();
            if(content.length > 0){
                const newTask = {
                    text: content,
                    done: false,
                    toChange: false
                }
    
                this.todoList.push(newTask);
                this.clearNewTaskContent();
            }
            
        },

        clearNewTaskContent: function(){
            this.newTaskContent = '';
        },

        changeTask: function(index){
            this.todoList[index].toChange = true;
        },

        acceptChanges: function(index){
            this.todoList[index].toChange = false;
        }
    }
    
}).mount('#app')
