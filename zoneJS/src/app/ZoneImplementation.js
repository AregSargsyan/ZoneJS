var context = null;

// Let's write a class with a constructor and three methods

class Context {
  constructor(parentContext) {
    let context;

    if (parentContext) {
      // make copy
      context = Object.create(parentContext)
      context.parent = parentContext;
    } else {
      // return current context
      context = this;
    }
    return context;
  }

  fork() {
    // return copy
    return new Context(this);
  }

  bind(fn) {
    // getting current context
    const context = this.fork();
    return () => {
      return context.run(() => fn.apply(this, arguments), this, arguments);
    }
  }

  run(fn) {
    // Replace the current context with ours

    let oldContext = context;
    context = this;
    const result = fn.call() // executing the function in context
    context = oldContext; // return everything as it was
    return result;
  }
}

// After that, replace the original setTimeout:


context = new Context();

let  nativeSetTimeout = window.setTimeout;

context.setTimeout = (callback, time) => {
  callback = context.bind(callback);
  return nativeSetTimeout.call(window, callback.bind(context), time);
};

window.setTimeout = function () {
  return context.setTimeout.apply(this, arguments);
};

// Now the client code

context.fork({}).run(() => {
  context.message = 'HI!';
  setTimeout(() => {
    console.log(context.message);
  }, 0);
});

console.log(context.message);
