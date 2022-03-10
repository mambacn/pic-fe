<template>
  <div>
    <Banner></Banner>
    <PortraitFunction></PortraitFunction>
    <Collage></Collage>
  </div>
</template>

<script>
import Banner from "@/components/pc/Banner.vue";
import PortraitFunction from "@/components/pc/PortraitFunction.vue";
import Collage from "@/components/pc/Collage.vue";
export default {
  components: { Banner, PortraitFunction, Collage },
};
</script>

<style>
</style>