<template>
  <div>
    <div class="top-section text-cm-black flex flex-col items-center justify-between">
      <h1 class="m-12 font-sanomat text-2xl md:text-6xl">Manufacturers</h1>
      <p class="mb-12 max-w-6xl text-center font-ddin leading-tight text-sm md:text-2xl">We partner with professionals who are as passionate about helping you find the perfect diamond as we are.</p>
    </div>
    <div class="py-16 max-w-6xl mx-auto">
      <h1 class="font-sanomat text-cm-blue text-center text-2xl md:text-6xl">Canadamark Manufacturers</h1>
      <div class="font-ddin leading-tight text-center flex my-10 text-xs sm:text-base md:text-xl px-5">
        <a class="p-1 sm:p-4 ml-auto cursor-pointer" :class="jewelleryTabClass" target="_blank" @click.prevent="activate('jewellery')">Jewellery Manufacturers</a>
        <a class="p-1 sm:p-4 cursor-pointer" :class="diamondTabClass" target="_blank" @click="activate('melee')">Melee Manufacturers</a>
        <div class="p-1 sm:p-4 cursor-pointer" :class="polishersTabClass" target="_blank" @click="activate('polishers')">Certified Polishers</div>
        <div class="p-1 sm:p-4 mr-auto cursor-pointer" :class="wholesalersTabClass" target="_blank" @click="activate('wholesalers')">Polished Wholesalers</div>
      </div>
      <div class="grid grid-col-1 md:grid-cols-2 font-ddin leading-tight gap-y-4 px-6">
        <div v-for="item in activeTabData" :key="item.name">
          <a class="text-base md:text-2xl font-black" :href="item.url">{{ item.name }}</a>
          <div class="text-sm md:text-lg" v-for="email in item.emails" :key="email">{{ email }}</div>
          <div class="text-sm md:text-lg" v-for="phone in item.phones" :key="phone">{{ phone }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .top-section {
    background-image: url('/images/jewelry-manufacturers.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 550px;
    position: relative;
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
    const jewellery = [
      {name: 'Mahendra Brothers Exports Pvt. Ltd / Unidesign', emails: ['rishi@mahendrabrothers.com'], url: 'https://mahendrabrothers.com', phones: ['+91 22 6661 5600']},
      {name: 'Corona Jewellery Company Ltd.', emails: ['mike@coronajewellery.com'], url: 'http://www.coronajewellery.com/', phones: ['+1 416 7622222']}]
    const melee = [
      {name: 'Mahendra Brothers Exports Pvt. Ltd', emails: ['rishi@mahendrabrothers.com'], url: 'https://mahendrabrothers.com', phones: ['+91 22 6661 5600']},
      {name: 'C.J.Exporters India', emails: ['mitul@cjexporters.com', 'samirntr@yahoo.com'], url: null, phones: ['+91 9820023514', '+1 917 208-7701']}]
    const polishers = [
      {name: 'Corona Jewellery Company Ltd.', emails: ['mike@coronajewellery.com'], url: 'http://www.coronajewellery.com/', phones: ['+1 416 7622222']},
      {name: 'Finestar Jewellery and Diamonds Pvt. Ltd.', emails: ['nilesh@finestardiamonds.com', 'elza@finestardiamonds.com'], url: 'http://www.finestardiamonds.com', phones: ['+91 22 6663 9999']},
      {name: 'Hari Krishna Exports Pvt. Ltd.', emails: ['bhavik.bhalala@hk.co', 'gd@hk.co'], url: 'http://www.hk.co', phones: ['+91 22 2367 8111']},
      {name: 'Kapu Gems Llp', emails: ['kalpesh@kapugems.com'], url: 'http://www.kapugems.com/', phones: ['+91 22 4311 2233']},
      {name: 'Shivani Gems Inc.', emails: ['mayur@shivanigems.com'], url: 'http://www.shivanigems.com/', phones: ['+1-212-593-2750']},
      {name: 'Shree Ramkrishna Exports Pvt. Ltd.', emails: ['chirag.rc@srk.me'], url: 'https://srk.one/', phones: ['+91 261 4040 555']},
      {name: 'Singh Diamonds', emails: ['karan@singhdiamonds.com', 'info@singhdiamonds.com'], url: 'http://www.singhdiamonds.com/', phones: ['+91 22 26754675']},
      {name: 'Star Rays', emails: ['rahul@starrays.com'], url: 'http://starrays.com', phones: ['+91 261 255 4444']},
      {name: 'Venus Jewels', emails: ['ojash@venusjewel.com'], url: 'http://www.venusjewel.com/', phones: ['+91 22 2672 0000']},
      {name: 'C.J.Exporters India', emails: ['mitul@cjexporters.com', 'samirntr@yahoo.com'], url: null, phones: ['+91 9820023514', '+1 917 208-7701']}]
    const wholesalers = [
      {name: 'Vantyghem Diamonds', emails: ['kevin@vantyghemdiamonds.com'], url: 'http://www.vantyghemdiamonds.com/', phones: ['+1 519 591 5727']}]    
    return {
      activeTab: 'jewellery',
      tabContent: {
        jewellery,
        melee,
        polishers,
        wholesalers,
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
      return this.calculateTabClass('melee')
    },
    polishersTabClass(){
      return this.calculateTabClass('polishers')
    },
    wholesalersTabClass(){
      return this.calculateTabClass('wholesalers')
    },
    activeTabData(){
      return this.tabContent[this.activeTab]
    }
  }
}
</script>
