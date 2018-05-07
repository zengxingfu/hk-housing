<template>
	<div>
		<!-- 导航 -->
		<div id="hk-nav">
			<!-- Always shows a header, even in smaller screens. -->
			<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
			<header class="mdl-layout__header">
				<div class="mdl-layout__header-row">
				<!-- Title -->
				<span class="mdl-layout-title">香港公屋</span>
				<!-- Add spacer, to align navigation to the right -->
				<div class="mdl-layout-spacer"></div>
				<!-- Navigation. We hide it in small screens. -->
				<nav class="mdl-navigation mdl-layout--large-screen-only">
					<a class="mdl-navigation__link" href="">政策</a>
					<a class="mdl-navigation__link" href="">民众与媒体关注</a>
					<a class="mdl-navigation__link" href="">人居</a>
					<a class="mdl-navigation__link" href="">Mapping</a>
				</nav>
				</div>
			</header>
			<div class="mdl-layout__drawer">
				<span class="mdl-layout-title">香港公屋</span>
				<nav class="mdl-navigation">
				<a class="mdl-navigation__link" href="">政策</a>
				<a class="mdl-navigation__link" href="">民众与媒体关注</a>
				<a class="mdl-navigation__link" href="">人居</a>
				<a class="mdl-navigation__link" href="">Mapping</a>
				</nav>
			</div>
			<main class="mdl-layout__content">
				<div class="page-content"><!-- Your content goes here --></div>
			</main>
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
</style>