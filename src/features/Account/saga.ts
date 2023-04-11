import { call, put, race, take, takeLatest } from "redux-saga/effects";

import {
  addLocationApi,
  getLocationsApi,
  removeLocationApi,
  updateLocationApi,
} from "src/api/services";
import { handleRequest } from "src/redux/saga/handleRequest";
import {
  addLocationRequest,
  addLocationError,
  addLocationSuccess,
  getLocationsSuccess,
  getLocationsError,
  getLocationsRequest,
  removeLocationError,
  removeLocationRequest,
  removeLocationSuccess,
  updateLocationError,
  updateLocationRequest,
  updateLocationSuccess,
  updateSelectedLocationSuccess,
  updateSelectedLocationError,
  updateSelectedLocationRequest,
  setSelectedLocationId,
} from "./slice";
import {
  negativeButtonClick,
  positiveButtonClick,
  toggleModal,
} from "src/components/Modal/slice";
import { ModalKey } from "src/components/Modal/constants";

function* getLocationsRequestSaga() {
  yield call(
    handleRequest,
    { success: getLocationsSuccess, error: getLocationsError },
    getLocationsApi
  );
}

function* addLocationRequestSaga(
  action: ReturnType<typeof addLocationRequest>
) {
  yield call(
    handleRequest,
    { success: addLocationSuccess, error: addLocationError },
    addLocationApi,
    action.payload
  );
}

function* addLocationSuccessSaga() {
  yield put(toggleModal(ModalKey.ADD_LOCATION));
  yield put(getLocationsRequest());
}

function* updateLocationRequestSaga(
  action: ReturnType<typeof updateLocationRequest>
) {
  yield call(
    handleRequest,
    { success: updateLocationSuccess, error: updateLocationError },
    updateLocationApi,
    action.payload
  );
}

function* updateLocationSuccessSaga() {
  yield put(toggleModal(ModalKey.ADD_LOCATION));
  yield put(getLocationsRequest());
}

function* updateSelectedLocationRequestSaga(
  action: ReturnType<typeof updateSelectedLocationRequest>
) {
  yield call(
    handleRequest,
    {
      success: updateSelectedLocationSuccess,
      error: updateSelectedLocationError,
    },
    updateLocationApi,
    { id: action.payload, isSelected: true }
  );
}

function* updateSelectedLocationSuccessSaga(
  action: ReturnType<typeof updateSelectedLocationSuccess>
) {
  yield put(setSelectedLocationId(action.payload.id));
}

function* removeLocationRequestSaga(
  action: ReturnType<typeof removeLocationRequest>
) {
  const { positive, negative } = yield race({
    positive: take(positiveButtonClick.type),
    negative: take(negativeButtonClick.type),
  });

  if (positive) {
    yield call(
      handleRequest,
      { success: removeLocationSuccess, error: removeLocationError },
      removeLocationApi,
      action.payload
    );
  }
}

function* removeLocationSuccessSaga() {
  yield put(getLocationsRequest());
  yield put(toggleModal(ModalKey.REMOVE_LOCATION_CONFIRMATION));
}

function* authSaga() {
  yield takeLatest(addLocationRequest.type, addLocationRequestSaga);
  yield takeLatest(addLocationSuccess.type, addLocationSuccessSaga);
  yield takeLatest(updateLocationRequest.type, updateLocationRequestSaga);
  yield takeLatest(updateLocationSuccess.type, updateLocationSuccessSaga);
  yield takeLatest(
    updateSelectedLocationRequest.type,
    updateSelectedLocationRequestSaga
  );
  yield takeLatest(
    updateSelectedLocationSuccess.type,
    updateSelectedLocationSuccessSaga
  );
  yield takeLatest(removeLocationRequest.type, removeLocationRequestSaga);
  yield takeLatest(removeLocationSuccess.type, removeLocationSuccessSaga);
  yield takeLatest(getLocationsRequest.type, getLocationsRequestSaga);
}

export default authSaga;
