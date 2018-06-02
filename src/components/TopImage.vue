<template>
    <div v-bind:class="background" class="top-image">
        <div class="mask">
            <!-- <h1>{{title}}</h1> -->
            <span class="md-display-2">{{title}}</span>
        </div>
    </div>
</template>

<script>
export default {
  name: "TopImage",
  props: ["title", "background"]
};
</script>

<style scoped>
.top-image {
  width: 100%;
  height: 480px;
}
.top-1 {
  background: url(https://ww1.sinaimg.cn/large/005AlemFly1frp9qyaug9j30zk0dwn00.jpg)
    center / contain;
}
.top-2 {
  background: url(https://ww1.sinaimg.cn/large/005AlemFly1frpals4jnej30zk0dwq5g.jpg)
    center / contain;
}
.top-3 {
  background: url(https://ww1.sinaimg.cn/large/005AlemFly1frpam636o3j30zk0dwq40.jpg)
    center / cover;
}
.top-4 {
  background: url(https://ww1.sinaimg.cn/large/005AlemFly1frpamhqa1gj30zk0dwwh8.jpg)
    center / contain;
}
.top-5 {
  background: url(https://ww1.sinaimg.cn/large/005AlemFly1frpamn7gtoj30zk0dwaby.jpg)
    center / contain;
}
.top-6 {
  background: url(https://ww1.sinaimg.cn/large/005AlemFly1frpamsjznvj30zk0dwq5g.jpg)
    center / cover;
}
.top-7 {
  background: url(https://ws1.sinaimg.cn/large/76a6e147ly1fruojbqci7j20zk0dwqb4.jpg)
    center / cover;
}
.top-image > .mask {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 998;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.top-image > .mask > span {
  color: white;
  /* font-size: 55px; */
  font-weight: 300;
}
</style>