import React, { Component } from 'react'
import UserItem from './UserItem'

class Users extends Component {
  state = {
    users: [
      {
        login: "mojombo",
        id: 1,
        html_url: "https://github.com/mojombo",
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4"
      },
      {
        login: "defunk",
        id: 2,
        html_url: "https://github.com/defunk",
        avatar_url: "https://avatars.githubusercontent.com/u/2?v=4"
      },
      {
        login: "pjhyett",
        id: 3,
        html_url: "https://github.com/pjhyett",
        avatar_url: "https://avatars.githubusercontent.com/u/3?v=4"
      }
    ]
  }
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default Users
