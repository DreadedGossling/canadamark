<template>
  <div class="slider">    
    <div class="slides" ref="carouselContainer">
      <div v-for="(item, index) in imageSrcs" :key="item" :class="`carouselItem flex flex-col mb-12 order-${index}`" >
        <img class="w-1/3" :src="item" />
        <div class="w-3/4 h-24 diamond-shadow -mt-16"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      imageSrcs: [
        '/images/oval.png',
        '/images/pear.png',
        '/images/princess.png',
        '/images/marquise.png',
        '/images/round.png',
      ]
    }
  },
  mounted(){
    let index = 0;
    const speed = 2;
    const numberOfSlides = this.imageSrcs.length;
    const carouselContainer = this.$refs.carouselContainer;
    const carouselItemWidth = carouselContainer.scrollWidth / numberOfSlides;
    setInterval(() => {
      carouselContainer.scrollBy(carouselItemWidth, 0);
      const timeoutId = setTimeout(() => {
        index = index % numberOfSlides;
        if (index === 4) { carouselContainer.scrollTo(0, 0);}
        index++;
        clearTimeout(timeoutId);
      }, 1000);
    }, speed * 1000);    
  }
}
</script>

<style scoped>
.diamond-shadow {
  background: radial-gradient(50% 50% at 50% 50%, rgba(103, 127, 145, 0.94) 0%, rgba(103, 127, 145, 0.37) 38.85%, rgba(230, 244, 254, 0) 100%);
  opacity: 0.75;  
}
.slider {
  width: 30rem;
  text-align: center;
  overflow: hidden;
}

.slides {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}
.slides::-webkit-scrollbar {
  height: 2px;
}
.slides::-webkit-scrollbar-thumb {
  @apply bg-cm-blue;
}
.slides::-webkit-scrollbar-track {
  @apply bg-cm-grey;
}
.slides > div {  
  scroll-snap-align: start;
  flex-shrink: 0;
  width: 30rem;
  position: relative;
  
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>