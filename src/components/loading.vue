<template>
    <div id="loading" :hidden ="$store.state.LOADING">
       <div id="preloader_1">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>
<script>
import stroe from '../store.js'
export default {
    name: 'loading',
    data() {
        return {
            // Loading: this.$store.getters.getLoadingStatus
        }
    },
    // props: []
}
</script>
<style lang="scss">
#loading {
    position: absolute;
    top: 48vh;
    left: 48vw;
    z-index: 99999;
}
#preloader_1{
    position:relative;
}
#preloader_1 span{
    display:block;
    bottom:0px;
    width: 9px;
    height: 5px;
    background:#9b59b6;
    position:absolute;
    animation: preloader_1 1.5s  infinite ease-in-out;
}  
#preloader_1 span:nth-child(2){
    left:11px;
    animation-delay: .2s;  
}
#preloader_1 span:nth-child(3){
    left:22px;
    animation-delay: .4s;
}
#preloader_1 span:nth-child(4){
    left:33px;
    animation-delay: .6s;
}
#preloader_1 span:nth-child(5){
    left:44px;
    animation-delay: .8s;
}
@keyframes preloader_1 {
    0% {height:5px;transform:translateY(0px);background:#9b59b6;}
    25% {height:30px;transform:translateY(15px);background:#3498db;}
    50% {height:5px;transform:translateY(0px);background:#9b59b6;}
    100% {height:5px;transform:translateY(0px);background:#9b59b6;}
}
</style>