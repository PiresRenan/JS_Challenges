const app = new Vue({
    el: '#app',
    data: {
        newTask: '',
        tasks: []
    },
    methods: {
        addTask() {
            if (this.newTask.trim() !== '') {
                this.tasks.push({ name: this.newTask, completed: false });
                this.newTask = '';
            }
        },
        toggleComplete(task) {
            task.completed = !task.completed;
        },
        removeTask(task) {
            const index = this.tasks.indexOf(task);
            if (index !== -1) {
                this.tasks.splice(index, 1);
            }
        }
    }
});