<template>
  <div>
    <video src="/videos/journey.mp4" class="bg-video" autoplay loop playsinline muted></video>
    <div class="video-section text-white flex flex-col items-center justify-between">
      <h1 class="mt-12">Our Promise</h1>
      <p class="mb-12 max-w-6xl text-center">We promise that all Canadamark diamonds are responsibly mined in Canada’s Northwest Territories with respect for the sustainability of the natural environment and people living in the community.</p>
    </div>
    <div class="flex flex-col items-center justify-between p-6 text-center my-8">
      <p class="max-w-6xl">All mines that are part of the Canadamark program meet Canada’s stringent environmental regulations, and many go above and beyond.</p>
      <h1 class="max-w-6xl text-cmBlue  my-16">We pride ourselves on our transparency throughout the mining process,</h1>
      <p class="max-w-6xl">and that’s why all Canadamark diamonds are tracked through independent, audited process at every stage from the mine of origin to the polished stone.</p>
    </div>
    <div class="flex flex-col items-center justify-between p-6 text-center my-8">
      <h1 class="max-w-6xl text-cmBlue mb-12">Our Diamonds</h1>
      <ul class="overflow-hidden w-2/4">
        <li class="w-full flex justify-center inline-block"><img class="w-40" src="/images/OVAL.png" alt=""></li>
      </ul>
      <div class="divide-y divide-solid divide-black"></div>
    </div>
    <div class="max-w-6xl grid grid-cols-2 gap-0 p-6 my-8 mx-auto">
      <div><img class="h-full w-auto" src="/images/engagement.png" alt=""></div>
      <div class="bg-cmBlue text-white flex flex-col justify-center items-center h-4/5 my-auto -ml-12 px-10">
        <h1>Ethics</h1>
        <p class="text-center text24">Responsible mining means improving lives, strengthening communities, protecting wildlife, and respecting the environment in which we operate.</p>
      </div>
    </div>    
    <div class="max-w-6xl grid grid-cols-2 gap-0 p-6 my-8 mx-auto">
      <div class="bg-cmBlue text-white flex flex-col justify-center items-center h-4/5 my-auto -mr-12 z-10 px-10">
        <h1>Authenticity</h1>
        <p class="text-center text20 mb-4">Each Canadamark certified diamond comes with an assurance that your diamond is authentically Canadian.</p>
        <p class="text-center text20 mb-4">When a Canadamark diamond is cut and polished, a unique serial number is assigned to the stone which is then laser engraved on its girdle together with the Canadamark logo. This inscription is so small that it’s invisible to the naked eye and can only be seen using a microscope or diamond loupe.</p>
        <p class="text-center text20 mb-4">The same number can be found on the certificate card that came with your stone.</p>
        <p class="text-center text20 mb-4">You can enter this number below to verify if your diamond is an authentic Canadamark diamond and to follow your diamond’s unique journey from rough to polished.</p>
        <p class="text-center text20 mb-4">A Canadamark diamond will always have a unique laser inscription and be accompanied by a Canadamark certificate card.</p>
      </div>
      <div><img class="h-full w-auto" src="/images/authenticity.png" alt=""></div>
    </div>
    <div class="flex flex-col items-center justify-between p-6 text-center my-8">
      <h1 class="max-w-6xl text-cmBlue mb-12">Our Journey</h1>
      <video src="/videos/our-journey.mkv" autoplay loop playsinline muted></video>
    </div>
  </div>
</template>
<style scoped>
  .bg-video {
    object-fit: cover;
    width: 100vw;
    height: 550px;
    position: absolute;
    overflow: hidden;
  }
  .video-section {
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

</style>
<script>
export default {}
</script>
