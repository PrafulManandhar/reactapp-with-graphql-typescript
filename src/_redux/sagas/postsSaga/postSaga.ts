import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IPost } from "../../../models/IPost";
import {
  fetchPostsFailure,
  fetchPostsSuccess
} from "../../actions/postsActions/postsActions";
import { postTypes } from "../../Actiontypes/postsTypes";

const getPosts = () =>{
  return axios({
    method: "GET",
    url: `https://jsonplaceholder.typicode.com/todos`,
  });
}

function* fetchPostsSaga() : any {
  try {
    const response:any= yield call(getPosts); // call act as axios ( api hit)
    yield put( //put act as dispatch 
      fetchPostsSuccess({
        posts: response.data
      })
    );
  } catch (e : any) {
    yield put(
      fetchPostsFailure({
        error: e.message
      })
    );
  }
}

function* postsSaga() {
  yield all([takeLatest(postTypes.FETCH_POST_REQUEST, fetchPostsSaga)]); //takeEvery == act as normal api calling(post, put), takeLatest is used for get request
}

export default postsSaga;
