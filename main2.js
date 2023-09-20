function PostItem() {
  return (
    <div className='post-item'>
      <img src='tmp/h1.jpg' alt='h1.jpg' />
      <h2 className='post-title'>Trung Quốc điều thêm 17 tàu đến khu vực giàn khoan</h2>
      <p className='post-desc'>Để bảo vệ giàn khoan, Trung Quốc đã điều thêm 17 tàu các loại so với hôm trước, sẵn sàng đâm va vào tàu Việt Nam.</p>
      <p className='post-published'>5 phút trước</p>
    </div>
  )
}

const App = (
  <div className='wrapper'>
    <div className='posts-list'>
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  </div>
)

ReactDOM.render(App, document.getElementById("root"))