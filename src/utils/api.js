const BURGER_URL = 'https://norma.nomoreparties.space/api'

const checkResponse = (response) => {
    if (response.ok) {
        return response.json();
    }
    return Promise.reject(response)
}

const request = (url, options) => {
    return fetch(url, options).then(checkResponse)
}

export const getIngredients = () => {
    return  request(`${BURGER_URL}/ingredients`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        }
    })
}

export const makeOrder = (ingredients) => {
    return request(`${BURGER_URL}/orders`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(ingredients)
    })
}
