<template>
  <div>
    <div class=" text-cm-black flex flex-col items-center justify-between p-6 text-center my-8 font-ddin leading-tight">
      <h1 class="max-w-6xl font-sanomat">Summary</h1>
      <p class="max-w-6xl my-4">Your Diamond’s Birth Certificate</p>
    </div>
    <div class="flex flex-col">
      <div class="flex mx-auto items-center">
        <img class="border-4 border-cm-pantone rounded-full h-24 w-24" src="/images/thumb/sourcing.png" alt="" />
        <div class="h-px w-28 border-2 border-cm-pantone"></div>
        <img class="border-4 border-cm-pantone rounded-full h-24 w-24" src="/images/thumb/sorting.png" alt="" />
        <div class="h-px w-28 border-2 border-cm-pantone"></div>
        <img class="border-4 border-cm-pantone rounded-full h-24 w-24" src="/images/thumb/cutting.png" alt="" />
        <div class="h-px w-28 border-2 border-cm-pantone"></div>
        <img class="border-4 border-cm-pantone rounded-full h-24 w-24" src="/images/thumb/selection.png" alt="" />
        <div class="h-px w-28 border-2 border-cm-pantone"></div>
        <img class="border-4 border-cm-pantone rounded-full h-24 w-24" src="/images/thumb/inscription.png" alt="" />
        <div class="h-px w-28 border-2 border-cm-pantone"></div>
        <img class="border-4 border-cm-pantone rounded-full h-24 w-24" src="/images/thumb/jewellery.png" alt="" />
      </div>
      <div class="flex mx-auto my-4">
        <span class="w-52 text-center">Sourcing</span>
        <span class="w-52 text-center">Sorting</span>
        <span class="w-52 text-center">Cutting & Polishing</span>
        <span class="w-52 text-center">Selection & Grading</span>
        <span class="w-52 text-center">Inscription</span>
        <span class="w-52 text-center">Jewelry & Design</span>
      </div>
    </div>
    <div class="max-w-3xl certificate text-white rounded box-shadow my-8 mx-auto">
      <div class="p-10 pb-4">
        <div class="topline mx-auto mb-10"></div>
        <div class="grid grid-cols-3 gap-1 justify-evenly">
          <div class="flex flex-col justify-center text22">
            <div>
              <p class="font-bold">GIA</p>
              <p>{{ gia }}</p>
            </div>
            <div class="my-6">
              <p class="font-bold">COLOR</p>
              <p>{{ color }}</p>
            </div>
          </div>
          <div class="flex flex-col justify-center text-center text22">
            <div>
              <p class="font-bold">SERIAL NUMBER</p>
              <p>{{ cmNumber }}</p>
            </div>
            <div class="my-6">
              <p class="font-bold">CUT</p>
              <p>{{ cut }}</p>
            </div>
          </div>
          <div class="flex flex-col justify-center text-right text22">
            <div>
              <p class="font-bold">CARAT</p>
              <p>{{ carat }}</p>
            </div>
            <div class="my-6">
              <p class="font-bold">CLARITY</p>
              <p>{{ clarity }}</p>
            </div>
          </div>
        </div>
        <div class="certificate-bottom flex items-end mt-20">
          <div class="align">
          <svg width="21" height="32" viewBox="0 0 21 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1505:1673)">
          <path d="M16.0866 11.6559L11.4844 16.2605L16.0882 20.8635L20.6903 16.2589L16.0866 11.6559Z" fill="white"/>
          <path d="M16.0247 26.0359L6.1224 16.1336L16.0247 6.23128V0.108887L0 16.1336L16.0247 32.1583V26.0359Z" fill="white"/>
          </g>
          <defs>
          <clipPath id="clip0_1505:1673">
          <rect width="20.565" height="31.7823" fill="white" transform="translate(0 0.108887)"/>
          </clipPath>
          </defs>
          </svg>
          </div>
          <h6 class="text-center mx-4">Canadamark is our assurance that your diamond is of geniune canadian origin and is natural and untreated. For more information, visit wwww.canadamark.com.</h6>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center justify-between p-6 text-center my-8">
      <h1 class="text-cm-black mb-12">Our Journey</h1>
      <video src="/videos/canadamark.mp4" autoplay loop playsinline muted></video>
    </div>
  </div>
</template>
<style scoped>
  .top-section {
    background-image: url('/images/diamonds_kimberlite.png');
    background-repeat: no-repeat;
    background-size: cover;
    height: 550px;
    position: relative;
  }
  h1 {
    font-size: 64px;
  }
  p {
    font-size: 36px;
  }
  .text22 p{
    font-size: 24px;
    line-height: 1.125;
  }
  .box-shadow {
    box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.1);
  }

  .certificate {
    background: #3B455B;
    border-radius: 1rem;
  }

  .certificate .topline {
    background: #636C7B;
    height: 4px;
    width: 90%;
  }

  .certificate-bottom {
    font-size: 12px;
  }
</style>
<script>
import axios from 'axios';
export default {
  watch: {
    $route() {
      this.query = this.$route.params.cm
      this.searchDiamond(this.query)
    }
  },
  data(){
    return {
      query: this.$route.params.cm,
      cmNumber: ' ',
      gia: ' ',
      carat: ' ',
      color: ' ',
      cut: ' ',
      clarity: ' ',
    }
  },
  methods: {
    searchDiamond(query){
      axios.get("https://portal.canadamark.com/api/v1/diamond/"+query).then(res => {
        console.log(res)
        this.cmNumber = res.data.cm_number
        this.gia = res.data.cert_number || 'N/A'
        this.carat = res.data.polished_weight || 'N/A'
        this.color = res.data.colour || 'N/A'
        this.cut = res.data.shape || 'N/A'
        this.clarity = res.data.clarity || 'N/A'
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.searchDiamond(this.query)
  },
}
</script>
