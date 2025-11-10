<template>
  <div class="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
    <div class="flex mb-4">
      <input 
        v-model="newTodo" 
        @keyup.enter="addTodo"
        placeholder="输入你的任务" 
        class="flex-1 border rounded-l px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button 
        @click="addTodo" 
        class="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
      >
        添加
      </button>
    </div>
    <ul>
      <li 
        v-for="(todo, index) in todos" 
        :key="index" 
        class="flex justify-between items-center mb-2 p-2 border rounded hover:bg-gray-50"
      >
        <span :class="{ 'line-through text-gray-400': todo.done }" @click="toggleDone(index)">
          {{ todo.text }}
        </span>
        <button @click="deleteTodo(index)" class="text-red-500 hover:text-red-700">删除</button>
      </li>
    </ul>
    <p v-if="todos.length === 0" class="text-gray-400 text-center mt-4">暂无任务</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newTodo = ref('')
const todos = ref([])

function addTodo() {
  if (newTodo.value.trim() !== '') {
    todos.value.push({ text: newTodo.value, done: false })
    newTodo.value = ''
  }
}

function deleteTodo(index) {
  todos.value.splice(index, 1)
}

function toggleDone(index) {
  todos.value[index].done = !todos.value[index].done
}
</script>