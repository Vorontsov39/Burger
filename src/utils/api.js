const BURGER_URL = 'https://norma.nomoreparties.space/api/ingredients'

const checkResponse = (response) => {
    if (response.ok) {
        return response.json();
    }
    return Promise.reject(`Ошибка: ${response.status}`)
}

const request = (url, options) => {
    return fetch(url, options).then(checkResponse)
}

export const getIngredients = () => {
    return  request(BURGER_URL, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        }
    })
}
