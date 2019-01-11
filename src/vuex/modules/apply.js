/**
 * Created by TIMMY on 2018/4/25.
 */
import {categories} from '@/services/apply';
export default {
  namespaced: true,
  state: {
    into: null
  },
  mutations: {
    SET_INTO: (state, into) => {
      state.into = into;
    }
  },
  actions: {
    // 产品分类
    categories({commit}, params) {
      return categories(params);
    }
  }
};
