<template>
  <ul id="subProject">
    <li class="sub-list" v-for="(item,index) in subprojectList" :key="index">
      <a class="sub-item" :href="item.link">
        <img :src="item.image" class="sub-item-img" @load="imageLoad">
        <p class="sub-item-title">{{item.title}}</p>
      </a>
    </li>
  </ul>
</template>

<script>
  import {debounce} from "common/utils";

  export default {
    name: "subproject",
    props: {
      subprojectList: Array
    },
    data() {
      return {
        dealImgLoad: null
      }
    },
    mounted() {
      this.dealImgLoad = debounce(() => {
        this.$emit('imgLoad')
      }, 1000)
    },
    methods: {
      imageLoad() {
        this.dealImgLoad();

      },

    },
  }
</script>

<style scoped>
  #subProject {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    position: relative;
    z-index: 9;
  }

  .sub-list {
    list-style: none;
    width: 29%;
    margin: 4% auto;
  }

  .sub-item-img {
    width: 90%;
    margin: 0 auto;
  }

  .sub-item-title {
    width: 100%;
    text-align: center;
    color: var(--base-text-color);
    font-size: 14px;
  }
</style>
