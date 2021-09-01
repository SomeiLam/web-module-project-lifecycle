import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import './App.css';

class App extends React.Component {
  state = {
    info: [],
    user: 'someilam'
  }

  async componentDidMount() {
    console.log("App: Component Mounted");
    await axios.get('https://api.github.com/users/someilam')
      .then(res => {
        this.setState({
          info: res.data
        });
      })
      .catch(err => {
        console.error(err);
      })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.user}`)
      .then(res => {
        this.setState({
          ...this.state,
          info: res.data
        })
      })
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      user: e.target.value
    })
  }

  changeUser = (login) => {
    console.log("Change User");
    axios.get(`https://api.github.com/users/${login}`)
    .then(res => {
      this.setState({
        info: res.data
      });
      console.log(this.state.info)
    })
    .catch(err => {
      console.error(err);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>GitHub User Card</h1>
        </header>
        <div className="search-user">
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.user} onChange={this.handleChange} />
            <button>Fetch User</button>
          </form>
        </div>
        {
          (!this.state.user) ? <div>Loading</div>:<UserCard info={this.state.info} changeUser={this.changeUser}/>
        }
        
      </div>
    );
  }
}

export default App;
