<template>
  <div class="container">
    <h2>ABOUT</h2>
    <div class="about">
      <div class="message">
        大学では情報工学を専攻しコンピュータのイロハを学ぶ。<br>
        Webアプリもしくはスマホアプリを作る仕事がしたいがお給料も欲しいと思いWebアプリに強そうなSIer企業に就職。<br>
        これからのエンジニア人生にウキウキわくわくであったが実際の業務内容はCOBOLによるバッチ開発。<br>
        期待する業務内容からは遥かにかけ離れた現実に失望落胆の日々。<br>
        どうにか思い描くエンジニア像に近づくため何かしなくてはと思い当サイトを作成、今に至る。<br>
        Web開発は初心者のため日々精進中。<br>
      </div>
      <div class="profile">
        <div class="profile-box">
          name<br>
          GOJI<br>
        </div>
        <div class="profile-box">
          age<br>
          23歳<br>
        </div>
        <div class="profile-box">
          address<br>
          大阪在住<br>
        </div>
        <div class="profile-box">
          job<br>
          システムエンジニア<br>
        </div>
        <div class="profile-box">
          lungage<br>
          C COBOL HTML CSS Bootstrap vue.js Node.js<br>
        </div>
        <div class="profile-box">
          hobby<br>
          写真 ゲーム 映画<br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyAbout'
}
</script>

<style lang="scss" scoped>
.about{
    margin: 3em 1em;

  .profile {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      background-color: #eee;
      box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, .2);
      border-radius: 10px;
      padding: 2em;
      margin: 1.5em 3em 5em;
      width: auto;
  }

  .profile-box {
      width: 33.3%;
      margin: 1em;
  }
}
</style>
