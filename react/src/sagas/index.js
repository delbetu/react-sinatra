import { takeEvery, call, put  } from "redux-saga/effects"
import { addNumberAction } from '../actions'
import { ADD_REMOTE_USER_IDS } from '../constants/action-types'

export default function* watcherSaga() {
  yield takeEvery(ADD_REMOTE_USER_IDS, workerAddRemoteUserIds)
}

function* workerAddRemoteUserIds() {
  try {
    const ids = yield call(fetchUserIds)

    for(let i = 0; i < ids.length; i++) {
      let id = ids[i]
      yield put(addNumberAction(id))
    }

  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e  })
  }
}

function fetchUserIds() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => users.map( u => u.id ))
}
