import React from 'react'

const LogIn = () => (
    <div className="container">
        <form>
            <div className="input-field">
                <input id="email" type="text" class="validate"/>
                <label for="email">Email:</label>
            </div>
            <div className="input-field">
                <input id="password" type="password" class="validate"/>
                <label for="password">Password</label>
            </div>
            <button class="btn waves-effect waves-light" type="submit" name="action">Log In</button>
        </form>
    </div>
)

export default LogIn;