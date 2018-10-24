import React, { Component } from 'react';

export function dispatchFunction(word) {
  console.log('C')
  return function (dispatch) {
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(data => {
        console.log('D')
        dispatch({type: 'ADD_POST', posts: data['data']})})
  }
  console.log('E')
}
