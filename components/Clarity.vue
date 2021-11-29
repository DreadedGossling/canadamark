<template>
  <div class="flex flex-col items-center m-1 sm:m-4 md:m-8 w-1/5">
    <h3 class="font-sanomat text-sm md:text-base mb-auto" v-html="name"></h3>
    <img :src="imageUrl" alt="">
    <h3 class="uppercase font-ddin text-sm md:text-base font-black ">{{ shortname }}</h3>
  </div>
</template>

<script>
export default {
  props: ['name', 'shortname', 'imageUrl']
}
</script>