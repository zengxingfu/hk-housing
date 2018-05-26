<template>
    <div>
        <div class="top-img" v-bind:class="background">
            <div class="mask">
                <h1>{{ title }}</h1>
                <!-- <h4>“杰瑞德·莱托 奥斯卡”(jared leto oscar) 的搜索量在今年出现 28 倍的飙升，而他的 Instagram 帐户所获得的搜索量涨幅更高。</h4> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ["title", "background"]
};
</script>

<style scoped>
.top-img {
  width: 100%;
  height: 576px;
}

.top-1 {
  background: url(http://ww1.sinaimg.cn/large/005AlemFly1frp9qyaug9j30zk0dwn00.jpg)
    center / contain;
}
.top-2 {
  background: url(http://ww1.sinaimg.cn/large/005AlemFly1frpals4jnej30zk0dwq5g.jpg)
    center / contain;
}
.top-3 {
  background: url(http://ww1.sinaimg.cn/large/005AlemFly1frpam636o3j30zk0dwq40.jpg)
    center / cover;
}
.top-4 {
  background: url(http://ww1.sinaimg.cn/large/005AlemFly1frpamhqa1gj30zk0dwwh8.jpg)
    center / contain;
}
.top-5 {
  background: url(http://ww1.sinaimg.cn/large/005AlemFly1frpamn7gtoj30zk0dwaby.jpg)
    center / contain;
}
.top-6 {
  background: url(http://ww1.sinaimg.cn/large/005AlemFly1frpamsjznvj30zk0dwq5g.jpg)
    center / cover;
}

.top-img > .mask {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 998;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.top-img > .mask > h1 {
  color: white;
  font-size: 55px;
  font-weight: 300;
}
.top-img > .mask > h4 {
  color: white;
  font-size: 24px;
  padding-top: 1em;
  padding-left: 20%;
  /* padding-left: 18.75%; */
  padding-right: 20%;
  text-align: center;
  line-height: 1.4;
}
</style>