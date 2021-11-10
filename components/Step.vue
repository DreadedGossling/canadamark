<template>
  <div class="static">
    <img class="border-4 border-cm-pantone absolute -mt-32 -ml-20 z-10 w-64 hidden" :src="imageUrl" alt="" ref="image"/>
    <img class="border-4 border-cm-pantone rounded-full h-24 w-24" :src="thumbUrl" alt="" @mouseenter="toggleImage" @mouseleave="toggleImage"/>
    <span class="absolute mt-4 text-center" :class="width()">{{ name }}</span>
  </div>  
</template>
<script>
export default {
  props: {
    name: String,
    imageUrl: String,
    thumbUrl: String
  },
  methods: {
    width() {
      console.log(this.name)
      if (this.name.length > 12 ) {
        return "w-40 -ml-7"
      }else{
        return "w-24"
      }
    },
    toggleImage(){
      this.$refs.image.classList.toggle('hidden')
    }
  }
}
</script>