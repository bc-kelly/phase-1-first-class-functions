
function receivesAFunction(callback) {
    callback();
  }

function returnsANamedFunction() {
    return receivesAFunction;
}


function returnsAnAnonymousFunction() {
    return () => 'This is an anonymous function';
}