import * as axios from "axios";
// export const history = createBrowserHistory();

const HEADERS_NOT_AUTHORIZATION = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
};

export function getHeaderMultiple() {
    return {
        'Content-Type': 'multipart/form-data; boundary=something',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
    };
}

export function getHeader() {
    return {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
    };
}

// axios.interceptors.response.use(
//     (success) => {
//         if (success.data.errors) {
//             // message.error(success.data.errors.message || 'An error occurred, please try again later.');
//             return Promise.reject(success);
//         }
//         return success;
//     },
//     (fail) => {
//         let msg = fail.response.data.message && !Array.isArray(fail.response.data.message) ? fail.response.data.message : 'An error occurred, please try again later.';
//         // message.error(msg === 'Forbidden resource' ? 'You do not have permission or data does not exist' : msg);
//         if (msg === 'Forbidden resource' &&  fail.response.status === 403) {
//             // history.push('#/403');
//             // history.go('#/403');
//         }

//         return Promise.reject(fail);
//     }
// );

const api = {
    postLogin: async (endpoint, params) => {
        return axios.default
            .post(endpoint, params, {
                headers: HEADERS_NOT_AUTHORIZATION
            })
            .then(
                (response) => {
                    console.log(response);
                    return response.data;
                },
                (err) => {
                    return err.response || err;
                }
            )
            .catch(
                (response) => {
                    return response.data;
                },
                (err) => {
                    return err.response || err;
                }
            );
    },
    post: (endpoint, params) => {
        return axios.default
            .post(endpoint, params, {
                headers: getHeader()
            })
            .then(
                (response) => {
                    return response.data;
                },
                (err) => {
                    return err.response || err;
                }
            )
            .catch(
                (response) => {
                    return response.data;
                },
                (err) => {
                    return err.response || err;
                }
            );
    },

    postMultiplePart: (endpoint, params) => {
        return axios.default
            .post(endpoint, params, {
                headers: getHeaderMultiple(),
            })
            .then(
                (response) => {
                    return response.data;
                },
                (err) => {
                    return err.response || err;
                }
            )
            .catch(
                (response) => {
                    return response.data;
                },
                (err) => {
                    return err.response || err;
                }
            );
    },

    get: (endpoint, params = {}) => {
        return axios.default
            .get(endpoint, {
                params: params,
                headers: getHeader()
            })
            .then(
                (response) => {
                    return response.data;
                },
                (err) => {
                    return err.response || err;
                }
            )
            .catch(
                (response) => {
                    return response.data;
                },
                (err) => {
                    return err.response || err;
                }
            );
    },

    put: (endpoint, params) => {
        return axios.default
            .put(endpoint, params, {
                headers: getHeader(),
            })
            .then(
                (response) => {
                    return response.data;
                },
                (err) => {
                    return err.response || err;
                }
            )
            .catch(
                (response) => {
                    return response.data;
                },
                (err) => {
                    return err.response || err;
                }
            );
    },

    delete: (endpoint, params) => {
        return axios.default
            .delete(endpoint, {
                params: params,
                headers: getHeader()
            })
            .then(
                (response) => {
                    return response.data;
                },
                (err) => {
                    return err.response || err;
                }
            )
            .catch(
                (response) => {
                    return response.data;
                },
                (err) => {
                    return err.response || err;
                }
            );
    },

    doGet: (endpoint, callback, errorCallBack) => {
        axios.default.get(
            endpoint, { headers: getHeader() }
        ).then(
            (success) => {
                if (typeof callback === 'function') {
                    callback(success);
                }
            },
            (err) => {
                if (typeof errorCallBack === 'function') {
                    errorCallBack(err);
                }
            }
        ).catch(error => {
            if (typeof errorCallBack === 'function') {
                errorCallBack(error);
            }
        })
    },
    doPost: (endpoint, body, callback, errorCallBack) => {
        axios.default.post(
            endpoint, body, { headers: getHeader() }
        ).then(
            (success) => {
                if (typeof callback === 'function') {
                    callback(success);
                }
            },
            (err) => {
                if (typeof errorCallBack === 'function') {
                    errorCallBack(err);
                }
            }
        ).catch(error => {
            if (typeof errorCallBack === 'function') {
                errorCallBack(error);
            }
        })
    },
    doPut: (endpoint, body, callback, errorCallBack) => {
        axios.default.put(endpoint, body, {
            headers: getHeader()
        }).then(response => {
            if (typeof callback === 'function') {
                callback(response);
            }
        }, (err) => {
            if (typeof errorCallBack === 'function') {
                errorCallBack(err);
            }
        }).catch(error => {
            if (typeof errorCallBack === 'function') {
                errorCallBack(error);
            }
        })
    },
    doDelete: (endpoint, params, callback, errorCallBack) => {
        axios.default.delete(endpoint, {
            params: params,
            headers: getHeader()
        }).then(response => {
            if (typeof callback === 'function') {
                callback(response);
            }
        }, (err) => {
            if (typeof errorCallBack === 'function') {
                errorCallBack(err);
            }
        }).catch(error => {
            if (typeof errorCallBack === 'function') {
                errorCallBack(error);
            }
        })
    },
};

export { api }
