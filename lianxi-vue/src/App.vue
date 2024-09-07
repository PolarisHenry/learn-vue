<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Parent from "./components/Parent.vue";
import { ref } from "vue";

const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' }
])

// const returnStr = () => { return '我是一个表达式' }
const returnStr = function () { return '我是一个表达式' }

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <router-link to="/MyFirstView">MyFirstView</router-link>
        <Propos title="我怎么知道你要干嘛啊？"></Propos>
        <Propos v-for="(item, index) in posts" :key="index" :title="item.title"></Propos>
      </nav>
    </div>
  </header>
  <Emit tan="我要学会vue" @tan="console.log('组件通信')"></Emit>
  <Emit :tan="returnStr()" @tan="console.log('组件通信')"></Emit>
  <br>
  <Parent></Parent>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: top;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
