<template>
  <div>
    <video src="/videos/our-journey.mkv" class="bg-video" autoplay loop playsinline muted></video>
    <div class="video-section text-white flex flex-col items-center justify-between">
      <h1 class="mt-12 font-sanomat">Our Promise</h1>
      <p class="mb-12 max-w-6xl text-center font-ddin leading-tight">We promise that all Canadamark diamonds are responsibly mined in Canada’s Northwest Territories with respect for the sustainability of the natural environment and people living in the community.</p>
    </div>
    <div class="flex flex-col items-center justify-between p-6 text-center my-8">
      <p class="max-w-6xl font-ddin leading-tight text-cm-black">All mines that are part of the Canadamark program meet Canada’s stringent environmental regulations, and many go above and beyond.</p>
      <h1 class="max-w-6xl text-cm-blue  my-16 font-sanomat leading-tight">We pride ourselves on our transparency throughout the mining process,</h1>
      <p class="max-w-6xl font-ddin leading-tight text-cm-black">and that’s why all Canadamark diamonds are tracked through independent, audited process at every stage from the mine of origin to the polished stone.</p>
    </div>
    <div class="flex flex-col items-center justify-between p-6 text-center my-8">
      <h1 class="max-w-6xl text-cm-blue mb-12 font-sanomat">Our Diamonds</h1>
            <div class="h-700px flex items-center bg-black">
        <video src="/videos/preview.mp4" autoplay loop playsinline muted></video>
      </div>
    </div>
    <div class="max-w-6xl grid grid-cols-2 gap-0 p-6 my-8 mx-auto">
      <div><img class="h-full w-auto" src="/images/engagement.png" alt=""></div>
      <div class="bg-cm-blue text-white flex flex-col justify-center items-center h-4/5 my-auto -ml-12 px-12">
        <h1 class="font-sanomat leading-none mb-8">Ethics</h1>
        <p class="text-center text24 font-ddin leading-tight">Responsible mining means improving lives, strengthening communities, protecting wildlife, and respecting the environment in which we operate.</p>
      </div>
    </div>    
    <div class="max-w-6xl grid grid-cols-2 gap-0 p-6 my-8 mx-auto">
      <div class="bg-cm-blue text-white flex flex-col justify-center items-center h-4/5 my-auto -mr-12 z-10 px-12">
        <h1 class="font-sanomat leading-none mb-8">Authenticity</h1>
        <p class="text-center text20 mb-4 font-ddin leading-tight">Each Canadamark certified diamond comes with an assurance that your diamond is authentically Canadian.</p>
        <p class="text-center text20 mb-4 font-ddin leading-tight">When a Canadamark diamond is cut and polished, a unique serial number is assigned to the stone which is then laser engraved on its girdle together with the Canadamark logo. This inscription is so small that it’s invisible to the naked eye and can only be seen using a microscope or diamond loupe.</p>
        <p class="text-center text20 mb-4 font-ddin leading-tight">The same number can be found on the certificate card that came with your stone.</p>
        <p class="text-center text20 mb-4 font-ddin leading-tight">You can enter this number below to verify if your diamond is an authentic Canadamark diamond and to follow your diamond’s unique journey from rough to polished.</p>
        <p class="text-center text20 mb-4 font-ddin leading-tight">A Canadamark diamond will always have a unique laser inscription and be accompanied by a Canadamark certificate card.</p>
      </div>
      <div><img class="h-full w-auto" src="/images/authenticity.png" alt=""></div>
    </div>
    <div class="flex flex-col items-center justify-between p-6 text-center my-8 max-w-6xl mx-auto">
      <h1 class="text-cm-blue mb-12 font-sanomat">Our Journey</h1>
      <video src="/videos/canadamark.mp4" autoplay loop playsinline muted></video>
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
  .max-h-300 {
    max-height: 300px;
  }

</style>
<script>
export default {}
</script>
