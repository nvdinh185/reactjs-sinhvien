function PostItem(prop) {
  var urlPic = `images/${prop.hinhAnh}`;
  return (
    <tr>
      <td>{prop.id}</td>
      <td><a href="#" title={prop.tenHoa}>{prop.tenHoa}</a></td>
      <td>{prop.loaiHoa}</td>
      <td><img src={urlPic} alt={prop.hinhAnh} /></td>
    </tr>
  )
}

const listHoa = [
  {
    id: 1,
    tenHoa: 'Hoa Phong Lan',
    loaiHoa: 'Khai trương',
    hinhAnh: 'hoa1.jpg'
  },
  {
    id: 2,
    tenHoa: 'Hoa tỷ muội',
    loaiHoa: 'Khai trương',
    hinhAnh: 'hoa2.jpg'
  },
  {
    id: 3,
    tenHoa: 'Hoa Violet',
    loaiHoa: 'Hoa kỷ niệm',
    hinhAnh: 'hoa3.jpg'
  },
  {
    id: 4,
    tenHoa: 'Hoa thủy tiên',
    loaiHoa: 'Hoa tình yêu',
    hinhAnh: 'hoa4.jpg'
  },
  {
    id: 5,
    tenHoa: 'Hoa cẩm chướng',
    loaiHoa: 'Hoa hạnh phúc',
    hinhAnh: 'hoa5.jpg'
  }
]

const App = (
  <div>
    <h3>Danh sách hoa</h3>
    <table className='table-css'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Tên hoa</th>
          <th>Loại hoa</th>
          <th>Hình ảnh</th>
        </tr>
      </thead>
      <tbody>
        {listHoa.map(hoa =>
          <PostItem
            id={hoa.id}
            tenHoa={hoa.tenHoa}
            loaiHoa={hoa.loaiHoa}
            hinhAnh={hoa.hinhAnh}
          />
        )}
      </tbody>
    </table>
    <p>Copyright &copy; 2013 <a href="#" title="VinaTAB.EDU">VinaTAB.EDU</a></p>
  </div>
)

ReactDOM.render(App, document.getElementById("root"))