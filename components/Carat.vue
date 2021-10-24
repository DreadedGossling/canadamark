<template>
  <div class="flex flex-col justify-between items-center m-8">
    <svg width="68" height="67" viewBox="0 0 68 67" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M34 66C51.9492 66 66.5 51.4492 66.5 33.5C66.5 15.5508 51.9492 1 34 1C16.0507 1 1.5 15.5508 1.5 33.5C1.5 51.4492 16.0507 66 34 66Z" stroke="#677F91" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M66.4946 33.494L33.998 12.1807L1.50153 33.494L33.9981 54.8073L66.4946 33.494Z" stroke="#677F91" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M57.881 11.4688H10.1123V55.5267H57.881V11.4688Z" stroke="#677F91" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18.6831 4.83008L27.3159 11.4687" stroke="#677F91" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M40.6841 11.4687L49.3169 4.83008" stroke="#677F91" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10.1123 11.4688L21.4763 19.8357L34.0001 1L45.666 19.8357L57.881 11.4688" stroke="#677F91" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10.1123 55.5265L21.4763 47.1641L34.0001 65.9998L45.666 47.1641L57.881 55.5265" stroke="#677F91" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M56.0553 36.984C58.9734 28.9999 51.4705 20.976 39.2971 19.0622C27.1237 17.1483 14.8897 22.0692 11.9716 30.0533C9.05356 38.0374 16.5564 46.0613 28.7298 47.9751C40.9032 49.889 53.1373 44.9681 56.0553 36.984Z" stroke="#677F91" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <h3 class="uppercase font-ddin text-base font-black mt-4">{{ name }}</h3>
  </div>
</template>

<script>
export default {
  props: ['name']
}
</script>