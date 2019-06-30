function exercise1Fn () {
  let exercise1 = new Promise((resolve) => {
    /* votre solution ici */
    setTimeout(resolve('I love promise'), 500);
  });

  return exercise1.then(value => console.log(value))/* votre solution ici */
}

function exercise2Fn () {
  let exercise2 = new Promise((resolve, reject) => {
    /* votre solution ici */
    setTimeout(reject('I hate rejection'), 500)
  });

  return exercise2.catch(reason => console.log(reason))/* votre solution ici */
}

function exercise3Fn () {
  let exercise3 = Promise.resolve(1);

  function plusFive(value) {
    /* votre solution ici */
    return value + 5
  }

  function multiplyByTwo(value) {
    /* votre solution ici */
    return value * 2
  }

  function minusFour(value) {
    /* votre solution ici */
    return value - 4
  }

  return exercise3/* votre solution ici */
      .then(plusFive)
      .then(multiplyByTwo)
      .then(minusFour);

}

module.exports = {exercise1Fn, exercise2Fn, exercise3Fn};
