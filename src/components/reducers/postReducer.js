
// import cuid from 'cuid';
// export const cuidFn = cuid;

export default function postReducer(state = {posts: []}, action) {
  switch (action.type) {
    case 'ADD_POST':

      // const newPost = {
      //   id: cuid(),
      //   text: action.rest.text
      // }
      console.log(action.posts)
      return {posts: action.posts}

    default:
      return state
  }

}
