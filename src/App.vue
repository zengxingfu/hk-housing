<template>
	<div>
		<!-- 导航 -->
		<div id="hk-nav">
			<!-- Always shows a header, even in smaller screens. -->
			<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
			<header class="mdl-layout__header">
				<div class="mdl-layout__header-row">
				<!-- Title -->
				<span class="mdl-layout-title"><router-link class="white" to="/">香港公屋</router-link></span>
				<!-- Add spacer, to align navigation to the right -->
				<div class="mdl-layout-spacer"></div>
				<!-- Navigation. We hide it in small screens. -->
				<nav class="mdl-navigation mdl-layout--large-screen-only">
					<router-link class="mdl-navigation__link" to="/">公屋概况</router-link>
					<router-link class="mdl-navigation__link" to="policy">政策</router-link>
					<router-link class="mdl-navigation__link" to="attenion">民众与媒体关注</router-link>
					<router-link class="mdl-navigation__link" to="live">人居</router-link>
					<!-- <router-link class="mdl-navigation__link" to="mapping">公屋地图</router-link> -->
					<button v-on:click="openMap()" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
						公屋地图
					</button>
					<!-- <a class="mdl-navigation__link" href="">政策</a> -->
				</nav>
				</div>
			</header>
			<div class="mdl-layout__drawer">
				<span class="mdl-layout-title"><router-link to="/">香港公屋</router-link></span>
				<nav class="mdl-navigation">
					<router-link class="mdl-navigation__link" to="/">公屋概况</router-link>
					<router-link class="mdl-navigation__link" to="policy">政策</router-link>
					<router-link class="mdl-navigation__link" to="attenion">民众与媒体关注</router-link>
					<router-link class="mdl-navigation__link" to="live">人居</router-link>
					<!-- <router-link class="mdl-navigation__link" to="mapping">公屋地图</router-link> -->
				</nav>
			</div>
			<main class="mdl-layout__content">
				<div class="page-content">
					<!-- Your content goes here -->
					<router-view></router-view>
				</div>
				<Map ref="mapping"></Map>
			</main>
			<footer class="mdl-mini-footer">
				<div class="last-next">
					<!-- <ImageCard></ImageCard> -->
					<button id="goto-last" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
						<i class="material-icons">chevron_left</i> 上一篇
					</button>
					<button id="goto-next" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
						下一篇 <i class="material-icons">chevron_right</i>
					</button>
				</div>
			</footer>
			</div>
		</div>
		
	</div>
</template>

<script>
import ImageCard from "./components/ImageCard.vue";
import Map from "./components/Map.vue";
export default {
  data() {
    return {
      // msg: "hk"
      // currentPage: ""
      isFisrt: true,
      isLast: false
    };
  },
  created: function() {},
  components: {
    // Navbar: Navbar
    ImageCard,
    Map
  },
  methods: {
    openMap() {
      let vm = this;
      this.$refs.mapping.open();
    }
  }
};
</script>

<style scoped>
.mdl-layout-title a {
  text-decoration: none;
  color: black;
}
.mdl-layout-title a.white {
  color: white;
}
main {
  background-color: #efefef;
}
.page {
  margin: 50px auto;
  width: 1024px;
}

.last-next {
  width: 1024px;
  margin: 0 auto;
}
#goto-last {
  float: left;
}
#goto-next {
  float: right;
}
</style>