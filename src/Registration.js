import React from 'react';

    class Registration extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                email: '', password: ''
            };
            this.handleInputChange = this.handleInputChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }


        handleSubmit(event){
            event.preventDefault();
            console.log('form is submitted. Email value is', this.state.email);
        }

        handleInputChange(event){
               const target = event.target
               this.setState({[target.id]: event.target.value});
        }
        render(){
            return(
            <form className="Registration" onSubmit = {this.handleSubmit}>
                
                <input id="email"
                  type="text"
                  placeholder="E-mail"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  />
                  <input id="password"
                    type="password"
                     placeholder="password"
                     value={this.state.password}
                     onChange={this.handleInputChange}
                     />
                  <button>Save</button>
            </form>
        );
    }
}

// Второй вариант через стрелочные функции

// class Registration extends React.Component {
        
//     state = {
//          email: ""
// }

// handleSubmit = (event) => {
//  event.preventDefault();
//  console.log('form is submitted. Email value is', this.state.email);
// }

// handleEmailChange = (event) => {
//  this.setState({email: event.target.value});
//  console.log('email was changed', this);
// }

// render(){
//  return(
//  <form onSubmit = {this.handleSubmit}>
//      <input
//        type="text"
//        placeholder="E-mail"
//        value={this.state.email}
//        onChange={this.handleEmailChange}
//        />
//        <button>Save</button>
//  </form>
// );
// }
// }
  


  export default Registration;