function PostItem(prop) {
  var urlPic = `tmp/${prop.image}`;
  return (
    <div className='post-item'>
      <img src={urlPic} alt={prop.image} />
      <h2 className='post-title'>{prop.title}</h2>
      <p className='post-desc'>{prop.description}</p>
      <p className='post-published'>{prop.published}</p>
    </div>
  )
}

const App = (
  <div className='wrapper'>
    <div className='posts-list'>
      <PostItem
        image='h1.jpg'
        title='Trung Quốc điều thêm 17 tàu đến khu vực giàn khoan'
        description='Để bảo vệ giàn khoan, Trung Quốc đã điều thêm 17 tàu các loại so với hôm trước, sẵn sàng đâm va vào tàu Việt Nam.'
        published='5 phút trước'
      />
      <PostItem
        image='h2.jpg'
        title='Trọng tài - vết đen của kỳ World Cup sôi động'
        description='World Cup 2014 chưa đi hết lượt đầu vòng bảng nhưng các trọng tài đẳng cấp FIFA đã có tới bốn trận bị chỉ trích dữ dội.'
        published='10 phút trước'
      />
      <PostItem
        image='h4.jpg'
        title='Những mỹ nhân Việt duyên dáng ở tuổi tứ tuần'
        description='Việt Trinh, Thu Hà, Hồng Nhung, Thanh Lam... vẫn giữ được nét thanh xuân, tươi trẻ và cuốn hút theo thời gian nhờ phong cách làm đẹp tinh tế.'
        published='15 phút trước'
      />
    </div>
  </div>
)

ReactDOM.render(App, document.getElementById("root"))