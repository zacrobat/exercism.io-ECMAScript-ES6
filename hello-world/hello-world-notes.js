// note class export can be handled two ways:
class HelloWorld {
// code here
export default HelloWorld;

// or:
export default class HelloWorld {
// code here

// my solution to hello world using 'or':
class HelloWorld {
  hello(name) {
    return `Hello, ${name || 'World'}!`;
  }
}
export default HelloWorld;

// other submissions assign a value to the argument:
class HelloWorld {
  hello(name = 'World') {
  return `Hello, ${name}!`
  }
}
export default HelloWorld;
