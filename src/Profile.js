import React from 'react';


class Profile extends React.Component {
  state = {contacts:[]}

  async componentDidMount(){
    const res = await fetch('http://contact-app-endpoints.herokuapp.com/api');
    const data = await res.json();
    this.setState({contacts: data.contacts})
  }

  render(){
    return (
      <div onClick = {this.getContacts}>
        {
          this.state.contacts.map((item) => {
            return (
              <div>
                  {item.address} {item.name}
              </div>
            )
          })
        }
      </div>
    )
  }
}


  export default Profile;