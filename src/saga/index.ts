import axios from 'axios';
import { call, put, takeEvery, all } from 'redux-saga/effects';
import { loadNews } from '../actions';

const API_URL = 'http://hn.algolia.com/api/v1/search_by_date?tags=story';

export function* fetchNews(action) {
  const { page } = action.payload;
  try {
    const response = yield call(axios.get, `${API_URL}&page=${page}`);
    const { data } = response;
    yield put(loadNews(data.hits));
  } catch (error) {
    console.log('Error:', error.message)
  }
}

function* watchFetchNews() {
  yield takeEvery('FETCH_NEWS', fetchNews)
}

export default function* rootSaga() {
  yield all([
    watchFetchNews(),
  ])
};
