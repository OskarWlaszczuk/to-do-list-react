import { all } from "redux-saga/effects";
import { tasksSaga } from "./tasksSaga";

export function* rootSaga() {
    yield all([
        tasksSaga(),
    ]);
};