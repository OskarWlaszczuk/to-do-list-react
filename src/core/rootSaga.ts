import { all } from "redux-saga/effects";
import { tasksSaga } from "../features/tasks/sagas/tasksSaga";

export function* rootSaga() {
    yield all([
        tasksSaga(),
    ]);
};