function checkDoubles(jokesList, newJoke) {
  if (!Array.isArray(jokesList)) {
    jokesList = [];
  }
  const jokeExists = jokesList.some((joke) => joke.value === newJoke.value);
  if (!jokeExists) {
    jokesList.push(newJoke);
  } else {
    checkDoubles();
  }
  return jokesList;
}

module.exports = checkDoubles;
