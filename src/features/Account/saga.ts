import { call, put, race, take, takeLatest } from "redux-saga/effects";

import {
  addCategoriesApi,
  addLocationApi,
  changePasswordApi,
  getCategoriesApi,
  getLocationsApi,
  removeCategoryApi,
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
  setSelectedLocation,
  addCategoriesError,
  addCategoriesRequest,
  addCategoriesSuccess,
  getCategoriesError,
  getCategoriesSuccess,
  removeCategoryError,
  removeCategorySuccess,
  removeCategoryRequest,
  getCategoriesRequest,
  changePasswordError,
  changePasswordRequest,
  changePasswordSuccess,
} from "./slice";
import {
  negativeButtonClick,
  positiveButtonClick,
  toggleModal,
} from "src/components/Modal/slice";
import { ModalKey } from "src/components/Modal/constants";
import { resetCategories } from "../Explore/slice";

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
  yield put(setSelectedLocation(action.payload));
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

function* getCategoriesRequestSaga() {
  yield call(
    handleRequest,
    { success: getCategoriesSuccess, error: getCategoriesError },
    getCategoriesApi
  );
}

function* addCategoriesRequestSaga(
  action: ReturnType<typeof addCategoriesRequest>
) {
  yield call(
    handleRequest,
    { success: addCategoriesSuccess, error: addCategoriesError },
    addCategoriesApi,
    action.payload
  );
}
function* addCategoriesSuccessSaga() {
  yield put(resetCategories());
  yield put(getCategoriesRequest());
}

function* removeCategoryRequestSaga(
  action: ReturnType<typeof removeCategoryRequest>
) {
  yield call(
    handleRequest,
    { success: removeCategorySuccess, error: removeCategoryError },
    removeCategoryApi,
    action.payload
  );
}
function* removeCategorySuccessSaga() {
  yield put(getCategoriesRequest());
}

function* changePasswordRequestSaga(
  action: ReturnType<typeof changePasswordRequest>
) {
  yield call(
    handleRequest,
    { success: changePasswordSuccess, error: changePasswordError },
    changePasswordApi,
    action.payload
  );
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

  yield takeLatest(getCategoriesRequest.type, getCategoriesRequestSaga);
  yield takeLatest(addCategoriesRequest.type, addCategoriesRequestSaga);
  yield takeLatest(addCategoriesSuccess.type, addCategoriesSuccessSaga);
  yield takeLatest(removeCategoryRequest.type, removeCategoryRequestSaga);
  yield takeLatest(removeCategorySuccess.type, removeCategorySuccessSaga);

  yield takeLatest(changePasswordRequest.type, changePasswordRequestSaga);
}

export default authSaga;
