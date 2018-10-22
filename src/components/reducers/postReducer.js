
// import cuid from 'cuid';
// export const cuidFn = cuid;

export default function postReducer(state = {posts: []}, action) {
  switch (action.type) {
    case 'ADD_POST':

      // const newPost = {
      //   id: cuid(),
      //   text: action.rest.text
      // }
      return {posts: [action.posts]}

    default:
      return state
  }

}
