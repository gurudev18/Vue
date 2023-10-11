new Vue({
    el: '#app',
    data: {
        newTask: '',
        tasks: [],
        filterStatus: 'all',
    },
    computed: {
        filteredTasks: function () {
            if (this.filterStatus === 'completed') {
                return this.tasks.filter(task => task.completed);
            } else if (this.filterStatus === 'incomplete') {
                return this.tasks.filter(task => !task.completed);
            }
            return this.tasks;
        },
    },
    methods: {
        addTask: function () {
            if (this.newTask.trim() === '') return; // Basic data validation
            this.tasks.push({ title: this.newTask, completed: false });
            this.newTask = '';
        },
        deleteTask: function (index) {
            this.tasks.splice(index, 1);
        },
    },
});