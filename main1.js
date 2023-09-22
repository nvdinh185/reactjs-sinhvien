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
      id: '',
      name: '',
      address: '',
      isEdit: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleClickEdit = this.handleClickEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

    if (check) {
      if (formValue['id']) {
        var edId = formValue['id'];
        var idx = this.state.listStudents.findIndex(student => student.id == edId);
        this.state.listStudents.splice(idx, 1, formValue);
        this.setState({
          listStudents: this.state.listStudents,
          id: '',
          name: '',
          address: '',
          isEdit: false
        });
      } else {
        formValue['id'] = generateUuid();
        var newList = [
          ...this.state.listStudents,
          formValue
        ]
        this.setState({
          listStudents: newList,
          name: '',
          address: ''
        });

      }
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

  handleClickEdit(student) {
    // console.log(student);
    this.setState({
      id: student.id,
      name: student.name,
      address: student.address,
      isEdit: true
    });
  }

  handleDelete(student) {
    if (confirm('Bạn có chắc muốn xóa ?')) {
      var idx = this.state.listStudents.findIndex(st => st.id == student.id);
      this.state.listStudents.splice(idx, 1);
      this.setState({
        listStudents: this.state.listStudents
      });
    }
  }

  render() {

    return (
      <>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type='hidden' name='id' value={this.state.id} />
          <div>
            <label>Tên</label>
            <input onBlur={(e) => this.handleBlur(e)} onInput={(e) => this.handleInput(e)} type="text"
              name="name" className={this.state.validName && 'invalid'} value={this.state.name}
              onChange={(e) => { this.setState({ name: e.target.value }) }} />
            <span style={{
              display: 'block',
              color: 'red',
              fontStyle: 'italic'
            }}>{this.state.validName}</span>
          </div>
          <br />
          <div>
            <label>Địa chỉ</label>
            <input onBlur={(e) => this.handleBlur(e)} onInput={(e) => this.handleInput(e)} type="text"
              name="address" className={this.state.validAdd && 'invalid'} value={this.state.address}
              onChange={(e) => { this.setState({ address: e.target.value }) }} />
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
            <li key={idx}>
              <h2>Name: {student.name}</h2>
              <p>Address: {student.address}</p>
              <button onClick={() => this.handleClickEdit(student)}>Sửa</button>
              <button onClick={() => this.handleDelete(student)}>Xóa</button>
            </li>
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