const HelloWorld = React.createElement(
  "p", {
  id: 'hello',
  className: 'text-primary'
}, "Hello world Component")

ReactDOM.render(
  HelloWorld,
  document.getElementById("root")
)