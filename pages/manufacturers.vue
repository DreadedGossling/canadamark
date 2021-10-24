<template>
  <div>
    <div class="top-section text-cm-black flex flex-col items-center justify-between">
      <h1 class="m-12 font-sanomat">Manufacturers</h1>
      <p class="mb-12 max-w-6xl text-center font-ddin leading-tight">We partner with professionals who are as passionate about helping you find the perfect diamond as we are.</p>
    </div>
    <div class="py-16 max-w-6xl mx-auto">
      <h1 class="font-sanomat text-cm-blue text-center">Canadamark Manufacturers</h1>
      <div class="font-ddin leading-tight text-center flex my-10 text-xl">
        <a class="p-4 ml-auto cursor-pointer" :class="jewelleryTabClass" target="_blank" @click.prevent="activate('jewellery')">Jewellery Manufacturers</a>
        <a class="p-4 cursor-pointer" :class="diamondTabClass" target="_blank" @click="activate('diamond')">Diamond Manufacturers</a>
        <div class="p-4 cursor-pointer" :class="polishersTabClass" target="_blank" @click="activate('polishers')">Certified Polishers</div>
        <div class="p-4 cursor-pointer" :class="stockistsTabClass" target="_blank" @click="activate('stockists')">Stockists</div>
        <div class="p-4 mr-auto cursor-pointer" :class="retailersTabClass" target="_blank" @click="activate('retailers')">Retailers</div>
      </div>
      <div class="grid grid-cols-2 font-ddin leading-tight gap-y-4">
        <div v-for="item in activeTabData" :key="item.name">
          <a class="text-2xl font-black" :href="item.url">{{ item.name }}</a>
          <div class="text-lg" v-for="email in item.emails" :key="email">{{ email }}</div>
          <div class="text-lg">{{ item.phone }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .top-section {
    background-image: url('/images/jewelry-manufacturers.png');
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
export default {
  data(){
    const jewellery = [{name: 'Mahendra Brothers Exports Pvt. Ltd / UNIDESIGN', emails: ['rishi@mahendrabrothers.com'], url: 'https://mahendrabrothers.com', phone: '+91 22 6661 5600'}]
    const diamond = [{name: 'CJ Exporters', emails: ['mitul@cjexporters.com'], url: 'https://cjexporters.com', phone: '+91 22 4910 4000'}]
    const polishers = [
      {name: 'Finestar Jewellery and Diamonds Pvt. Ltd.', emails: ['nilesh@finestardiamonds.com', 'elza@finestardiamonds.com'], url: 'http://www.finestardiamonds.com', phone: '+91 22 6663 9999'},
      {name: 'Hari Krishna Exports Pvt. Ltd.', emails: ['bhavik.bhalala@hk.co', 'gd@hk.co'], url: 'http://www.hk.co', phone: '+91 22 2367 8111'},
      {name: 'Singh Diamonds', emails: ['karan@singhdiamonds.com', 'info@singhdiamonds.com'], url: 'http://www.singhdiamonds.com/', phone: '+91 22 26754675'},
      {name: 'Shree Ramkrishna Exports Pvt. Ltd.', emails: ['chirag.rc@srk.me'], url: 'https://srk.one/', phone: '+91 261 4040 555'}]
    const stockists = [{name: 'Corona Jewellery Company Ltd.', emails: ['mike@coronajewellery.com'], url: 'http://www.coronajewellery.com', phone: '+1 416 7622222'}]
    const retailers = []

    return {
      activeTab: 'jewellery',
      tabContent: {
        jewellery,
        diamond,
        polishers,
        stockists,
        retailers
      }
    }
  },
  methods: {
    calculateTabClass(tabName){
      if (this.activeTab === tabName){
        return 'bg-cm-blue text-white'
      }else{
        return 'bg-transparent text-cm-black'
      }
    },
    activate(name){
      console.log(name)
      this.activeTab = name
    }
  },
  computed: {
    jewelleryTabClass(){
      return this.calculateTabClass('jewellery')
    },
    diamondTabClass(){
      return this.calculateTabClass('diamond')
    },
    polishersTabClass(){
      return this.calculateTabClass('polishers')
    },
    stockistsTabClass(){
      return this.calculateTabClass('stockists')
    },
    retailersTabClass(){
      return this.calculateTabClass('retailers')
    },
    activeTabData(){
      return this.tabContent[this.activeTab]
    }
  }
}
</script>
