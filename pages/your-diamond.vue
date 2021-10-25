<template>
  <div>
    <div class="top-section text-white flex flex-col items-center justify-between">
      <h1 class="m-12 font-sanomat">Your Diamond</h1>
      <p class="mb-12 max-w-6xl text-center font-ddin leading-tight">Before you hold your Canadamark diamond, a team of passionate professionals responsibly mine it, bring out its beauty, and ensure that it’s authentically Canadian. We want you to focus on your diamond’s artistry and be proud to wear it without second guessing its history.</p>
    </div>
    <div class="max-w-6xl h-700px grid grid-cols-2 gap-0 p-6 my-16 mx-auto">
      <div class="bg-cm-blue text-white flex flex-col justify-center items-center h-4/5 my-auto -mr-12 z-10 px-10">
        <h1 class="font-sanomat">Origin</h1>
        <p class="text-center text24 mt-8 mb-4 font-bold font-ddin leading-tight">THE NORTHWEST TERRITORIES</p>
        <p class="text-center text24 font-ddin leading-tight">Your diamond comes from the Ekati, Diavik, and Gahcho Kué mines in Canada’s pristine North, about 200 kilometres south of the Arctic circle. With preferential hiring practices and training programs for northern residents, indigenous-led wildlife monitoring programs, and industry-leading water recycling and composting systems, these mines are at the forefront of community engagement, environmental stewardship and waste management practices.</p>
      </div>
      <div class="bg-origin h-full w-auto"></div>
    </div>
    <div class="max-w-6xl grid grid-cols-2 gap-0 p-6 my-16 mt-20 mx-auto">
      <div class="h-700px flex items-center bg-black">
        <video src="/videos/preview.mp4" autoplay loop playsinline muted></video>
      </div>
      <div class="bg-cm-blue text-white flex flex-col justify-center items-center h-4/5 my-auto -ml-12 px-10 z-10">
        <h1 class="font-sanomat">Define Your</h1>
        <h1 class="font-sanomat">Own Milestones</h1>
        <p class="text-center text24 font-ddin leading-tight">True luxury is feeling good about your choices.</p>
      </div>
    </div>    
    <div class="max-w-6xl h-700px grid grid-cols-2 gap-0 p-6 my-16 mx-auto">
      <div class="bg-cm-blue text-white flex flex-col justify-center items-center h-4/5 my-auto -mr-12 z-10 px-10">
        <h1 class="font-sanomat">Bridal</h1>
        <p class="text-center text24 font-ddin leading-tight">We ensure that our diamonds meet specific standards for color, clarity, finish, and symmetry. All you have to do is pick the right one for you.</p>
      </div>
      <div class="bg-bridal h-full w-auto"></div>
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
  h1 {
    font-size: 64px;
  }

  p {
    font-size: 36px;
  }

  .text24 {
    font-size: 24px;
    line-height: 1.125;
  }

  .text20 {
    font-size: 20px;
    line-height: 1.125;
  }
  .h-700px {
    height: 748px;
  }
  .bg-bridal {
    background-image: url('/images/bridal-jewellery.png');
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
