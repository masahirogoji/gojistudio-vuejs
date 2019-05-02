<template>
  <div class="header">
    <div class="logo">
      <img src="./../assets/logo.png">
    </div>
    <div class="icons">
      <div class="insta-icon">
        <a href="https://www.instagram.com/bawbawbaw0914/" target="_blank" alt="instagram">
          <i class="fab fa-instagram fa-2x fa-fw social-icon"></i>
        </a>
      </div>
      <div class="twitter-icon">
        <a href="https://twitter.com/HlhgcRnud" target="_blank" alt="twitter">
          <i class="fab fa-twitter-square fa-2x fa-fw social-icon"></i>
        </a>
      </div>
    </div>
    <nav class="nav">
      <router-link class="link" to="/">ABOUT</router-link>
      <router-link class="link" to="/work">WORK</router-link>
      <router-link class="link" to="/library">LIBLARY</router-link>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 100px;
  background-color: #eee;
  overflow: hidden;
  width: auto;

  .icons {
    margin: 0 1em;
  }

  .social-icon {
    color: #aaa;

      &:hover {
        transition: color 0.5s ease 0s;
        color: #ccc;
        border-color: #777;
      }
  }

  .nav {
    display: flex;
    justify-content: space-around;
    margin-left: auto;

    .link {
      text-decoration: none;
      color: #333;
      font-size: 1.5em;
      padding: 1em 3em;

      &:not(:last-child) {
        border-right: 2px solid;
      }

      &:hover {
        transition: color 0.5s ease 0s;
        color: #ccc;
        border-color: #777;
      }
    }
  }
}
</style>
