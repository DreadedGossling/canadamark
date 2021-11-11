<template>
  <div>
    <div class="top-section text-white flex flex-col items-center justify-between">
      <h1 class="m-12 font-sanomat text-2xl md:text-6xl">Your Diamond</h1>
      <p class="mb-12 max-w-6xl text-center font-ddin leading-tight p-4 text-sm md:text-2xl">Before you hold your Canadamark diamond, a team of passionate professionals responsibly mine it, bring out its beauty, and ensure that it’s authentically Canadian. We want you to focus on your diamond’s artistry and be proud to wear it without second guessing its history.</p>
    </div>
    <div class="max-w-6xl grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-0 py-0 md:p-6 mt-6 md:my-8 mx-auto h-700px two-section p-6">
      <div class="bg-cm-blue text-white flex flex-col justify-center items-center h-auto py-10 md:py-0 md:h-4/5 w-4/5 md:w-auto m-auto px-12 z-10">
        <h1 class="font-sanomat text-2xl md:text-6xl">Origin</h1>
        <p class="text-center text24 mt-8 mb-4 font-bold font-ddin leading-tight text-sm md:text-2xl">THE NORTHWEST TERRITORIES</p>
        <p class="text-center text24 font-ddin leading-tight text-sm md:text-2xl">Your diamond comes from the Ekati, Diavik, and Gahcho Kué mines in Canada’s pristine North, about 200 kilometres south of the Arctic circle. With preferential hiring practices and training programs for northern residents, indigenous-led wildlife monitoring programs, and industry-leading water recycling and composting systems, these mines are at the forefront of community engagement, environmental stewardship and waste management practices.</p>
      </div>
      <div class="bg-origin media h-full w-auto md:-ml-12"></div>
    </div>
    <div class="max-w-6xl grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-0 py-0 md:p-6 mt-6 md:my-8 mx-auto h-700px p-6 two-section">
      <div class="h-full w-auto bg-black order-1 md:order-0 media">
        <video class="h-auto md:h-full w-full md:w-auto" src="/videos/preview.mp4" autoplay loop playsinline muted></video>
      </div>
      <div class="bg-cm-blue text-white flex flex-col justify-center items-center h-auto py-10 md:py-0 h-4/5 w-4/5 md:w-auto m-auto px-12 z-10 order-0 md:order-1 md:-ml-12 z-10">
        <h1 class="font-sanomat text-2xl md:text-6xl text-center">Define Your</h1>
        <h1 class="font-sanomat text-2xl md:text-6xl text-center">Own Milestones</h1>
        <p class="text-center text24 font-ddin leading-tight text-sm md:text-2xl">True luxury is feeling good about your choices.</p>
      </div>
    </div>    
    <div class="max-w-6xl grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-0 py-0 md:p-6 mt-6 md:my-8 mx-auto h-700px two-section p-6">
      <div class="bg-cm-blue text-white flex flex-col justify-center items-center h-auto py-10 md:py-0 md:h-4/5 w-4/5 md:w-auto m-auto px-12 z-10">
        <h1 class="font-sanomat text-2xl md:text-6xl">Bridal</h1>
        <p class="text-center text24 font-ddin leading-tight text-sm md:text-2xl">We ensure that our diamonds meet specific standards for color, clarity, finish, and symmetry. All you have to do is pick the right one for you.</p>
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
export default {}
</script>