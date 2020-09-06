export default class Fetcher {
  constructor(baseUrl = '', defaultOptions = {}, handlers = {}) {
    this._baseUrl = baseUrl
    this._defaultOptions = defaultOptions
    this._handlers = handlers
  }
  async get(path, options) {
    return this._fetch('GET', path, null, options)
  }
  async post(path, data, options) {
    return this._fetch('POST', path, data, options)
  }
  async _fetch(method, path, data, token) {
    const response = await fetch(path, {
      method: method,
      header: `{"Authorization": Bearer ${token}}`,
    })
    return response
  }
}
