function callApi(onSuccess) {
  const url = "https://api.chucknorris.io/jokes/random";

  fetch(url)
    .then((res) => res.json())
    .then((data) => onSuccess(data));
}

module.exports = callApi;
