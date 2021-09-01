import React from 'react';
import axios from 'axios';
import '../App.css';

class Followers extends React.Component {
    state = {
        followers: [],
        following: [],
        show: false
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/${this.props.name}/followers`)
            .then(res => {
                this.setState({
                    followers: res.data
                })
            })
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div className="user-list">
                <h3>Followers: {this.props.followers} users </h3>
                <h4 className="open"
                    onClick={() => {
                        this.setState({ show: !this.state.show })
                    }}>{this.state.show ? 'Hide' : 'Show'}</h4>
                <ul className="followers-wrapper">
                    {
                        this.state.show && this.state.followers.map(user => {
                            return (
                                <li className="follower-list"
                                    key={user.id}
                                    onClick={e => this.props.changeUser(user.login)}>
                                    {user.login}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Followers;