<template>
  <div>
    <div class=" text-cm-black flex flex-col items-center justify-between p-6 text-center my-4 font-ddin leading-tight">
      <h1 class="max-w-6xl font-sanomat">Summary</h1>
      <p class="max-w-6xl my-4">Your Jewellery Certificate</p>
    </div>
    <div class="flex justify-center items-center">
      <div class="max-w-3xl rounded box-shadow my-8">
        <div class="w-full p-4 text-cm-dark-blue text-center">
          <h3 class="text-2xl">True luxury is feeling good about your choices.</h3>
        </div>
        <div class="bg-cm-dark-blue text-white p-10">
          <div class="grid grid-cols-2 gap-1 justify-evenly">
            <div class="flex flex-col justify-center">
              <div>
                <p class="text22">MINE OF ORIGIN</p>
                <p>{{mine}}</p>
              </div>
              <div class="my-6">
                <p class="text22">NUMBER OF POLISHED STONES</p>
                <p>{{diamondCount}}</p>
              </div>
              <div>
                <p class="text22">TOTAL WEIGHT</p>
                <p>{{weight}}</p>
              </div>
            </div>
            <div class="flex flex-col justify-between items-center ml-auto">
              <svg width="190" height="189" viewBox="0 0 190 189" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.48926 79.3063L101.249 66.45M101.249 66.45L186.275 76.3844M101.249 66.45L39.0127 19.7M101.249 66.45L157.641 26.1281M185.399 118.751L94.8206 129.855M94.8206 129.855L2.48926 117.875M94.8206 129.855L104.755 186.831M94.8206 129.855L87.5158 186.831M188.028 94.5C188.028 146.139 146.167 188 94.5283 188C42.8897 188 1.02832 146.139 1.02832 94.5C1.02832 42.8614 42.8897 1 94.5283 1C146.167 1 188.028 42.8614 188.028 94.5Z" stroke="white" stroke-width="2"/>
              <text x="95" y="105" text-anchor="middle" fill="white" font-size="24">{{cmjNumber}}</text>
              </svg>
              <svg class="mt-8" width="221" height="144" viewBox="0 0 221 144" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M73.4818 9.72178L36.4209 5.36774L73.4818 1H147.574L184.621 5.36774L147.574 9.72178H73.4818Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M220.057 32.3423L165.286 38.784H55.7571L1 32.3423" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M184.621 5.36768L220.057 32.3434L110.529 142.979L1 32.3434L36.4216 5.36768" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M147.576 9.72119L165.287 38.7846L110.529 142.979L55.7578 38.7846L73.4832 9.72119" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M125.576 9.72162L165.286 38.785L169.969 7.08447L192.672 35.571L110.529 142.979L28.3857 35.571L48.9654 7.08447L55.757 38.785L91.4127 9.72162L83.1282 38.785L110.529 142.979" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M108.493 9.72119L110.528 142.979L136.787 38.7846L125.575 9.72119L108.493 38.7846L91.4121 9.72119" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M220.057 32.3433L169.969 7.08447" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 32.3433L48.9655 7.08447" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        <div class="w-full p-4 text-cm-dark-blue text-center">
          <svg class="mx-auto" width="17" height="27" viewBox="0 0 17 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.2975 9.80947L9.49316 13.7212L13.2989 17.6315L17.1032 13.7198L13.2975 9.80947Z" fill="#191F1E"/>
            <path d="M13.2468 22.0257L5.06105 13.6134L13.2468 5.20115V0L0 13.6134L13.2468 27.2269V22.0257Z" fill="#191F1E"/>
          </svg>
        </div>
      </div>
      <img class="h-full" :src="image_url" alt="">
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

  .text22 {
    font-size: 22px;
    line-height: 1.125;
  }
  .box-shadow {
    box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.1);
  }
</style>
<script>
import axios from 'axios';
export default {
  watch: {
    $route() {
      this.query = this.$route.params.cmj
      this.searchJewelry(this.query)
    }
  },
  data(){
    return {
      query: this.$route.params.cmj,
      mine: '',
      cmjNumber: ' ',
      diamondCount: ' ',
      weight: ' ',
      image_url: ' ',
    }
  },
  methods: {
    searchJewelry(query){
      axios.get("https://portal.canadamark.com/api/v1/jewellery/"+query).then(res => {
        console.log(res)
        this.mine = res.data.mine
        this.cmjNumber = res.data.cmj_number
        this.diamondCount = res.data.diamond_count || 'N/A'
        this.weight = res.data.total_weight || 'N/A'
        this.image_url = res.data.image_url
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.searchJewelry(this.query)
  },
}
</script>
