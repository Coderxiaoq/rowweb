<template>
    <!-- Header -->
    <header class="text-center mb-12">
      <img
        src="https://avatars.githubusercontent.com/u/9919?v=4"
        alt="Profile Photo"
        class="w-32 h-32 rounded-full mx-auto shadow-lg border-4 border-white"
      />
      <h1 class="text-4xl font-bold mt-4">hugso</h1>
      <p class="text-gray-600 mt-2">前端开发工程师 · Vue & Tailwind 开发者</p>
      <div class="flex justify-center space-x-4 mt-4">
        <a href="#" class="text-blue-600 hover:text-blue-800 transition">LinkedIn</a>
        <a href="#" class="text-blue-600 hover:text-blue-800 transition">GitHub</a>
        <a href="#" class="text-blue-600 hover:text-blue-800 transition">Email</a>
      </div>
    </header>

    <!-- About -->
    <section class="max-w-3xl text-center mb-16">
      <h2 class="text-2xl font-semibold mb-4">关于我</h2>
      <p class="text-gray-700 leading-relaxed">
        我是一名前端开发者，热爱简洁优雅的代码和流畅的用户体验。熟悉 Vue、React、
        Tailwind CSS 等现代前端技术，喜欢用代码把创意变成现实。
      </p>
    </section>

    <!-- Projects -->
    <section class="max-w-5xl w-full mb-16">
      <h2 class="text-2xl font-semibold text-center mb-8">作品展示</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="bg-white rounded-2xl shadow hover:shadow-xl transition p-6"
        >
          <img :src="project.image" alt="" class="rounded-xl mb-4" />
          <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
          <p class="text-gray-600 mb-3">{{ project.description }}</p>
          <a :href="project.link" target="_blank" class="text-blue-600 hover:underline">查看项目 →</a>
        </div>
      </div>
      <div class="text-center mt-8">
        <button
          @click="goToTodo"
          class="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          去任务添加器
        </button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="text-gray-500 text-sm mt-auto">
      © {{ new Date().getFullYear() }} hugso · 由 Vue + Tailwind 构建
    </footer>
  
</template>

<script setup>
const projects = [
  {
    title: "个人博客平台",
    description: "一个基于 Vue 3 和 Firebase 的轻量级博客系统。",
    link: "#",
    image: "https://source.unsplash.com/random/800x600?blog",
  },
  {
    title: "任务管理器",
    description: "一个简洁高效的任务管理网页应用。",
    link: "#",
    image: "https://source.unsplash.com/random/800x600?todo",
  },
  {
    title: "作品集网站",
    description: "我的个人作品展示与简介网站。",
    link: "#",
    image: "https://source.unsplash.com/random/800x600?portfolio",
  },
];
import { useRouter } from 'vue-router'

const router = useRouter()

function goToTodo() {
    router.push('/todo') //跳转到/todo页面
}
</script>

