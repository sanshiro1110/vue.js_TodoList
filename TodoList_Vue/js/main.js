let vm = new Vue({
  el: "#app",
  data: {
    newText: "",
    todos: [
      {
        title: 'task1',
        isDone: false,
      },
      {
        title: 'task2',
        isDone: false,
      },
      {
        title: 'task3',
        isDone: false,
      },
    ]
  },
  methods: {
    addText: function() {
      this.todos.push({
        title: this.newText,
        isDone: false,
      });
      this.newText = "";
    },
    deleteItem: function(index) {
      if(confirm('are you sure to delete this task?')) {
        this.todos.splice(index, 1);
      }
      return;
    },
    deleteAllItem: function() {
      if(confirm('are you sure to delete all tasks is done?')) {
        this.todos = this.remaining;
      }
      return;
    }
  },
  computed: {
    remaining: function() {
      return this.todos.filter(function(todo) {
        return !todo.isDone;
      });
    }
  }
});
