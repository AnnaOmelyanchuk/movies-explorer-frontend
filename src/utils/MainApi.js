class MainApi {
    constructor({ baseUrl, moviesUrl,
        usermeUrl, urlSourceFilms }) {
        this.baseUrl = baseUrl;
        this.moviesUrl = moviesUrl;
        this.usermeUrl = usermeUrl;
        this.urlSourceFilms = urlSourceFilms;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    _request(url, options) {
        return fetch(url, options).then(this._checkResponse)
    }

    getUserInformationMe() {
        return this._request(this.usermeUrl, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        })
    }

    register = (name, password, email) => {
        return fetch(`${this.baseUrl}/signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, password, email })
        })
            .then(this._checkResponse)
    };

    authorize = (password, email) => {
        return fetch(`${this.baseUrl}/signin`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password, email })
        })
            .then(this._checkResponse)
            .then((data) => {
                if (data.token) {
                    localStorage.setItem('jwt', data.token);
                    return data;
                }
            })
    };

    checkToken = (token) => {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(this._checkResponse)
    }

    setUserInfo(name, email) {
        return this._request(this.usermeUrl, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
        })
    }

    getSavedMovies() {
        return this._request(this.moviesUrl, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        })
    }

    saveMovie(data) {
        return this._request(this.moviesUrl, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                country: data.country,
                director: data.director,
                duration: data.duration,
                year: data.year,
                description: data.description,
                image: this.urlSourceFilms + data.image.url,
                trailerLink: data.trailerLink,
                thumbnail: this.urlSourceFilms + data.image.formats.thumbnail.url,
                movieId: data.id,
                nameRU: data.nameRU,
                nameEN: data.nameEN,
            })
        })
    }

    deleteMovie(data) {
        return this._request(`${this.moviesUrl}/${data._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json'
            },
        })
    }

}

const api = new MainApi({
    baseUrl: 'http://localhost:3000',
    moviesUrl: 'http://localhost:3000/movies',
    usermeUrl: 'http://localhost:3000/users/me',

  //  baseUrl: 'https://api.anyafilms.nomoredomainsicu.ru',
 //   moviesUrl: 'https://api.anyafilms.nomoredomainsicu.ru/movies',
  //  usermeUrl: 'https://api.anyafilms.nomoredomainsicu.ru/users/me',

    urlSourceFilms: 'https://api.nomoreparties.co/'
});
export default api;