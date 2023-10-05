import { combineReducers } from "redux";

import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICE_DETAILS_REQUEST,
  FETCH_SERVICE_DETAILS_SUCCESS,
  FETCH_SERVICE_DETAILS_FAILURE,
} from "./actions";

const initialServicesState = {
  loading: false,
  services: [],
  error: null,
  errorMessage: "",
};

export const servicesReducer = (state = initialServicesState, action) => {
  switch (action.type) {
    case FETCH_SERVICES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        errorMessage: "",
      };
    case FETCH_SERVICES_SUCCESS:
      return {
        ...state,
        services: action.payload,
        loading: false,
      };
    case FETCH_SERVICES_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        errorMessage: "Ошибка: Сервисы отсутствуют",
      };
    default:
      return state;
  }
};

const initialServiceDetailsState = {
  service: {},
  loading: false,
  error: null,
  errorMessage: "",
};

const serviceDetailsReducer = (state = initialServiceDetailsState, action) => {
  switch (action.type) {
    case FETCH_SERVICE_DETAILS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_SERVICE_DETAILS_SUCCESS:
      return {
        ...state,
        service: action.payload,
        loading: false,
        error: null,
        errorMessage: "",
      };
    case FETCH_SERVICE_DETAILS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        errorMessage: "Ошибка: Сервисы отсутствуют",
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  services: servicesReducer,
  servicesDetails: serviceDetailsReducer,
});
