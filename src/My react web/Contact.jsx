import React from 'react';
import './contact.css'

const Contact = ()=>{
    return (
        <>
        <div className='contact_div'>
        <div class="shade">
        <div class="blackboard">
                <div class="form">
                        <p>
                                <label>Name: </label>
                                <input type="text" required/>
                        </p>
                        <p>
                                <label>Email: </label>
                                <input type="email" required/>
                        </p>
                        <p>
                                <label>Phone: </label>
                                <input type="tel" required/>
                        </p>
                        <p>
                                <label>Subject: </label>
                                <input type="text" required/>
                        </p>
                        <p>
                                <label>Message: </label>
                                <textarea></textarea>
                        </p>
                        <p class="wipeout">
                               <a href='mailto:himanshu.pachori.37@gmail.com'> <input type="submit" value="Send Email" /></a>
                        </p>
                </div>
        </div>
    </div>
    </div></>
    )
}

export default Contact;