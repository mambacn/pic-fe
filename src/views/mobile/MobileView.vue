<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/mobile/Header.vue";
import Footer from "@/components/mobile/Footer.vue";
export default {
  components: { Header, Footer },
};
</script>
