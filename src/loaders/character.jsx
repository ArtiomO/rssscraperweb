export async function getCharacter(id) {
  const response = await fetch('http://localhost:8080/character/' + id)
  const character = await response.json()
  return character
}

export async function createCharacter(params) {
  postData('http://localhost:8080/character', params).then((data) => {
    console.log(data) // JSON data parsed by `data.json()` call
  })
}

// Example POST method implementation:
async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  })
  return response.json()
}
