<template>
  <div id="todoApp">
    <h2 v-bind:style="fontStyle">{{ title }}</h2>
    <input type="text" v-model="todo">
    <button @click="addTodo()">add</button>
    <div>
      <div v-for="t in todos" 
           v-bind:class="['todo-default', t.doing ? 'todo-doing' : '']"
           v-on:click="begin($index)">
        {{t.name}}
      </div>
    </div>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        title: 'Welcome to Vue.js',
        fontStyle: {
          fontSize: '20px',
        },
        todo: '',
        todos: [],
      };
    },
    methods: {
      addTodo() {
        this.todos.push({
          name: this.todo,
          doing: false,
        });
        this.todo = '';
      },
      begin(index) {
        this.todos[index].doing = !this.todos[index].doing;
      },
    },
  };
</script>

<style>
  .todo-default {
    padding: 5px;
    border-bottom: 1px solid silver;
  }
  .todo-doing {
    background-color: floralwhite;
  }
</style>
