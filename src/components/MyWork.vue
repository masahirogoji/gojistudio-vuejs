<template>
    <div class="container">
        <h2>WORK</h2>
        <div class="work">
            <div class="message">自由気ままに目について興味を持ったものを学んで習得、制作した物達です。</div>
            <div class="work_title">alexa</div>
            <div class="skill-link">
                <a href="https://www.amazon.co.jp/m-goji-忘れ物チェック/dp/B07HFWS147/ref=cm_cr_arp_d_product_top?ie=UTF8" target="_blank" rel="skill link">忘れ物チェック</a>
            </div>
            <div class="skill">
                <div class="skill-box">
                    <img src="./../assets/alexaskill.png" alt="忘れ物チェック">
                </div>
                <div class="skill-box message">
                    jsのコールバックすらわからないままなんとなく雰囲気で作成してみたものです。<br>
                    外出時にalexaに持っていくものなんだっけと尋ねると、あらかじめ登録しておいた持ち物リストを読み上げてくれるスキルです。<br>
                    完成度は低いですが、初めて世に出した作品なので完成した時は達成感と共にエンジニアとしての第一歩が踏み出せたことへの高揚感がありました。<br>
                </div>
            </div>
            <div class="work_title">udemy</div>
            <div class="subject-link">
                <a href="https://www.udemy.com/share/100n0WBEcec1pXRHg=/" target="_blank">Vue JS入門決定版！jQueryを使わないWeb開発 - 導入からアプリケーション開発まで体系的に動画で学ぶ</a>
            </div>
            <div class="subject rev">
                <div class="subject-box">
                    <img src="./../assets/vue.png" alt="Vue JS入門決定版！jQueryを使わないWeb開発 - 導入からアプリケーション開発まで体系的に動画で学ぶ">
                </div>
                <div class="subject-box message">
                    Web開発をするなら今一番熱いjsだということで履修してみました。<br>
                    勉強して思ったことは、js勉強する前にhtmlとcss勉強するべきだったなです。<br>
                </div>
            </div>
            <div class="subject-link">
            <a href="https://www.udemy.com/share/1004bOBEcec1pXRHg=/" target="_blank">もう怖くないGit！チーム開発で必要なGitを完全マスター</a>
            </div>
            <div class="subject">
                <div class="subject-box">
                    <img src="./../assets/git-icon.png" alt="もう怖くないGit！チーム開発で必要なGitを完全マスター">
                </div>
                <div class="subject-box message">
                    会社ではSVNを使ってると言ってもGitを使えないのはこのご時世恥ずかしすぎると思い立ち履修しました。<br>
                    Gitの仕組みから説明してくださっており、とてもわかりやすかったです。<br>
                </div>
            </div>
            <div class="subject-link">
                <a href="https://www.udemy.com/share/100cEeBEcec1pXRHg=/" target="_blank">Node.js + Express で作る Webアプリケーション 実践講座</a>
            </div>
            <div class="subject rev">
                <div class="subject-box">
                    <img src="./../assets/nodejs-icon.png" alt="Node.js + Express で作る Webアプリケーション 実践講座">
                </div>
                <div class="subject-box message">
                    Web開発をするなら今一番熱いjsだt(略<br>
                </div>
            </div>
            <div class="subject-link">
                <a href="https://www.udemy.com/share/100taiBEcec1pXRHg=/" target="_blank">手を動かしながら2週間で学ぶ AWS 基本から応用まで</a>
            </div>
            <div class="subject">
                <div class="subject-box">
                    <img src="./../assets/aws.png" alt="手を動かしながら2週間で学ぶ AWS 基本から応用まで">
                </div>
                <div class="subject-box message">
                    alexaのスキルを作るときにDynamoDBを使ったことでAWSに興味をもち履修しました。<br>
                    本サイトをデプロイする際にとても役に立ちました。<br>
                </div>
            </div>
            <div class="subject-link">
                <a href="https://www.udemy.com/share/1002J4BEcec1pXRHg=/" target="_blank">【初級~中級編】Swiftを使ってTinderのようなiPhoneアプリを開発しよう！【iOS】</a>
            </div>
            <div class="subject rev">
                <div class="subject-box">
                    <img src="./../assets/swift.png" alt="【初級~中級編】Swiftを使ってTinderのようなiPhoneアプリを開発しよう！【iOS】">
                </div>
                <div class="subject-box message">
                    スマホアプリにも興味が湧いたので履修しました。<br>
                </div>
            </div>
            <div class="subject-link">
                <a href="https://www.udemy.com/share/1004nSBEcec1pXRHg=/" target="_blank">[HTML/CSS/JavaScript] フロントエンドエンジニアになりたい人の Webプログラミング入門</a>
            </div>
            <div class="subject">
                <div class="subject-box">
                    <img src="./../assets/html-5.png" alt=" [HTML/CSS/JavaScript] フロントエンドエンジニアになりたい人の Webプログラミング入門">
                </div>
                <div class="subject-box message">
                    Webサイトを作成するために履修しました。<br>
                    本サイトを作成するきっかけになりました。<br>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MyWork'
}
</script>

<style lang="scss" scoped>
.work {
    margin: 3em 1em;

    .work_title {
        font-size: 1.3em;
        color: #333;
        margin: 3em 0;
    }

    .skill{
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 1.5em 3em 5em;
        padding: 2em;
        background-color: #eee;
        box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, .2);
        border-radius: 10px;

        .skill-link {
            margin: 1.5em 1.0em;
        }

        .skill-box {
            img {
                width:auto;
                height:auto;
                max-width:100%;
                max-height:100%;
                padding: 1em;
            }

            &.message{
                margin: 3em;
            }
        }
    }

    .subject{
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 1.5em 3em 5em;
        padding: 2em;
        background-color: #eee;
        box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, .2);
        border-radius: 10px;

        &.rev {
            flex-direction: row-reverse;
        }

        .subject-link {
            margin: 1.5em 1.0em;
        }

        .subject-box {
            img {
                width:auto;
                height:auto;
                max-width:100%;
                max-height:100%;
                padding: 1em;
            }
            &.message{
                margin: 3em;
            }
        }
    }

    a{
        position: relative;
        display: inline-block;
        width: 100%;
        color: #777;
        transition: .5s;
        text-decoration: none;

        &::after {
            position: absolute;
            bottom: 0;
            left: 0;
            content: '';
            width: 0;
            height: 1px;
            background-color: #777;
            transition: .5s;
        }

        &:visited {
            color: #777;
        }

        &:hover {
            transition: color .5s ease 0s;
            color: #ccc;
        }

        &:hover::after {
            width: 100%;
        }
    }
}
</style>
