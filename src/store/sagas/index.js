
import { take, put, call, fork, select, all, takeEvery } from 'redux-saga/effects'
import app from '../../pages'
import * as combine from '../../utils/config'

export default function* root() {
    yield all(combine.combineSagas(app).map(item => fork(item)))
}