class Button extends React.Component {
  render() {
    const className = this.props.className;
    const children = this.props.children;
    const disabled = this.props.disabled;
    const localClassName = "btn " + className;
    return (
      <button disabled={disabled} className={localClassName}>
        {children}
      </button>
    )
  }
}

const HelloWorld = () => <h1 className='text-primary'>Hello world</h1>

const App = (
  <div className='text-primary'>
    <HelloWorld />
    <Button
      className='btn-primary'
      disabled
      children={<span className="font-weight-bold">Save</span>}
    />
    <Button className='btn-danger'>
      <span className="text-uppercase">Delete</span>
    </Button>
    <Button className='btn-info'>
      Info
    </Button>
    <Button className='btn-warning'>
      Warning
    </Button>
  </div>
)

ReactDOM.render(App, document.getElementById("root"))