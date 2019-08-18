import {take,put, call,select, fork, all} from 'redux-saga/effects'
import * as actions from './action';
import * as actionsType from './actionType'
import axios from 'axios';


const URL = "http://micky.com/api/hi"
export function fetchPostsApi() {
    return fetch(`https://www.reddit.com/r/reactjs.json`)
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(json => json.data.children.map((child) => child.data))
  }


export function* waitAdd() {
  while(true) {
    yield take(actionsType.ADD)
    const posts = yield call(fetchPostsApi)
    yield put(actions.add())
  }
}



export function* root() {
  yield all([
    fork(waitAdd),
  ])
}