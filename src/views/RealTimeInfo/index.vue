<template>
  <div id="main">
    <Header title="xxx电影" />
    <div id="content">
    </div>
    <TabBar />
  </div>
</template>


<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import Swiper from "@/components/Swiper";

export default {
  name: "Movie",
  components: {
    Header,
    TabBar,
    Swiper
  }
};
</script>
