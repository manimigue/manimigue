export const setArticles = (articles) =>({
  type : 'SET_ARTICLES',
  payload: {
    articles: articles
  }
});

export const setUrl = (url,id) => ({
  type : 'SET_URL',
  payload: {
    url: url,
    id : id
  }
});

export const read = (id) => ({
  type : 'READ',
  payload: {
    id : id
  }
});

export const setLoaded = () => ({
  type : 'LOADED'
});

export const setLastId = (lastID) => ({
  type : 'SET_LAST_ID',
  payload: {
    lastID: lastID
  }
})

export const setArticle = (url) => ({
  type : 'SET_ARTICLE',
  payload: {
    url: url
  }
})
