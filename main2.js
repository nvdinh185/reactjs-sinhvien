class Student extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickEdit = this.handleClickEdit.bind(this);
  }

  handleClickEdit(e) {
    // console.log(e);
    this.props.onClickEdit(e);
  }

  render() {
    return (
      <li>
        <h2>Name: {this.props.name}</h2>
        <p>Address: {this.props.address}</p>
        <button onClick={() => this.handleClickEdit(this.props)}>Sửa</button>
        <button>Xóa</button>
      </li>
    )
  }
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
      ],
      name: '',
      address: '',
      isEdit: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
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

  handleEdit(e) {
    // console.log(e.name);
    this.setState({
      name: e.name,
      address: e.address,
      isEdit: true
    });
  }

  render() {

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Tên</label>
            <input onBlur={this.handleBlur} onInput={this.handleInput} type="text"
              name="name" className={this.state.validName && 'invalid'} value={this.state.name} />
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
              name="address" className={this.state.validAdd && 'invalid'} value={this.state.address} />
            <span style={{
              display: 'block',
              color: 'red',
              fontStyle: 'italic'
            }}>{this.state.validAdd}</span>
          </div>
          <div>
            <button>{this.state.isEdit ? 'Sửa' : 'Thêm'}</button>
          </div>
        </form>
        <ul>
          {this.state.listStudents.map((student, idx) =>
            <Student
              key={idx}
              name={student.name}
              address={student.address}
              onClickEdit={this.handleEdit}
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