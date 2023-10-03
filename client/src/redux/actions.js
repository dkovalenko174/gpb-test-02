// Действия для загрузки списка услуг
export const FETCH_SERVICES_REQUEST = "FETCH_SERVICES_REQUEST";
export const FETCH_SERVICES_SUCCESS = "FETCH_SERVICES_SUCCESS";
export const FETCH_SERVICES_FAILURE = "FETCH_SERVICES_FAILURE";

// Действие для загрузки деталей услуг
export const FETCH_SERVICE_DETAILS_REQUEST = "FETCH_SERVICE_DETAILS_REQUEST";
export const FETCH_SERVICE_DETAILS_SUCCESS = "FETCH_SERVICE_DETAILS_SUCCESS";
export const FETCH_SERVICE_DETAILS_FAILURE = "FETCH_SERVICE_DETAILS_FAILURE";

// Action Creator для загрузки списка услуг
export const fetchServicesRequest = signal => ({
  type: FETCH_SERVICES_REQUEST,
  payload: signal,
});

export const fetchServicesSuccess = services => ({
  type: FETCH_SERVICES_SUCCESS,
  payload: services,
});

export const fetchServicesFailure = error => ({
  type: FETCH_SERVICES_FAILURE,
  payload: error,
});

// Action Creator для загрузки деталей услуги
export const fetchServiceDetailsRequest = serviceId => ({
  type: FETCH_SERVICE_DETAILS_REQUEST,
  payload: serviceId,
});

export const fetchServiceDetailsSuccess = service => ({
  type: FETCH_SERVICE_DETAILS_SUCCESS,
  payload: service,
});

export const fetchServiceDetailsFailure = error => ({
  type: FETCH_SERVICE_DETAILS_FAILURE,
  payload: error,
});
