import { combineReducers } from "redux";
import postReducer from "./postsReducer/postsReducer";

const appReducer = combineReducers({
  posts: postReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = (state:any, action:any) => {
    return appReducer(state, action);
}

export default rootReducer;
