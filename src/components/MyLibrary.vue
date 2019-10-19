<template>
    <div id="app">
        <div class="container" id="app">
            <h2>LIBLARY</h2>
            <div class="library">
                <div class="message">
                    趣味で写真撮ってます。<br>
                </div>
                <div class="slides" >
                    <div v-for="slide in slides" :key="slide" class="slide">
                        <img :src="slide" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';

export default {
    name: 'MyLibrary',
    data() {
        return {
            slides: [
                require('./../assets/slide/slide1.jpg' ),
                require('./../assets/slide/slide2.jpg' ),
                require('./../assets/slide/slide3.jpg' ),
                require('./../assets/slide/slide4.jpg' ),
                require('./../assets/slide/slide5.jpg' ),
                require('./../assets/slide/slide6.jpg' ),
                require('./../assets/slide/slide7.jpg' ),
                require('./../assets/slide/slide8.jpg' ),
                require('./../assets/slide/slide9.jpg' ),
                require('./../assets/slide/slide10.jpg'),
                require('./../assets/slide/slide11.jpg'),
                require('./../assets/slide/slide12.jpg'),
                require('./../assets/slide/slide13.jpg'),
                require('./../assets/slide/slide14.jpg'),
                require('./../assets/slide/slide15.jpg'),
                require('./../assets/slide/slide16.jpg'),
                require('./../assets/slide/slide17.jpg'),
                require('./../assets/slide/slide18.jpg')
            ]
        }
    }
}

</script>

<style lang="scss" scoped>
.library {
    margin: 3em 1em;

    .slides{
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        justify-content: space-around;
        align-items: center;

        .slide{
            width: 30%;
            transition-duration: .5s;

            img {
                width: 100%;
                margin: .3em;                
            }

            &:hover {
                transform: scale(1.1);
                transition-duration: 0.3s;
            }
        }
    }
}
</style>
