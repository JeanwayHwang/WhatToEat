<template>
    <div class="edit-menu-page">
        <div class="menu-box">
            <h1 class="menu-title">菜单.菜肴</h1>
            <textarea bindblur="bindTextAreaBlur" v-model="dishListText" maxlength=-1 class="text-area"/>
        </div>
        <div class="menu-box">
            <h1 class="menu-title">菜单.汤羹</h1>
            <textarea bindblur="bindTextAreaBlur" v-model="soupListText" maxlength=-1 class="text-area"/>
        </div>
        <h2 class="menu-tip">提示：新增菜品以空格分隔输入</h2>
        <button class="btn-save" @click="saveMenu">保存</button>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import {
    SET_DISH_LIST,
    SET_SOUP_LIST
} from '../../store/mutation-types';

export default {
    data () {
        return {
            dishListText: '',
            soupListText: ''
        }
    },
    components: {},
    computed: {
        ...mapState([
            'dishList',
            'soupList'
        ])
    },
    methods: {
        ...mapMutations({
            setDishList: SET_DISH_LIST,
            setSoupList: SET_SOUP_LIST
        }),
        saveMenu() {
            this.setDishList(this.dishListText.split(' '));
            this.setSoupList(this.soupListText.split(' '));
            wx.navigateBack({
                delta: 1
            });
        }
    },
    onLoad() {
        this.dishListText = this.dishList.join(' ');
        this.soupListText = this.soupList.join(' ');
    }
}
</script>

<style lang="scss" scoped>
.menu-box {
    width: 90%;
    margin: 20px auto 0;
    .menu-title {
        font-size: 16px;
        color: #FF911E;
        line-height: 40px;
        padding-left: 5px;
    }
    .text-area {
        width: 100%;
        max-height: 160px;
        border: solid 1px #eee;
        border-radius: 10px;
        padding: 10px;
        box-sizing: border-box;
        text-align: left;
        line-height: 20px;
        font-size: 12px;
    }
}
.menu-tip {
    margin-top: 20px;
    text-align: center;
    font-size: 12px;
    color: #999;
    line-height: 30px;
}
.btn-save {
    margin-top: 30px;
    border-radius: 35px;
    width: 70px;
    height: 30px;
    line-height: 30px;
    background: -webkit-gradient(linear, left top, left bottom, from(#FFBA30), to(#FF911E));
    background: -webkit-linear-gradient(top, #FFBA30, #FF911E);
    background: linear-gradient(to bottom, #FFBA30, #FF911E);
    color: #fff;
    text-align: center;
    display: block;
    font-size: 16px;
    text-shadow: 0 1px 2px rgba(0,0,0,0.3);
    -webkit-box-shadow: inset 0 1px #FFD17C, 0 2px 3px rgba(0,0,0,0.2);
    box-shadow: inset 0 1px #FFD17C, 0 2px 3px rgba(0,0,0,0.2);
    border: 1px solid #E88E1D;
}
</style>
