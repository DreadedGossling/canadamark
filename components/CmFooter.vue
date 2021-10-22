<template>
	<footer id="Footer" class="w-full z-10 font-body bottom-0 bg-cm-green text-white flex grid grid-cols-3">
    <div class="col-span-2 p-8 grid grid-cols-2 gap-x-8 gap-y-4">
      <h1 class="font-sanomat text-5xl col-span-2">Get in Touch</h1>
      <input v-model="name" class="bg-transparent font-ddin border border-white text-white leading-tight h-10 px-4" type="text" placeholder="Full Name">
      <input v-model="company" class="bg-transparent font-ddin border border-white text-white leading-tight h-10 px-4" type="text" placeholder="Company Name">
      <input v-model="email" class="bg-transparent font-ddin border border-white text-white leading-tight h-10 px-4" type="text" placeholder="Email Address">
      <input v-model="phone" class="bg-transparent font-ddin border border-white text-white leading-tight h-10 px-4" type="text" placeholder="Phone Number">
      <textarea v-model="message" class="col-span-2 bg-transparent font-ddin border border-white text-white leading-tight p-4" rows="5" placeholder="Your Message"></textarea>
      <button class="col-span-2 bg-white text-cm-green h-10">Submit</button>
    </div>
    <div class="col-span-1 p-8 flex">
      <div class="flex flex-col">
        <div class="w-px bg-white flex-grow v-divider"></div>
        <svg class="my-2" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.59902 13.8022L7.99574 13.4979L7.99499 13.4969L7.59902 13.8022ZM7.99995 13.9999V13.4999V13.9999ZM8.40089 13.8022L8.00491 13.4969L8.00417 13.4979L8.40089 13.8022ZM14.8931 5.38156L15.2891 5.68686L15.2896 5.68613L14.8931 5.38156ZM14.9228 4.79563L15.3481 4.5327L15.3478 4.5323L14.9228 4.79563ZM12.7206 1.24094L12.2949 1.50327L12.2955 1.50426L12.7206 1.24094ZM12.2896 1L12.2902 0.5H12.2896V1ZM3.71027 1V0.5L3.7097 0.5L3.71027 1ZM3.27933 1.24094L3.70437 1.50426L3.70498 1.50327L3.27933 1.24094ZM1.07714 4.79563L0.652098 4.5323L0.651854 4.5327L1.07714 4.79563ZM0.710853 5.68685L7.20304 14.1075L7.99499 13.4969L1.5028 5.07627L0.710853 5.68685ZM7.20229 14.1065C7.29617 14.2289 7.41693 14.328 7.55525 14.3962L7.9976 13.4994C7.99687 13.499 7.99623 13.4985 7.99574 13.4979L7.20229 14.1065ZM7.55525 14.3962C7.69356 14.4645 7.84572 14.4999 7.99995 14.4999V13.4999C7.99914 13.4999 7.99834 13.4998 7.9976 13.4994L7.55525 14.3962ZM7.99995 14.4999C8.15418 14.4999 8.30634 14.4645 8.44466 14.3962L8.0023 13.4994C8.00157 13.4998 8.00077 13.4999 7.99995 13.4999V14.4999ZM8.44466 14.3962C8.58298 14.328 8.70374 14.2289 8.79761 14.1065L8.00417 13.4979C8.00367 13.4985 8.00304 13.499 8.0023 13.4994L8.44466 14.3962ZM8.79687 14.1075L15.2891 5.68685L14.4971 5.07627L8.00492 13.4969L8.79687 14.1075ZM15.2896 5.68613C15.4153 5.52253 15.4882 5.32455 15.4986 5.11852L14.4999 5.06792C14.4997 5.07121 14.4986 5.07438 14.4965 5.077L15.2896 5.68613ZM15.4986 5.11852C15.509 4.91249 15.4565 4.70816 15.3481 4.5327L14.4975 5.05855C14.4992 5.06136 14.5001 5.06463 14.4999 5.06792L15.4986 5.11852ZM15.3478 4.5323L13.1456 0.977616L12.2955 1.50426L14.4977 5.05895L15.3478 4.5323ZM13.1462 0.978607C13.0562 0.832479 12.9303 0.7118 12.7804 0.628034L12.2924 1.50087C12.2934 1.50145 12.2943 1.50227 12.2949 1.50327L13.1462 0.978607ZM12.7804 0.628034C12.6306 0.544267 12.4619 0.500194 12.2902 0.5L12.2891 1.5C12.2902 1.5 12.2914 1.5003 12.2924 1.50087L12.7804 0.628034ZM12.2896 0.5H3.71027V1.5H12.2896V0.5ZM3.7097 0.5C3.53805 0.500194 3.3693 0.544267 3.21948 0.628034L3.70748 1.50087C3.70851 1.5003 3.70966 1.5 3.71083 1.5L3.7097 0.5ZM3.21948 0.628034C3.06965 0.7118 2.94373 0.832479 2.85367 0.978607L3.70498 1.50327C3.7056 1.50227 3.70646 1.50145 3.70748 1.50087L3.21948 0.628034ZM2.85429 0.977616L0.652098 4.5323L1.50218 5.05895L3.70437 1.50426L2.85429 0.977616ZM0.651854 4.5327C0.543374 4.70817 0.490863 4.91249 0.501302 5.11852L1.50002 5.06792C1.49985 5.06463 1.50069 5.06136 1.50243 5.05855L0.651854 4.5327ZM0.501302 5.11852C0.511741 5.32455 0.584634 5.52252 0.710295 5.68613L1.50336 5.077C1.50135 5.07438 1.50019 5.07122 1.50002 5.06792L0.501302 5.11852Z" fill="white"/>
          <path d="M12.9596 1.69696C13.0684 1.44314 12.9508 1.14921 12.697 1.04043C12.4431 0.93165 12.1492 1.04923 12.0404 1.30304L12.9596 1.69696ZM11 5L10.6 5.3C10.7071 5.44282 10.8823 5.51769 11.0595 5.49645C11.2368 5.4752 11.3892 5.36105 11.4596 5.19696L11 5ZM8.4 0.7C8.23431 0.479086 7.92091 0.434315 7.7 0.6C7.47909 0.765685 7.43431 1.07909 7.6 1.3L8.4 0.7ZM12.0404 1.30304L10.5404 4.80304L11.4596 5.19696L12.9596 1.69696L12.0404 1.30304ZM11.4 4.7L8.4 0.7L7.6 1.3L10.6 5.3L11.4 4.7Z" fill="white"/>
          <path d="M3.95957 1.30304C3.85079 1.04923 3.55686 0.93165 3.30304 1.04043C3.04923 1.14921 2.93165 1.44314 3.04043 1.69696L3.95957 1.30304ZM5 5L4.54043 5.19696C4.61075 5.36105 4.76323 5.4752 4.94049 5.49645C5.11775 5.51769 5.29288 5.44282 5.4 5.3L5 5ZM8.4 1.3C8.56569 1.07909 8.52091 0.765685 8.3 0.6C8.07909 0.434315 7.76569 0.479086 7.6 0.7L8.4 1.3ZM3.04043 1.69696L4.54043 5.19696L5.45957 4.80304L3.95957 1.30304L3.04043 1.69696ZM5.4 5.3L8.4 1.3L7.6 0.7L4.6 4.7L5.4 5.3Z" fill="white"/>
          <path d="M7.5285 13.6664C7.62041 13.9268 7.90601 14.0634 8.16641 13.9715C8.42681 13.8796 8.5634 13.594 8.4715 13.3336L7.5285 13.6664ZM5.4715 4.83359C5.37959 4.57319 5.09399 4.4366 4.83359 4.5285C4.57319 4.62041 4.4366 4.90601 4.5285 5.16641L5.4715 4.83359ZM8.4715 13.3336L5.4715 4.83359L4.5285 5.16641L7.5285 13.6664L8.4715 13.3336Z" fill="white"/>
          <path d="M7.5285 13.3336C7.4366 13.594 7.57319 13.8796 7.83359 13.9715C8.09399 14.0634 8.37959 13.9268 8.4715 13.6664L7.5285 13.3336ZM11.4715 5.16641C11.5634 4.90601 11.4268 4.62041 11.1664 4.5285C10.906 4.4366 10.6204 4.57319 10.5285 4.83359L11.4715 5.16641ZM8.4715 13.6664L11.4715 5.16641L10.5285 4.83359L7.5285 13.3336L8.4715 13.6664Z" fill="white"/>
        </svg>
        <div class="w-px bg-white flex-grow v-divider"></div>
      </div>
      <div class="flex flex-col font-sanomat text-md px-16">
        <div class="mt-12">
          <span v-for="item in navItems.slice(0,3)" :key="item.name" class="flex flex-row mb-7">
            <NuxtLink :to="item.link" class="no-underline">
              {{ item.name }}
            </NuxtLink>
          </span>        
        </div>
        <div>
          <span v-for="item in navItems.slice(3)" :key="item.name" class="flex flex-row mb-7">
            <NuxtLink :to="item.link" class="no-underline">
              {{ item.name }}
            </NuxtLink>
          </span>        
        </div>
      </div>
    </div>
	</footer>
</template>

<script> 
export default {
  data() {
    const navItems = [
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
        {
            name: "Terms & Conditions",
            link: "/terms-and-conditions",
        },
        {
            name: "Privacy Policy",
            link: "/privacy-policy",
        },
    ];

    return {
      navItems
    }
  }
};
</script>

<style scoped>
.v-divider {
  margin-left: 8px;
}
</style>