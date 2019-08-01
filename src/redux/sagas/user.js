import { call, put, take, fork, takeLatest, select } from 'redux-saga/effects';
import { user } from '../action';


function* login({ payload }) {
  try {
    yield put(user.login(payload));
  } catch (err) {
    console.log('请求失败', JSON.stringify(err));
  }
}


function* watchUserLogin() {
  yield takeLatest(user.USER_LOGIN, login);
}

const sagas = [
  watchUserLogin,
]

export default sagas;