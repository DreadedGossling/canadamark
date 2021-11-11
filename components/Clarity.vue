<template>
  <div class="flex flex-col items-center m-1 sm:m-4 md:m-8 w-1/5">
    <h3 class="font-sanomat text-sm md:text-base mb-auto" v-html="name"></h3>
    <svg class="mb-4 mt-2" width="90%" viewBox="0 0 65 66" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M52.2146 64.9993H12.7855L0.500488 55.2011V10.7981L12.7855 1H52.2146L64.4995 10.7981V55.2011L52.2146 64.9993Z" stroke="#677F91" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M48.4458 58.8825H16.5558L6.62012 50.9581V15.0411L16.5558 7.1167H48.4458L58.3815 15.0411V50.9581L48.4458 58.8825Z" stroke="#677F91" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M42.8292 49.7702H22.1708L15.7324 44.6352V21.3811L22.1708 16.2461H42.8292L49.2735 21.3811V44.6493L42.8292 49.7702Z" stroke="#677F91" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.7856 1L22.171 16.2305" stroke="#677F91" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M52.2147 65L42.8353 49.7695L32.5032 65L22.171 49.7695L12.7856 65" stroke="#677F91" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M42.8354 49.7688L64.4998 55.2011L49.2738 44.6337L64.4998 32.9996L49.2738 21.3655L64.4998 10.7981L42.8354 16.2305L52.2149 1" stroke="#677F91" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.1708 49.7688L0.500488 55.2011L15.7325 44.6337L0.500488 32.9996L15.7325 21.3655L0.500488 10.7981L22.1708 16.2305L32.503 1L42.8352 16.2305" stroke="#677F91" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <h3 class="uppercase font-ddin text-sm md:text-base font-black ">{{ shortname }}</h3>
  </div>
</template>

<script>
export default {
  props: ['name', 'shortname']
}
</script>