<script setup>
const menuitems = [
  {
    title: "Sign up",
    url: "https://app.netlify.com/signup",
  },
  {
    title: "Log in",
    url: "https://app.netlify.com/login",
  },
];
</script>

<template>
  <Container>
    <header class="flex flex-row flex-wrap items-center justify-between my-4 gap-x-6 gap-y-4 bg-zinc-700">
      <div class="flex items-center justify-between">
        <a href="/" class="text-2xl font-bold text-stone-100">
          <span class="text-sky-600">&#10070;</span> David Phelps
        </a>
      </div>
      <nav class="flex w-auto">
        <ul class="flex flex-row gap-3 text-sm">
          <li v-for="item of menuitems">
            <a :href="item.url" class="flex px-3 py-2 bg-sky-600 duration-300 text-stone-100 border-sky-950 rounded-sm hover:bg-gray-800 transition-color">
              {{ item.title }}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  </Container>
</template>
