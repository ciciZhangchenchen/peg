import Vue from 'vue'

const baseUrl = 'http://www.isummer.site:6880/api'

function jsonToUrlParams (json) {
  let url = ''
  for (let i in json) {
    url += `&${i}=${json[i]}`
  }
  return url.substr(1, url.length - 1)
}

function fetch (api, method = 'post') {
  api.param = api.param || {}
  if (!api.isMock && method.toLowerCase() === 'post') {
    return Vue.http.post(
      baseUrl + api.url,
      api.param,
      {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    ).then((res) => {
      return res.body
    }).catch((err) => {
      console.log(err)
    })
  } else if (!api.isMock && method.toLowerCase() === 'get') {
    const getUrl = `${baseUrl}${api.url}?${jsonToUrlParams(api.param)}`
    return Vue.http.get(
      getUrl,
      {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    ).then((res) => {
      return res.body
    }).catch((err) => {
      console.log(err)
    })
  } else {
    return Vue.http.get(
      api.mockUrl,
      {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    ).then((res) => {
      return res
    }).catch((err) => {
      console.log(err)
    })
  }
}

export function fetchApiDemo (param) {
  param = {
    sample1: 1234
  }
  return fetch({
    isMock: false,
    url: '/test/test.json',
    mockUrl: '../../static/demo.json',
    param
  })
}
