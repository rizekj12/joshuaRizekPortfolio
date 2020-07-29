import React, { Component } from 'react'
import "../css/ContactMe.css"

export default class ContactMe extends Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
          status: ""
        };
    }


    render() {
        const { status } = this.state;
        return (
            <div>
                  <section id="contact-me">
            <div className="contactMeDiv">
                <h1>Lets talk!</h1>
                <h2 className="myEmail">(joshuarizek@gmail.com)</h2>
                <form className="contactForm" onSubmit={this.submitForm} action="https://formspree.io/mgenrjlk" method="POST">
                    <input className="contactInput firstTwo" name="name" placeholder="Name" type="text" />
                    <input className="contactInput firstTwo" name="email" placeholder="Email" type="email" />
                    <textarea className="contactInput" name="message" placeholder="Message..." type="text" cols="30" rows="10"></textarea>
                    {status === "SUCCESS" ? <p>Thanks!</p> : <button className="contactButton">Submit</button>}
                    {status === "ERROR" && <p>Ooops! There was an error.</p>}
                </form>
            </div>
        </section>
                
            </div>
        )
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
          } else {
            this.setState({ status: "ERROR" });
          }
        };
        xhr.send(data);
      }
}

