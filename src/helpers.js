
//Our handleResponse method will allow us to decode the JSON data received from BACK.
export const handleResponse = (response) => {
    return response.json().then(json => {
        return response.ok ? json : Promise.reject(json)
    })
}