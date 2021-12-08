<template>
  <div class="static">
    <img class="border-4 border-top-cm-pantone absolute -mt-32 -ml-20 z-10 w-64 invisible" :src="imageUrl" alt="" ref="image"/>
    <div class="arrow ml-9 border-cm-pantone invisible" ref="arrow"></div>
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
      if (this.name.length > 12 ) {
        return "w-40 -ml-7"
      }else{
        return "w-24"
      }
    },
    toggleImage(){
      this.$refs.image.classList.toggle('invisible')
      this.$refs.arrow.classList.toggle('invisible')
    }
  }
}
</script>
<style scoped>
.arrow{
  width: 0; 
  height: 0; 
  border-width: 10px;
  border-style: solid;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-width: 0px;
}
</style>