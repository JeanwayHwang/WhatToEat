import * as types from './mutation-types';

const mutations = {
    [types.SET_DISH_LIST] (state, dishList) {
        state.dishList = dishList;
    },
    [types.SET_SOUP_LIST] (state, soupList) {
        state.soupList = soupList;
    }
};

export default mutations;
