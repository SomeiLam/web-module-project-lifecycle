import React from 'react';
import Followers from './Followers';
import '../App.css';

class UserCard extends React.Component {
    render() {
        return (
            <div className="user-card" key={this.props.info.id}>
                <img className="user-image"
                    src={this.props.info.avatar_url}
                    alt={this.props.info.name} />
                <h2 className="name">{this.props.info.name}</h2>
                <h3 className="bio">{this.props.info.bio}</h3>
                <h3 className="repo">Public Repos: {this.props.info.public_repos}</h3>
                <div className="followers">
                    <Followers name={this.props.info.login}
                        followers={this.props.info.followers}
                        following={this.props.info.following}
                        changeUser={this.props.changeUser} />
                </div>
                <a href={this.props.info.html_url} target="_blank" rel="noopener noreferrer">View User on GitHub</a>
            </div>
        )
    }
}

export default UserCard;