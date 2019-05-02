<template>
    <div class="container" id="app">
        <h2>LIBLARY</h2>
        <div class="library">
            <div class="message">
                趣味で写真撮ってます。<br>
            </div>
            <div class="slide">
                <img src="./../assets/slide/UNADJUSTEDNONRAW_thumb_34d9.jpg" alt="">
                <img src="./../assets/slide/UNADJUSTEDNONRAW_thumb_3554.jpg" alt="">
                <img src="./../assets/slide/UNADJUSTEDNONRAW_thumb_3592.jpg" alt="">
                <img src="./../assets/slide/UNADJUSTEDNONRAW_thumb_35d2.jpg" alt="">
                <img src="./../assets/slide/UNADJUSTEDNONRAW_thumb_3614.jpg" alt="">
                <img src="./../assets/slide/UNADJUSTEDNONRAW_thumb_3695.jpg" alt="">
                <img src="./../assets/slide/UNADJUSTEDNONRAW_thumb_36ae.jpg" alt="">
                <img src="./../assets/slide/UNADJUSTEDNONRAW_thumb_36ec.jpg" alt="">
                <img src="./../assets/slide/UNADJUSTEDNONRAW_thumb_3710.jpg" alt="">
                <img src="./../assets/slide/UNADJUSTEDNONRAW_thumb_3745.jpg" alt="">
                <img src="./../assets/slide/UNADJUSTEDNONRAW_thumb_3748.jpg" alt="">
                <img src="./../assets/slide/UNADJUSTEDNONRAW_thumb_3752.jpg" alt="">
                <img src="./../assets/slide/UNADJUSTEDNONRAW_thumb_37f4.jpg" alt="">
                <img src="./../assets/slide/UNADJUSTEDNONRAW_thumb_3cd7.jpg" alt="">
                <img src="./../assets/slide/UNADJUSTEDNONRAW_thumb_3cff.jpg" alt="">
                <img src="./../assets/slide/UNADJUSTEDNONRAW_thumb_3dcd.jpg" alt="">
                <img src="./../assets/slide/UNADJUSTEDNONRAW_thumb_3e45.jpg" alt="">
                <img src="./../assets/slide/09D93A07-D262-46A3-8EAB-BB8E0A21B68B.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MyLibrary'
}
</script>

<style lang="scss" scoped>
.library {
    margin: 3em 1em;

    .slide{
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        justify-content: space-around;
        align-items: center;

        img{
            width: 30%;
            margin: .3em;
            transition-duration: .5s;

            &:hover {
                transform: scale(1.1);
                transition-duration: 0.3s;
            }
        }
    }
}
</style>
