<template>
    <div id="rankdetail">
        <detail :title="title"></detail>
    </div>
</template>

<script>
import detail from '../Common/Detail';
    export default {
        name:'rankdetail',
        components:{
            detail
        },

        data(){
            return{
                title:'排行榜'
            }
        }
    }
</script>

<style scoped>

</style>