import {
  ADD,
  MINUS
} from '../constants/test'

export const add = () => {
  return {
    type: ADD
  }
};
export const minus = () => {
  return {
    type: MINUS
  }
};

// 异步的action
export function asyncAdd() {
  return dispatch => {
    setTimeout(() => {
      dispatch(add())
    }, 2000)
  }
}
