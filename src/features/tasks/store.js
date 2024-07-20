import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasksSlice';
import createSagaMiddleware from "redux-saga"
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;