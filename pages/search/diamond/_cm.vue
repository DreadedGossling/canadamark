<template>
  <div>
    <div class=" text-cm-black flex flex-col items-center justify-between p-6 text-center my-8 font-ddin leading-tight">
      <h1 class="max-w-6xl font-sanomat text-3xl md:text-6xl">Summary</h1>
      <p class="max-w-6xl my-4 text-xl sm:text-2xl md:text-4xl">Your Diamond’s Birth Certificate</p>
    </div>
    <div class="hidden md:flex flex-col px-24 mb-24">
      <div class="flex items-center">
        <step name="Sourcing" imageUrl="/images/sourcing.png" thumbUrl="/images/thumb/sourcing.png" />
        <div class="h-px flex-grow border-2 border-cm-pantone"></div>

        <step name="Sorting" imageUrl="/images//sorting.png" thumbUrl="/images/thumb/sorting.png" />
        <div class="h-px flex-grow border-2 border-cm-pantone"></div>

        <step name="Cutting & Polishing" imageUrl="/images/cutting.png" thumbUrl="/images/thumb/cutting.png" />
        <div class="h-px flex-grow border-2 border-cm-pantone"></div>

        <step name="Selection & Grading" imageUrl="/images/selection.png" thumbUrl="/images/thumb/selection.png" />
        <div class="h-px flex-grow border-2 border-cm-pantone"></div>

        <step name="Inscription" imageUrl="/images/inscription.png" thumbUrl="/images/thumb/inscription.png" />        
        <div class="h-px flex-grow border-2 border-cm-pantone"></div>

        <step name="Jewelry & Design" imageUrl="/images/jewellery02.png" thumbUrl="/images/thumb/jewellery.png" />    
      </div>
    </div>
    <div class="max-w-3xl certificate text-white rounded box-shadow my-8 mx-4 sm:mx-10 md:mx-auto ">
      <div class="p-3 pt-4 md:p-10 md:pb-4">
        <div class="topline mx-auto mb-4 md:mb-10"></div>
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
        <div class="certificate-bottom flex items-end mt-4 md:mt-20">
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
          <h6 class="text-center mx-4 assurance">Canadamark is our assurance that your diamond is of geniune canadian origin and is natural and untreated. For more information, visit wwww.canadamark.com.</h6>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center justify-between p-6 text-center my-8">
      <h1 class="text-cm-black mb-12 text-2xl md:text-6xl">Our Journey</h1>
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

  @media only screen and (min-width: 768px) {
    .text22 p{
      font-size: 24px;
      line-height: 1.125;
    }
    .assurance {
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 767px) {
    .text22 p{
      font-size: 12px;
      line-height: 1.125;
    }
    .assurance {
      font-size: 8px;
    }
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
      axios.get("https://portal.canadamark.com/api/v1/diamond/"+query.toUpperCase()).then(res => {
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
    },
  },
  mounted() {
    this.searchDiamond(this.query)
  },
}
</script>
