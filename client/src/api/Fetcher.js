export default class Fetcher {
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
      body: data,
    })
    return response
  }
}
