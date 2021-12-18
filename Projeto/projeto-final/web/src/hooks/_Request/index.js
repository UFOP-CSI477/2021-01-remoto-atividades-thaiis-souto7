import { create } from 'axios';

export class RequestAPI {
    constructor(baseURL = "http://127.0.0.1:4003") {
        this.api = create({ baseURL });
    }

    tokenInvalidReturn(message) {
        const messageType = ["token_is_invalid", "token_missing", "key_is_invalid"];
        if (messageType.indexOf(message) !== -1) {
            window.location.href = window.location.origin + "/login";
        }
    }

    async get(path, options) {
        return new Promise(async (res, rej) => {
            this.api.get(path, {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("token")
                }
            }).then(result => res(result.data)).catch(e => {
                let error = Object.assign({}, e);
                if (error.response.data.data.hasOwnProperty('message')) {
                    this.tokenInvalidReturn(error.response.data.data.message);
                } 
            });
        })
    }

    async post(path, options) {
        return new Promise(async (res, rej) => {
            this.api.post(path, options.body, {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("token")
                }
            }).then(result => {
                return res(result.data);
            }).catch(e => {
                let error = Object.assign({}, e);
                if (error.response.data.data.hasOwnProperty('message')) {
                    this.tokenInvalidReturn(error.response.data.data.message);
                } 
            });
        })
    }

    async put(path, options) {
        return new Promise(async (res, rej) => {
            this.api.put(path, options.body, {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("token")
                }
            }).then(result => res(result.data)).catch(e => {
                let error = Object.assign({}, e);
                if (error.response.data.data.hasOwnProperty('message')) {
                    this.tokenInvalidReturn(error.response.data.data.message);
                } 
            });
        })
    }

    async delete(path, options) {
        return new Promise(async (res, rej) => {
            this.api.delete(path, {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("token")
                }
            }).then(result => res(result.data)).catch(e => {
                let error = Object.assign({}, e);
                if (error.response.data.data.hasOwnProperty('message')) {
                    this.tokenInvalidReturn(error.response.data.data.message);
                } 
            });
        })
    }
};