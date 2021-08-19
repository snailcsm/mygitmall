<template>
    <div class="comments" v-if="Object.keys(comments).length>0">
      <a class="comment-top">
        <span>用户评价</span>
        <span class="comment-more">更多<i></i></span>
      </a>
      <div class="comment-content">
        <div class="comment-list" v-for="(item,index1) in comments" :key="index1">
          <div class="comment-user" >
            <div class="user-headimg"><img :src="item.user.avatar" /></div>

            <div class="user-name">{{item.user.uname}}</div>
          </div>
          <div class="comment-user-message" >
            <span v-for="(data,index2) in item.extraInfo" :key="index2">{{data}}</span>
          </div>
          <p class="comment-content">{{item.content}}</p>
          <div class="comment-data-msg">
            <span class="comment-time">{{item.created|ruleDate}}</span>
            <span class="comment-goods-style">{{item.style}}</span>
          </div>
          <div class="comment-imgs" v-if="item.images!=null">
            <a v-for="(image,index3) in item.images" :key="index3" @click="showBigImage(image)">
              <img :src="image" ></a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import {formateData} from "common/utils";

  export default {
        name: "detailComment",
    props:{
        comments:Array
      },
    data(){
          return{
            photoSrc:""
          }
    },
      filters:{
        ruleDate(value){
        return  formateData(value,'*',true);
        }
      },
      methods:{
        showBigImage(value){
          this.$emit('showImg',value)
        }
      }
    }
</script>

<style scoped>
  .comments{
    width: 90%;
    margin: 0 auto;
  }
  .comment-top{
    display: block;
    width: 100%;
    height: 50px;
    line-height: 50px;
    position: relative;
    border-bottom: 1px #ccc solid;
  }
  .comment-more{
    position:absolute;
    right: 0;
  font-size: 12px;
  }
  .comment-more i::after{
  content: "»";
  font-style: normal;
  font-size: 20px;
  margin: 0 5px;
}
  .comment-list{
    border-bottom: 1px #ddd dashed;
    margin: 5% auto;
    width: 100%;
    padding-bottom: 5%;
  }
  .comment-user{
    display: flex;
    margin: 2% auto;
  }
  .user-headimg{
    display: inline-block;
    width:40px;
    border-radius:40px;
    overflow:hidden;
  }
  .user-name{
    line-height: 40px;
    margin-left: 4%;
    font-size: 14px;
  }
  .comment-user-message{
    width:100%;
    display: flex;
    justify-content: space-around;
    color: #aaa;
    font-size: 12px;
    line-height: 26px;
  }
  .comment-content{
    font-size: 14px;
    color: #444;
    line-height: 1.6em;
  }
  .comment-data-msg{
    font-size: 12px;
    color: #888;
    margin: 2% auto;
  }
  .comment-data-msg span{
    margin-right: 5px;
  }
  .comment-imgs{
    display: flex;
    justify-content: space-between;
  }
  .comment-imgs a{
    display: block;
    width: 24%;
  }

</style>
