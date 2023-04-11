function receivesAFunction (cb) {
    console.log(cb());
  }
  receivesAFunction(function () { return 'spy'});

function returnsANamedFunction() {
    return function returnsANamedFunction() {

    }
}

function returnsAnAnonymousFunction () {
    return function () {};
}