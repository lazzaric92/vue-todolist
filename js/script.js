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
            completedTasks: [],
        }
    },
    methods: {
        markAsCompleted: function(index){
            if(this.todoList[index].done === false){
                this.todoList[index].done = true;
                this.completedTasks.push(this.todoList[index]);
                this.todoList.splice(index, 1);
            }
        },
        reverseToTodo: function(index){
            if(this.completedTasks[index].done === true){
                this.completedTasks[index].done = false;
                this.todoList.push(this.completedTasks[index]);
                this.completedTasks.splice(index, 1);
            }
        },

        removeTodoTask: function(index){
            this.todoList.splice(index, 1);
        },

        removeCompletedTask: function(index){
            this.completedTasks.splice(index, 1);
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
