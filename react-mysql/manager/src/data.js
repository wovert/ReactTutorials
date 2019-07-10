const SERVER = 'http://localhost:8080'

async function get(_url) {
  let url = `${SERVER}/${_url}`

  try {
    let res = await fetch(url)
    let data = await res.json()
    if (data.error) {
      alert('请刷新重试')
    }
    return data
  } catch(e) {
    alert('请刷新重试')
    throw e
  }
}

export default {
  get
}
