import Vue from 'vue'

const baseUrl = ''

function fetch (api, method = 'post') {
  api.param = api.param || {}
  if (!api.isMock && method.toLowerCase() === 'post') {
    return Vue.http.post(
      baseUrl + api.url,
      api.param,
      {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': ''
      }
    ).then((res) => {
      return res
    }).catch((err) => {
      console.log(err)
    })
  } else if (!api.isMock && method.toLowerCase() === 'get') {
    return Vue.http.get(
      baseUrl + api.url,
      {
        'Content-Type': 'application/json;charset=utf-8'
      }
    ).then((res) => {
      return res
    }).catch((err) => {
      console.log(err)
    })
  } else {
    return Vue.http.get(
      api.mockUrl,
      {
        'Content-Type': 'application/json;charset=utf-8'
      }
    ).then((res) => {
      return res
    }).catch((err) => {
      console.log(err)
    })
  }
}

export function fetchApiDemo (param) {
  return fetch({
    isMock: true,
    url: '',
    mockUrl: '../../static/demo.json',
    param
  })
}
