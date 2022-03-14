<template>
  <div>
    <Banner></Banner>
    <PortraitFunction></PortraitFunction>
    <Collage></Collage>
  </div>
</template>

<script>
import Banner from "@/components/mobile/Banner.vue";
import PortraitFunction from "@/components/mobile/PortraitFunction.vue";
import Collage from "@/components/mobile/Collage.vue";
export default {
  components: { Banner, PortraitFunction, Collage },
};
</script>

<style>
</style>