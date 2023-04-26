export async function postData(url = '', data = '', headers = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: headers,
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: data // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export async function getData(url = '', data = '', headers = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: headers,
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
