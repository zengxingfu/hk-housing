<template>
  <div class="team-container">
    <md-app md-waterfall md-mode="overlap">
      <md-app-toolbar class="md-primary md-large">
        <div class="md-toolbar-row">
          <md-button class="md-icon-button" @click="handleBack">
            <md-icon>arrow_back</md-icon>
          </md-button>

          <span class="md-title">关于作品</span>
        </div>
      </md-app-toolbar>
<md-app-content class="team-content">
      
      <div class="md-layout md-alignment-left">
        <div class="md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-100 md-small-size-100">
          <h2>选题背景</h2>
        <!-- <span class="md-title">选题背景</span> -->
        <p>与中国内地类似，香港也有为低收入人群提供居住保障的廉租房与经济适用房，分别称为公屋与居屋。申请租金低廉的公屋是香港低收入人群解决住房问题的首选项。然而，目前香港的公屋数量却不足以将20万蜗居的港人纳入保护网之下。贫困港人住房难、社会贫富严重不均、社会分化加剧一时成为舆论漩涡的中心。公众舆论以公屋供不应求为由敦促港府增加开发住房用地。在公众舆论压力下，香港特区政府做出了增加土地供应的决定。
关注弱势群体、揭示社会问题，是媒体舆论监督的职责所在。描述性的媒体报道的确能够发现问题，但却往往难以触及真相。香港的保障性住房政策的确存在问题，但并非只是供不应求这么简单。片面的数据解读和武断的政策导向，可能让香港的住房问题在误区中越走越远。
《何以安居》试图通过多维度、全景式的数据分析，展现香港保障住房制度目前深陷的误区，并挖掘问题背后隐藏的真相。</p>
        <!-- <span class="md-title">创作团队</span> -->
        
        <h2>创作团队</h2>
        <p class="bottom-gap">
          指导老师：祝建华教授<br>
          项目统筹：施展、胡雪晨<br>
          产品设计：施展、曾星富<br>
          数据图表：麦丽思、胡雪晨、施展<br>
          数据分析：施展<br>
          文字编辑：施展、麦丽思、胡雪晨<br>
          页面开发：曾星富<br>
          视频拍摄与制作：王汇明<br>
          顾问：杨蓉培、刘沂铭、刘壮壮<br>
          特别感谢：雷先生、Dustin、Andy、Iain、凌晨、李佳航、韦冬晴<br>
        </p>
        
        </div>
      </div>
      </md-app-content>
      
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
h2,
p {
  font-weight: 300;
  line-height: 2em;
}
.team-content {
  min-height: 50vh;
  height: auto;
}
</style>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleBack() {
      this.$router.back();
    }
  }
};
</script>