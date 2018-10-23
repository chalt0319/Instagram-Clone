
export default function postReducer(state = {posts: [], likes: []}, action) {
  switch (action.type) {
    case 'ADD_POST':

      console.log(action.posts)
      return {...state, posts: action.posts}

    case 'LIKE_POST':
    console.log(state.likes)
      return {...state, likes: state.likes.concat(action.post)}

    default:
      return state
  }

}
