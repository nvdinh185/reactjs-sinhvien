function Student(props) {
  return (
    <li>
      <h2>Name: {props.name}</h2>
      <p>Address: {props.address}</p>
      <button>Sửa</button>
      <button>Xóa</button>
    </li>
  )
}

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validName: '',
      validAdd: '',
      listStudents: [
        {
          id: '1',
          name: "Dinh",
          address: "hue"
        },
        {
          id: '2',
          name: "Nam",
          address: "quang nam"
        },
        {
          id: '3',
          name: "Tan",
          address: "da nang"
        },
        {
          id: '4',
          name: "Hung",
          address: "hue"
        },
        {
          id: '5',
          name: "Tri",
          address: "quang tri"
        },
        {
          id: '6',
          name: "Anh",
          address: "hue"
        },
        {
          id: '7',
          name: "Binh",
          address: "da nang"
        }
      ]
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit = function (e) {
    e.preventDefault();
    const formValue = {};
    for (const el of e.target) {
      if (el.name) {
        formValue[el.name] = el.value;
      }
    }
    var check = true;
    if (!formValue['name']) {
      this.setState({
        validName: 'Vui lòng nhập tên'
      });
      check = false;
    }
    if (!formValue['address']) {
      this.setState({
        validAdd: 'Vui lòng nhập địa chỉ'
      });
      check = false;
    }

    function generateUuid() {
      return 'xxxx-xxxx-xxx-xxxx'.replace(/[x]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }
    formValue['id'] = generateUuid();

    if (check) {
      var newList = [
        ...this.state.listStudents,
        formValue
      ]
      this.setState({
        listStudents: newList
      });
    }
  }

  handleBlur(e) {
    if (e.target.name == 'name') {
      if (!e.target.value) {
        this.setState({
          validName: 'Vui lòng nhập tên'
        });
      }
    } else if (e.target.name == 'address') {
      if (!e.target.value) {
        this.setState({
          validAdd: 'Vui lòng nhập địa chỉ'
        });
      }
    }
  }

  handleInput(e) {
    if (e.target.name == 'name') {
      this.setState({
        validName: ''
      });
    } else if (e.target.name == 'address') {
      this.setState({
        validAdd: ''
      });
    }
  }

  render() {

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Tên</label>
            <input onBlur={this.handleBlur} onInput={this.handleInput} type="text"
              name="name" className={this.state.validName && 'invalid'} />
            <span style={{
              display: 'block',
              color: 'red',
              fontStyle: 'italic'
            }}>{this.state.validName}</span>
          </div>
          <br />
          <div>
            <label>Địa chỉ</label>
            <input onBlur={this.handleBlur} onInput={this.handleInput} type="text"
              name="address" className={this.state.validAdd && 'invalid'} />
            <span style={{
              display: 'block',
              color: 'red',
              fontStyle: 'italic'
            }}>{this.state.validAdd}</span>
          </div>
          <div>
            <button>Thêm</button>
            <button style={{ display: 'none' }}>Sửa</button>
          </div>
        </form>
        <ul>
          {this.state.listStudents.map((student, idx) =>
            <Student
              key={idx}
              name={student.name}
              address={student.address}
            />
          )}
        </ul>
      </>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppComponent />
  </React.StrictMode>
);