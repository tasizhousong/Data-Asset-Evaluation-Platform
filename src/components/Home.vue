<!--<img src="../assets/homePage.jpg" width="1090">-->
<template>
  <div id="app">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="大数据时代"
        text="我们处在一个巨大的时代，这是一个可以共同展望未来的时代，不是去改变别人，而是改变自己。这样你就不会在10年以后说这时大数据惹的祸。大数据是我们应该共同把他变成人类未来的巨大能源所在。--《马云：未来已来》"
        img-src="../assets/data1.png"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="../assets/data2.png">
        <h1>夜下城市的喧嚣</h1>
        <p>城市的夜晚像京剧老生的长枪，锣鼓喇叭声起承转合，明明灭灭，韵调斑斓。空气蕴含丰富，各种味道儿杂糅在一起，人群挤挤挨挨。城市记忆就像频繁留白的影像剪辑，今是昨非，不知所云。</p>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="../assets/data3.png">
        <h1>思维化作动力</h1>
        <p>互联网产生了相互感召的力量，将无数怀有关怀之情的人，结成了强大的自组织力量，是一种充分可持续的力量。人类以一种全新的组织，连接方式，幻化出无数钻石般的群体行动。--《互联网时代》</p>
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide img-src="../assets/data4.png">
        <h1>数据反映现象</h1>
        <p>在无压力的周末之后想到星期一，使每个人都感到心碎。除了开玩笑，科学家发现星期一的心脏病发作实际上比任何一天都多。这是通过2008年至2012年在11个公立医院急诊科进行的研究发现的，涉及45,000多名心脏病患者。</p>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="互联网和大数据本是相辅相成，相生相依的" img-src="../assets/data5.png">
        <p>大数据时代，数据不再是静止和陈旧的，任何被遗忘在服务器中的数据，都可能被重新利用，从而发现其中与我们、与行为、与现象的相关性。《大数据时代》的作者维克托·迈尔-舍恩伯格说，大数据的真实价值就像漂浮在海洋中的冰山，第一眼只能看到冰山一角，绝大部分都隐藏在表面之下。感谢科技的进步，今天我们已经能够看到冰山之下的绝大部分。
        </p>
      </b-carousel-slide>
    </b-carousel>
    <br>
    <br>
    <div>
      <b-card>
        <b-media>
          <template #aside>
            <b-img src="../assets/introduce1.jpg" width="200" height="200"></b-img>
          </template>

          <h4 class="mt-0">阅读报纸</h4>
          <p>
            随着科学技术的快速发展,当今社会全面迈入数字化时代,各种网络、新媒体的全面介入对传统的纸媒带来了巨大的冲击。报纸是报社生存的基础,而报纸版面又是报纸的脸面。
            数字技术与媒体技术的精进,逐渐消解了不同媒体的技术壁垒,一个信息共享与多元媒介体验的新媒体时代就此来临.在媒介融合的全媒体时代背景下,作为传统媒体的报纸,应当根据读者阅读习惯转变,探索与创新报纸版面形态,顺应新闻传播业发展变革。
          </p>
          <hr class="my-4">
          <b-media>
            <h5 class="mt-0">新媒体</h5>
            <p class="mb-0">
              新闻采访处于新闻传播活动的首端,是新闻媒体传播活动的基础,采访工作的顺利进行,有利于新闻传播的成功。在网络背景下,新媒体传播的及时性、工具的数字化以及内容的复杂性,对新媒体采访工作人员提出了更高的要求,在保障采访内容真实可靠的同时,还要保证采访快捷、内容多元。
            </p>
            <small class="text-muted">
              广播新闻节目要想提升收听、收视率,必须保证节目质量,才能在新媒体的冲击下找到新的出路,这就要求广播新闻要强化采访工作,为受众提供高质量的内容。
              媒体融合作为新闻传播领域的重要任务,正在从"推动媒体融合发展"向"推动媒体融合向纵深发展"转变,传统电视台也不例外。
            </small>

            <template #aside>
              <b-img src="../assets/introduce2.jpg" height="180"  alt="placeholder"></b-img>
            </template>

          </b-media>
        </b-media>
        <hr class="my-4">
        <b-media no-body>
          <b-media-aside vertical-align="center">
            <b-img src="../assets/introduce3.jpg" width=auto height="250" alt="placeholder"></b-img>
          </b-media-aside>

          <b-media-body>
            <h4 class="mt-0">大数据</h4>
            <p>
              在大数据时代,现有的数据质量参差不齐、缺少统一的代码和口径,使得宏观数据与微观数据之间的融合存在问题。以宏观数据库为基准,将微观数据库匹配到宏观数据库是解决数据融合难题的一个方法。建议设置宏观数据库与微观数据库,并鼓励学者上传数据、定期融合数据库、加强与科研机构和数据公司的合作,以此来完善我国数据库的建设工作。
            </p>

            <p class="mb-0">
              数字平台是数字经济时代数据资源配置的关键枢纽。各地及企业在实践中形成了若干典型模式。然而,数字平台在推进数据资源配置过程中,也出现数据泄露、数据隐私侵犯、数据垄断、数据不正当竞争、数据欺诈、数据操纵等各类潜在问题和风险
            </p>
          </b-media-body>
        </b-media>
      </b-card>
    </div>

    <b-jumbotron header="Data Asset Evaluation Platform" lead="一款数据资产估计平台">
      <p>欲了解更多信息，请访问网站</p>
      <b-button variant="primary" href="#">更多信息</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
