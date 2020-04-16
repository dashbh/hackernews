export const fetchNews = page => ({
    type: 'FETCH_NEWS',
    payload: {
        page: page + 1
    }
});

export const loadNews = (news) => ({
    type: 'LOAD_NEWS',
    payload: {
        news
    }
});
