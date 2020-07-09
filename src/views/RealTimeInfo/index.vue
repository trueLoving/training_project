<template>
  <div id="main">
    <Header title="xxx电影" />
    <div id="content">
      <img src="/images/pandengzhe.jpg" alt="">
      <h2>《攀登者》为国攀登 寸土不让</h2>
      <span>《攀登者》是由李仁港执导，吴京、章子怡、张译、井柏然、胡歌、王景春、何琳等主演，成龙友情出演的剧情冒险电影。
            影片以1960年与1975年中国登山队两次登顶珠峰的事迹为背景，讲述方五洲、曲松林等中国攀登者怀揣着最纯粹的梦想集结于珠峰，肩负时代使命于世界之巅的故事 。</span>
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
