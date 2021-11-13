<template>
  <div>
    <div class="top-section text-white flex flex-col items-center justify-between">
      <h1 class="m-12 font-sanomat text-2xl md:text-6xl">Your Diamond</h1>
      <p class="mb-12 max-w-6xl text-center font-ddin leading-tight p-4 text-sm md:text-2xl">Before you hold your Canadamark diamond, a team of passionate professionals responsibly mine it, bring out its beauty, and ensure that it’s authentically Canadian. We want you to focus on your diamond’s artistry and be proud to wear it without second guessing its history.</p>
    </div>
    <div class="max-w-6xl grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-0 py-0 md:p-6 mt-6 md:my-8 mx-auto h-700px two-section p-6">
      <div class="bg-cm-blue text-white flex flex-col justify-center items-center h-auto py-10 md:py-4 md:h-4/5 w-4/5 md:w-auto m-auto px-12 z-10">
        <h1 class="font-sanomat text-2xl md:text-6xl">Origin</h1>
        <p class="text-center text24 mt-8 mb-4 font-bold font-ddin leading-tight text-sm md:text-2xl">{{mineName}}</p>
        <p class="text-center text24 font-ddin leading-tight md:leading-tight text-sm md:text-2xl mb-4">{{mineText}}</p>
        <p class="mt-auto">
          <svg class="w-6 md:w-8 inline cursor-pointer" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" @click="prevMine()">
          <path d="M18.123 8.17383L14.123 16.1738L18.123 24.1738" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="font-ddin text-sm md:text-2xl align-middle">{{mineIndex+1}}/{{mines.length}}</span>
          <svg class="w-6 md:w-8 inline transform rotate-180 cursor-pointer" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" @click="nextMine()">
          <path d="M18.123 8.17383L14.123 16.1738L18.123 24.1738" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </p>
      </div>
      <div class="bg-origin media h-full w-auto md:-ml-12"></div>
    </div>
    <div class="max-w-6xl grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-0 py-0 md:p-6 mt-6 md:my-8 mx-auto h-700px p-6 two-section">
      <div class="h-full w-auto bg-black order-1 md:order-0 media">
        <video class="h-auto md:h-full w-full md:w-auto" src="/videos/preview.mp4" autoplay loop playsinline muted></video>
      </div>
      <div class="bg-cm-blue text-white flex flex-col justify-center items-center h-auto py-10 md:py-0 h-4/5 w-4/5 md:w-auto m-auto px-8 z-10 order-0 md:order-1 md:-ml-12 z-10">
        <h1 class="font-sanomat text-2xl md:text-6xl text-center">Define Your</h1>
        <h1 class="font-sanomat text-2xl md:text-6xl text-center mb-4">Own Milestones</h1>
        <p class="text-center text24 font-ddin leading-tight md:leading-tight text-sm md:text-2xl">True luxury is feeling good about your choices.</p>
      </div>
    </div>    
    <div class="max-w-6xl grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-0 py-0 md:p-6 mt-6 md:my-8 mx-auto h-700px two-section p-6">
      <div class="bg-cm-blue text-white flex flex-col justify-center items-center h-auto py-10 md:py-0 md:h-4/5 w-4/5 md:w-auto m-auto px-12 z-10">
        <h1 class="font-sanomat text-2xl md:text-6xl mb-4">Bridal</h1>
        <p class="text-center text24 font-ddin leading-tight md:leading-tight text-sm md:text-2xl">We ensure that our diamonds meet specific standards for color, clarity, finish, and symmetry. All you have to do is pick the right one for you.</p>
      </div>
      <div class="bg-bridal media h-full w-auto md:-ml-12"></div>
    </div>
  </div>
</template>
<style scoped>
  .top-section {
    background-image: url('/images/20180416-253A5988.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 90%;
    height: 550px;
    position: relative;
  }

  @media only screen and (min-width: 768px) {
    .h-700px {
      height: 748px;
    }
  }

  @media only screen and (max-width: 767px) {
    .two-section .media {
      margin-top: -40px;
    }
  }

  .bg-bridal {
    background-image: url('/images/bridal-jewellery.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .bg-origin{
    background-image: url('/images/natural-diamond-nestled-in-kimberlite-2.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
</style>
<script>
export default {
  data(){
    return {
      mineIndex: 0,
      mines: ['THE NORTHWEST TERRITORIES', 'GOVERNMENT REGULATIONS', 'KIMBERLITE PIPES'],
      minesDesc: [
        'Your diamond comes from the Ekati, Diavik, and Gahcho Kué mines in Canada’s pristine North, about 200 kilometres south of the Arctic circle. With preferential hiring practices and training programs for northern residents, indigenous-led wildlife monitoring programs, and industry-leading water recycling and composting systems, these mines are at the forefront of community engagement, environmental stewardship and waste management practices.',
        'Mining in Canada is governed by more stringent regulations than other countries. Federal, territorial, First Nations agreements — they’re all in place to protect Canada’s environment and its people. All mines that are part of the Canadamark program must meet Canada’s stringent environmental regulations, and many go above and beyond.',
        'Rough diamonds are found in kimberlite pipes, which were formed in the magma of the Earth’s mantle billions of year ago then forced up in volcanic eruptions. While more than 2,000 kimberlite pipes have been discovered around the world, only a couple dozen are worthy to be mined.']
    }
  },
  methods: {
    prevMine(){
      const minesCount = this.mines.length
      if (this.mineIndex === 0)
        this.mineIndex = minesCount - 1
      else
        this.mineIndex -= 1
        
      console.log(this.mineIndex)
    },
    nextMine(){
      const minesCount = this.mines.length
      if (this.mineIndex === minesCount - 1)
        this.mineIndex = 0
      else
        this.mineIndex += 1 
    }
  },
  computed: {
    mineName(){
      return this.mines[this.mineIndex]
    },
    mineText(){
      return this.minesDesc[this.mineIndex]
    }
  },
}
</script>