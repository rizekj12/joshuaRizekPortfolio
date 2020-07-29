// import React, { Component } from 'react'
// import "../css/ContactMe.css"
// import axios from 'axios'

// export default class ContactMe extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//             email: '',
//             message:'',
//             sent: false,
//             buttonText: 'Send Message'

          
//         };
//     }

//     handleChange = (event) =>{
//         this.setState({
//             [event.target.name]: event.target.value
//         })

//     }

//     formSubmit = (e) => {
//         e.preventDefault()
      
//         this.setState({
//             buttonText: '...sending'
//         })
      
//         let data = {
//             name: this.state.name,
//             email: this.state.email,
//             message: this.state.message
//         }
        
//         axios.post('API_URI', data)
//         .then( res => {
//             this.setState({ sent: true }, this.resetForm())
//         })
//         .catch( () => {
//           console.log('Message not sent')
//         })
//     }

//     resetForm = () => {
//         this.setState({
//             name: '',
//             message: '',
//             email: '',
//             buttonText: 'Message Sent'
//         })
//     }

//     render() {
//         const { status } = this.state;
//         return (
//             <div>
//                   <section id="contact-me">
//             <div className="contactMeDiv">
//                 <h1>lets work together!</h1>
//                 <form className="contactForm" onSubmit={this.formSubmit} action="https://formspree.io/mgenrgee" method="POST">
//                     <input className="contactInput" name="name" placeholder="Name" type="text" onChange={this.handleChange}/>
//                     <input className="contactInput" name="email" placeholder="Email" type="text" onChange={this.handleChange}/>
//                     <textarea className="contactInput" name="message" placeholder="Message..." cols="30" rows="10" onChange={this.handleChange}></textarea>
//                     <button className="contactButton">send</button>
//                 </form>
//             </div>
//         </section>
                
//             </div>
//         )
//     }

// }