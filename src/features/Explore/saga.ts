import { call, delay, select, takeLatest } from "redux-saga/effects";

import { categorySearchApi, getUsersApi } from "src/api/services";
import { handleRequest } from "src/redux/saga/handleRequest";
import {
  getCategoriesRequest,
  getCategoriesSuccess,
  getCategoriesError,
  getUsersSuccess,
  getUsersError,
  getUsersRequest,
} from "./slice";
import { selectSearchDistance } from "./selectors";
import { selectSelectedLocationObj } from "../Account/selectors";

function* getCategoriesRequestSaga(
  action: ReturnType<typeof getCategoriesRequest>
) {
  yield delay(500);

  yield call(
    handleRequest,
    { success: getCategoriesSuccess, error: getCategoriesError },
    categorySearchApi,
    action.payload
  );
}

function* getUsersRequestSaga(action: ReturnType<typeof getUsersRequest>) {
  const distance: ReturnType<typeof selectSearchDistance> = yield select(
    selectSearchDistance
  );
  const selectedLocation: ReturnType<typeof selectSelectedLocationObj> =
    yield select(selectSelectedLocationObj);

  const categories = action.payload;
  const [lon, lat] = selectedLocation?.geojson.coordinates ?? [];

  const reqPayload = {
    lon,
    lat,
    categories,
    distance: distance * 1000,
  };

  yield call(
    handleRequest,
    { success: getUsersSuccess, error: getUsersError },
    getUsersApi,
    reqPayload
  );
}

function* exploreSaga() {
  yield takeLatest(getCategoriesRequest.type, getCategoriesRequestSaga);
  yield takeLatest(getUsersRequest.type, getUsersRequestSaga);
}

export default exploreSaga;
