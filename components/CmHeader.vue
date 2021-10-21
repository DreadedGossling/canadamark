<template>
  <!-- Main container for Navbar -->
      
  <nav id="navigation" class="bg-cmBlack sticky top-0 z-40 font-body transition-all duration-500">
    <!-- Container to give Navbar a fixed width -->
    <div class="flex mx-2 items-center justify-between flex-wrap p-4">
        
      <!-- Logo Icon -->
      <NuxtLink to="/" class="flex items-center flex-no-shrink">
        <svg width="127" height="45" viewBox="0 0 127 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1286:658)">
            <path d="M22.1143 16.6768L15.7876 23.0068L22.1165 29.3346L28.4432 23.0046L22.1143 16.6768Z" fill="white"/>
            <path d="M22.0295 36.4451L8.41657 22.8322L22.0295 9.2193V0.802734L0 22.8322L22.0295 44.8616V36.4451Z" fill="white"/>
          </g>
          <path d="M46.2859 12.3344C45.0632 12.3344 44.0884 11.9875 43.3615 11.2935C42.6345 10.5886 42.271 9.48162 42.271 7.97261V5.01515C42.271 3.50613 42.6345 2.40466 43.3615 1.71073C44.0884 1.00579 45.0632 0.65332 46.2859 0.65332C47.0569 0.65332 47.7343 0.796512 48.3181 1.0829C48.9129 1.36928 49.37 1.77682 49.6894 2.30553C50.0088 2.83424 50.1686 3.44555 50.1686 4.13948V4.18905H48.9624V4.13948C48.9624 3.4015 48.7201 2.81771 48.2355 2.38814C47.7618 1.95857 47.112 1.74378 46.2859 1.74378C45.3716 1.74378 44.6722 2.00262 44.1876 2.52032C43.7139 3.03801 43.4771 3.88614 43.4771 5.06472V8.03869C43.4771 10.1645 44.4189 11.2275 46.3024 11.2275C47.1285 11.2275 47.7784 11.0182 48.252 10.5996C48.7256 10.17 48.9624 9.58626 48.9624 8.84828V8.78219H50.1355V8.84828C50.1355 9.91671 49.7885 10.7648 49.0946 11.3927C48.4007 12.0205 47.4644 12.3344 46.2859 12.3344Z" fill="white"/>
          <path d="M59.278 9.45959H54.4371L53.4788 12.2023H52.2066L56.3536 0.802019H57.3615L61.5085 12.2023H60.2363L59.278 9.45959ZM58.9311 8.43523L56.8493 2.48727L54.784 8.43523H58.9311Z" fill="white"/>
          <path d="M72.0851 0.802019V12.2023H70.879L64.9806 3.01598V12.2023H63.7745V0.802019H64.9806L70.879 9.95526V0.802019H72.0851Z" fill="white"/>
          <path d="M82.4128 9.45959H77.5719L76.6136 12.2023H75.3414L79.4884 0.802019H80.4963L84.6433 12.2023H83.3711L82.4128 9.45959ZM82.0659 8.43523L79.9841 2.48727L77.9188 8.43523H82.0659Z" fill="white"/>
          <path d="M87.9006 0.802019H91.7998C93.0115 0.802019 93.9697 1.15449 94.6747 1.85943C95.3906 2.55336 95.7486 3.65483 95.7486 5.16385V7.84043C95.7486 9.34945 95.3906 10.4564 94.6747 11.1614C93.9697 11.8553 93.0115 12.2023 91.7998 12.2023H87.9006V0.802019ZM91.8164 11.1118C93.6228 11.1118 94.526 10.0434 94.526 7.90652V5.21342C94.526 4.05687 94.2892 3.21425 93.8155 2.68554C93.3529 2.15683 92.6865 1.89248 91.8164 1.89248H89.1233V11.1118H91.8164Z" fill="white"/>
          <path d="M105.845 9.45959H101.004L100.046 12.2023H98.7737L102.921 0.802019H103.929L108.076 12.2023H106.803L105.845 9.45959ZM105.498 8.43523L103.416 2.48727L101.351 8.43523H105.498Z" fill="white"/>
          <path d="M52.2999 16.957V28.3572H51.0938V19.4353L47.872 26.0771H46.9467L43.7084 19.4353V28.3572H42.5023V16.957H43.7084L47.4094 24.6397L51.0938 16.957H52.2999Z" fill="white"/>
          <path d="M62.625 25.6145H57.7841L56.8258 28.3572H55.5536L59.7006 16.957H60.7085L64.8555 28.3572H63.5833L62.625 25.6145ZM62.2781 24.5902L60.1963 18.6422L58.131 24.5902H62.2781Z" fill="white"/>
          <path d="M72.0616 23.351H69.3189V28.3572H68.1128V16.957H72.3425C73.4109 16.957 74.248 17.2378 74.8538 17.7996C75.4707 18.3503 75.7791 19.1379 75.7791 20.1622C75.7791 20.9773 75.5643 21.6492 75.1347 22.1779C74.7052 22.7066 74.1048 23.0591 73.3338 23.2353L76.0269 28.3572H74.6391L72.0616 23.351ZM69.3189 22.3101H72.2434C72.9813 22.3101 73.5541 22.1284 73.9617 21.7649C74.3692 21.3904 74.573 20.8617 74.573 20.1788C74.573 19.4738 74.3692 18.9451 73.9617 18.5926C73.5651 18.2292 72.9924 18.0474 72.2434 18.0474H69.3189V22.3101Z" fill="white"/>
          <path d="M83.3567 22.3432L81.027 25.218V28.3572H79.8209V16.957H81.027V23.5988L86.2976 16.957H87.735L84.1332 21.4014L88.2472 28.3572H86.8428L83.3567 22.3432Z" fill="white"/>
          <path d="M46.2859 44.6443C45.0632 44.6443 44.0884 44.2973 43.3615 43.6034C42.6345 42.8985 42.271 41.7915 42.271 40.2825V37.325C42.271 35.816 42.6345 34.7145 43.3615 34.0206C44.0884 33.3157 45.0632 32.9632 46.2859 32.9632C47.0569 32.9632 47.7343 33.1064 48.3181 33.3928C48.9129 33.6791 49.37 34.0867 49.6894 34.6154C50.0088 35.1441 50.1686 35.7554 50.1686 36.4493V36.4989H48.9624V36.4493C48.9624 35.7114 48.7201 35.1276 48.2355 34.698C47.7618 34.2684 47.112 34.0536 46.2859 34.0536C45.3716 34.0536 44.6722 34.3125 44.1876 34.8302C43.7139 35.3479 43.4771 36.196 43.4771 37.3746V40.3486C43.4771 42.4744 44.4189 43.5373 46.3024 43.5373C47.1285 43.5373 47.7784 43.328 48.252 42.9095C48.7256 42.4799 48.9624 41.8961 48.9624 41.1581V41.0921H50.1355V41.1581C50.1355 42.2266 49.7885 43.0747 49.0946 43.7025C48.4007 44.3304 47.4644 44.6443 46.2859 44.6443Z" fill="white"/>
          <path d="M54.784 34.2023V38.1676H59.6746V39.2581H54.784V43.4217H60.5007V44.5121H53.5779V33.1119H60.5007V34.2023H54.784Z" fill="white"/>
          <path d="M68.2144 39.5059H65.4718V44.5121H64.2656V33.1119H68.4953C69.5637 33.1119 70.4008 33.3928 71.0067 33.9545C71.6235 34.5052 71.9319 35.2928 71.9319 36.3172C71.9319 37.1323 71.7171 37.8042 71.2875 38.3329C70.858 38.8616 70.2577 39.214 69.4866 39.3903L72.1797 44.5121H70.7919L68.2144 39.5059ZM65.4718 38.465H68.3962C69.1342 38.465 69.7069 38.2833 70.1145 37.9198C70.522 37.5453 70.7258 37.0166 70.7258 36.3337C70.7258 35.6287 70.522 35.1 70.1145 34.7476C69.7179 34.3841 69.1452 34.2023 68.3962 34.2023H65.4718V38.465Z" fill="white"/>
          <path d="M82.3182 34.2023H79.0634V44.5121H77.8738V34.2023H74.6189V33.1119H82.3182V34.2023Z" fill="white"/>
          <path d="M85.5635 33.1119H86.7696V44.5121H85.5635V33.1119Z" fill="white"/>
          <path d="M92.404 34.2023V38.2007H97.2946V39.2911H92.404V44.5121H91.1979V33.1119H98.1207V34.2023H92.404Z" fill="white"/>
          <path d="M101.889 33.1119H103.095V44.5121H101.889V33.1119Z" fill="white"/>
          <path d="M108.729 34.2023V38.1676H113.62V39.2581H108.729V43.4217H114.446V44.5121H107.523V33.1119H114.446V34.2023H108.729Z" fill="white"/>
          <path d="M118.211 33.1119H122.11C123.322 33.1119 124.28 33.4644 124.985 34.1693C125.701 34.8632 126.059 35.9647 126.059 37.4737V40.1503C126.059 41.6593 125.701 42.7663 124.985 43.4712C124.28 44.1652 123.322 44.5121 122.11 44.5121H118.211V33.1119ZM122.127 43.4217C123.933 43.4217 124.836 42.3532 124.836 40.2164V37.5233C124.836 36.3667 124.599 35.5241 124.126 34.9954C123.663 34.4667 122.997 34.2023 122.127 34.2023H119.434V43.4217H122.127Z" fill="white"/>
          <path d="M92.0627 16.9812H90.9054V20.6469H90.4825V16.9812H89.3252V16.5935H92.0627V16.9812Z" fill="white"/>
          <path d="M96.4182 16.5935V20.6469H95.9894V17.4746L94.8438 19.8362H94.5149L93.3634 17.4746V20.6469H92.9346V16.5935H93.3634L94.6793 19.3251L95.9894 16.5935H96.4182Z" fill="white"/>
          <defs>
            <clipPath id="clip0_1286:658">
              <rect width="28.2711" height="43.6917" fill="white" transform="translate(0 0.802734)"/>
            </clipPath>
          </defs>
        </svg>
      </NuxtLink>
      <div class="mx-2"></div>
      <a href="https://arcticcanadian.ca" class="flex items-center flex-no-shrink">
        <img src="/images/acdc-logo.jpg" width="126" alt="">
      </a>  
      <!-- Collapsable Menu Button - if one is active other is not. -->
      <div class="block md:hidden">
        <button type="button" class="inline-flex items-center justify-center p-1 text-white focus:outline-none" aria-controls="mobile-menu" aria-expanded="false" @click="toggleVisibility">
          <span class="sr-only">Open main menu</span>
            
          <!-- Burger button svg-->
          <svg v-if="!isVisible" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 12h16M4 18h16" />
          </svg>
            
          <!-- Cross button svg -->
          <svg v-if="isVisible" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
        
      <!-- Items of collapsible menu -->
      <div :class="{ hidden: !isVisible }" class="text-white hover:text-white justify-center flex-grow md:flex md:items-center md:w-auto md:ml-10">
        <span v-for="item in navItems" :key="item.name" class="flex flex-row mt-6 md:mt-0 mr-6"> <NuxtLink :to="item.link" class="flex items-center no-underline flex-row" @click.native="toggleVisibility" >
          <component :is="item.icon" class="w-5 h-5 mr-2 ml-1" /> {{ item.name }} </NuxtLink>
        </span>
                <span class="flex items-center no-underline flex-row" @click.native="goToContact">
          Contact
        </span>

      </div>
      <input class="search-box bg-transparent shadow appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="search" placeholder="Search Your Diamond/Jewelry">
    </div>
  </nav>
</template>
<style scoped>
.search-box{
  width: 260px
}
</style>

<script>
import { ref } from "@nuxtjs/composition-api";
export default {
  components: {
  },
  methods: {
    goToContact(event){
      console.log(event)
      event.preventDefault()
      this.toggleVisibility()
      const el = document.getElementById('pageBottom');

      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({behavior: 'smooth'});      
      }
    }
  },
  setup() {
    const isVisible = ref(false);
    const toggleVisibility = () => {
      isVisible.value = !isVisible.value;
    };
      
    const navItems = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "About Diamonds",
            link: "/about-diamonds",
        },
        {
            name: "Your Diamond",
            link: "/your-diamond",
        },
        {
            name: "Manufacturers",
            link: "/manufacturers",
        },
    ];    
    return {
      isVisible,
      navItems,
      toggleVisibility,
    };
  }
};
</script>