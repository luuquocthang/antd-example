import { api } from './api';
import BASE_URL from './baseService';

const employeesUrl = BASE_URL + '/employees';

export const findEmployeesApi = (callback, errorCallback) => api.doPost(employeesUrl, {}, callback, errorCallback);


