function Header() {
  return (
    <div className='header'>New Header</div>
  )
}

const App = (
  <div className='text-primary'>
    <Header />
    <div className='content'>Content</div>
    <div className='footer'>Footer</div>
  </div>
)

ReactDOM.render(App, document.getElementById("root"))