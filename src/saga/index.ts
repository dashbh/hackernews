import axios from 'axios';
import {
  call, put, takeEvery, all,
} from 'redux-saga/effects';
import { loadNews, updateNews } from '../actions';

const PER_PAGE = 30;
const TAGS = 'story';
const API_URL = `https://hn.algolia.com/api/v1/search_by_date?tags=${TAGS}&hitsPerPage=${PER_PAGE}`;

export function* fetchNews(action) {
  const { page } = action.payload;
  try {
    const response = yield call(axios.get, `${API_URL}&page=${page}`);
    const { data } = response;
    yield put(loadNews(data.hits));
    window.scrollTo(0, 0);
  } catch (error) {
    console.error('Error', error.message);
  }
}
export function* updateStory(action) {
  const story = action.payload;
  try {
    localStorage.setItem(story.objectID, JSON.stringify(story));
    yield put(updateNews(story));
  } catch (error) {
    console.error('Error', error.message);
  }
}

/** Saga Watchers */

function* watchFetchNews() {
  yield takeEvery('FETCH_NEWS', fetchNews);
}

function* watchUpdateStory() {
  yield takeEvery('UPDATE_STORY', updateStory);
}

export default function* rootSaga() {
  yield all([
    watchFetchNews(),
    watchUpdateStory(),
  ]);
}
