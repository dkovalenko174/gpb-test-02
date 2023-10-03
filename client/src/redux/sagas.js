import { takeLatest, call, put } from "redux-saga/effects";
import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICE_DETAILS_REQUEST,
  FETCH_SERVICE_DETAILS_SUCCESS,
  FETCH_SERVICE_DETAILS_FAILURE,
} from "./actions";

import {
  fetchServicesSuccess,
  fetchServicesFailure,
  fetchServiceDetailsSuccess,
  fetchServiceDetailsFailure,
} from "../redux/actions";
import axios from "axios";

const getServices = async signal => {
  const response = await axios.get("http://localhost:7070/api/services", {
    signal,
  });

  return response.data;
};

// Сага для загрузки списка услуг
function* fetchServicesSaga(action) {
  const { payload } = action;
  try {
    const response = yield call(getServices, payload);

    yield put(fetchServicesSuccess(response));
  } catch (error) {
    yield put(fetchServicesFailure(error));
  }
}

const getServiceDetails = async serviceId => {
  const response = await axios.get(
    `http://localhost:7070/api/services/${serviceId}`
  );

  return response.data;
};
// Сага для загрузки деталей услуги
function* fetchServiceDetailsSaga(action) {
  const { payload } = action;

  try {
    const response = yield call(getServiceDetails, payload);
    yield put(fetchServiceDetailsSuccess(response));
  } catch (error) {
    yield put(fetchServiceDetailsFailure(error));
  }
}

// Главный сага, объединяющий все саги
export default function* rootSaga() {
  yield takeLatest(FETCH_SERVICES_REQUEST, fetchServicesSaga);
  yield takeLatest(FETCH_SERVICE_DETAILS_REQUEST, fetchServiceDetailsSaga);
}
