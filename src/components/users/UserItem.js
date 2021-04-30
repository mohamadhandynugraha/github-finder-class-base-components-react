import React, { Component } from 'react'

class UserItem extends Component {
  state = {
    login: "mojombo",
    id: 1,
    html_url: "https://github.com/mojombo",
    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4"
  }
  render() {
    const { login, html_url, avatar_url } = this.state
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt="avatar user"
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
        </div>
      </div>
    )
  }
}

export default UserItem
