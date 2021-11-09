<template>
  <div>
    <div class="top-section text-white flex flex-col items-center justify-between">
      <h1 class="mt-12 font-sanomat">About Diamonds</h1>
      <p class="mb-12 max-w-6xl text-center font-ddin leading-tight">Candamark mindfully sources diamonds so that you can feel empowered to define and celebrate your own life milestones.</p>
    </div>
    <div class="flex flex-col items-center justify-between p-6 text-center my-8">
      <h1 class="max-w-6xl text-cm-blue mb-4 font-sanomat">We cut diamonds, not corners.</h1>
      <p class="max-w-6xl mb-8 font-ddin leading-tight">We believe that beauty is in the smallest, most precise details. Our team of passionate professionals take pride in the process of responsibly mining your diamond, bringing out its brilliance, and ensuring that it’s authentically Canadian.</p>
      <p class="max-w-6xl mb-8 font-ddin leading-tight">We know that responsible mining means improving lives, strengthening communities, protecting wildlife, and respecting the environment in which we operate.</p>
      <p class="max-w-6xl mb-8 font-ddin leading-tight ">By building things the right way from the ground up, we aspire to present a product that our empowered customers can be proud to own for years and decades to come.</p>
    </div>
    <div class="max-w-6xl h-700px grid grid-cols-2 gap-0 p-6 my-8 mx-auto">
      <div class="bg-cm-blue text-white flex flex-col justify-center items-center h-4/5 my-auto -mr-12 z-10 px-10">
        <h1 class="font-sanomat">The 4C’s</h1>
        <p class="text-center text24 font-ddin leading-tight">Diamonds are evaluated for carat weight, color grade, clarity grade and cut grade. This ranking standard is known as the 4Cs of Diamond Quality.</p>
      </div>
      <div class="bg-4c h-full w-auto"></div>
    </div>
    <div class="flex flex-col items-center justify-between p-6 text-center text-cm-black my-8">
      <h1 class="max-w-6xl font-sanomat">Cut</h1>
      <div class="flex max-auto">
        <cut-ideal/>
        <cut-shallow/>
        <cut-deep/>
      </div>
      <p class="max-w-6xl text24 mb-8 font-ddin leading-tight">A rough diamond can be classified into several main shapes. Stones (octahedron, dodecahedron), cleavage (broken stones), macles and cubes. Each of these main categories has a multitude of sub-categories and variations.</p>
    </div>
    <div class="flex flex-col items-center justify-between p-6 text-center text-cm-black my-8">
      <h1 class="max-w-6xl mb-8 font-sanomat">Color</h1>
        <div class="flex max-auto">
          <div class="mx-4">
            <h3 class="font-sanomat text-sm">Colorless</h3>
            <h4 class="font-ddin tracking-widest text-lg font-black">D E F</h4>
          </div>
          <div class="mx-4">
            <h3 class="font-sanomat text-sm">Near Colorless</h3>
            <h4 class="font-ddin tracking-widest text-lg font-black">G H I</h4>
          </div>
          <div class="mx-4">
            <h3 class="font-sanomat text-sm">Faint Yellow</h3>
            <h4 class="font-ddin tracking-widest text-lg font-black">J K</h4>
          </div>
          <div class="mx-4">
            <h3 class="font-sanomat text-sm">Very Light Yellow</h3>
            <h4 class="font-ddin tracking-widest text-lg font-black">L M</h4>
          </div>
          <div class="mx-4">
            <h3 class="font-sanomat text-sm">Light Yellow</h3>
            <h4 class="font-ddin tracking-widest text-lg font-black">N O P Q R S T U V W X Y Z</h4>
          </div>
        </div>
      <p class="max-w-6xl text24 my-8 font-ddin leading-tight">Generally, the closer a diamond is to being absolutely colourless (white), the more valuable it will be. As the diamonds become more visibly yellow or brown, their value decreases. However, diamonds saturated with colour can be more valuable and are known as “fancies.” Diamonds can be almost any colour of the spectrum, red, orange, yellow, green, blue, pink. Impurities and different degrees of heat in which diamonds are formed cause various colours in diamonds.</p>
    </div>
    <div class="flex flex-col items-center justify-between p-6 text-center text-cm-black my-8">
      <h1 class="max-w-6xl font-sanomat">Clarity</h1>
      <div class="flex mx-auto">
        <clarity name="Flawless,<br/>Internally Flawless" shortname="FL, IF"/>
        <clarity name="Very Very<br/>Slightly Included" shortname="VVS1, VVS2"/>
        <clarity name="Very Slightly<br/>Included" shortname="VS1, VS2"/>
        <clarity name="Slightly<br/>Included" shortname="SI1, SI2"/>
        <clarity name="Included" shortname="I1, I3"/>
      </div>
      <p class="max-w-6xl text24 mb-8 font-ddin leading-tight">Quality is determined by how clean the diamond is inside. Very few diamonds can be described as “flawless”; most have inclusions which may be caused by carbon spots (piques), mineral inclusions (e.g. olivine, garnet, chromite), bubbles or cracks (gletz). The positioning of the inclusions within the diamond influences its value, as some inclusions may be polished out during the manufacturing process. Some diamonds may be so heavily included that it is almost impossible to see into them.</p>
    </div>
    <div class="flex flex-col items-center justify-between p-6 text-center text-cm-black my-8">
      <h1 class="max-w-6xl font-sanomat">Carat</h1>
      <div class="flex mx-auto">
        <carat name=".5" />
        <carat name=".75" />
        <carat name="1" />
        <carat name="1.5" />
        <carat name="2" />
        <carat name="2.5" />
        <carat name="3" />
      </div>
      <p class="max-w-6xl text24 mb-8 font-ddin leading-tight">Originally the carat was the weight of a carob seed which ancient lapidaries used to balance their scales, as the seeds in a carob pod are very uniform in weight. This weight was standardized to the metric system as 1 carat = 200 milligrams (one-fifth of a gram). A carat is further divided into points, with 100 points to a carat. In general terms, rough and polished diamonds are weighed to two decimal places.</p>
    </div>
  </div>
</template>
<style scoped>
  .top-section {
    background-image: url('/images/diamonds_kimberlite.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
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
  .bg-4c {
    background-image: url('/images/bhb-086.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
</style>
<script>
export default {}
</script>
