
import React, { Component } from 'react';

class ContactPanel extends Component {
    render() {
        return (
            <div>
                <h2>Contact Us</h2>
                <form>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message"></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default ContactPanel;
