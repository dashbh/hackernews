export const fetchNews = (page) => ({
  type: 'FETCH_NEWS',
  payload: {
    page: page + 1,
  },
});

export const loadNews = (news) => ({
  type: 'LOAD_NEWS',
  payload: {
    news,
  },
});

export const updateStory = (story) => ({
  type: 'UPDATE_STORY',
  payload: story,
});

export const updateNews = (story) => ({
  type: 'UPDATE_NEWS',
  payload: story,
});
