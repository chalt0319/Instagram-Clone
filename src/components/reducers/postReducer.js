import cuid from 'cuid';
export const cuidFn = cuid;


export default function postReducer(state = {posts: [], likes: [], comments: []}, action) {
  switch (action.type) {
    case 'ADD_POST':

      console.log(action.posts)
      return {...state, posts: action.posts}

    case 'LIKE_POST':

      return {...state, likes: state.likes.concat(action.post)}

    case 'ADD_COMMENT':

      const comment = {
        id: cuid(),
        text: action.comment,
        postId: action.post.id
      }

      console.log(comment)

      return {...state, comments: [...state.comments, comment]}


    default:
      return state
  }

}
