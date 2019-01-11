/**
 * Created by TIMMY on 2018/4/25.
 */
import request from '@/utils/callApi';
import constant from './api';

// 获取产品分类
export function categories() {
  return request(constant.PROJECT_APPLY_CATEGORIES, 'POST');
}




