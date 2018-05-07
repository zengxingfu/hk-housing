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
					<router-link class="mdl-navigation__link" to="policy">政策</router-link>
					<router-link class="mdl-navigation__link" to="attenion">民众与媒体关注</router-link>
					<router-link class="mdl-navigation__link" to="live">人居</router-link>
					<router-link class="mdl-navigation__link" to="mapping">Mapping</router-link>
					<!-- <a class="mdl-navigation__link" href="">政策</a> -->
				</nav>
				</div>
			</header>
			<div class="mdl-layout__drawer">
				<span class="mdl-layout-title"><router-link to="/">香港公屋</router-link></span>
				<nav class="mdl-navigation">
					<router-link class="mdl-navigation__link" to="policy">政策</router-link>
					<router-link class="mdl-navigation__link" to="attenion">民众与媒体关注</router-link>
					<router-link class="mdl-navigation__link" to="live">人居</router-link>
					<router-link class="mdl-navigation__link" to="mapping">Mapping</router-link>
				</nav>
			</div>
			<main class="mdl-layout__content">
				<div class="page-content">
					<!-- Your content goes here -->
					<router-view></router-view>
				</div>
			</main>
			<footer class="mdl-mini-footer">
			
			</footer>
			</div>
		</div>
		
	</div>
</template>

<script>
// import Navbar from './components/Navbar.vue'
export default {
  data() {
    return {
      // msg: "hk"
    };
  },
  components: {
    // Navbar: Navbar
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
.page {
  margin: 50px;
  text-align: center;
}
</style>