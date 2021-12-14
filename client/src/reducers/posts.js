export default (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload
    case 'CREATE':
      return [...posts, action.paylaod]
    case 'DELETE':
      return posts.map((post) => post._id !== action.paylaod)
    case 'UPDATE':
    case 'LIKE':
      return posts.map((post) =>
        post._id === action.paylaod._id ? action.paylaod : post
      )
    default:
      return posts
  }
}
