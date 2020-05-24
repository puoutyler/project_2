const React = require('react');

class NewUser extends React.Component {
    render() {
        return(
            <div className='banner'>
                        <h1 className='logo'>AbovePar</h1>
                        <img className='logo-img' src='https://webstockreview.net/images/golf-clipart-flagstick-5.png'/>
                        <h3 className='slogan'>Every stroke counts</h3>
                        <nav className='menu'>
                            <ul>
                                <li className='active'>
                                    <a className='home-nav' href='/abovepar/'>Home</a>
                                </li>
                                <li>
                                    <a className='nav' href='/abovepar/tracker'>Tracker</a>
                                </li>
                                <li>
                                    <a className='nav' href='/abovepar/new'>New</a>
                                </li>
                                <li>
                                    <a href='/sessions/' className='signup'>Sign Up</a>
                                </li>
                                <li>
                                    <a href='/sessions/new' className='login'>Login</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
            <div>
                <h1>New User</h1>
                <form action="/user/" method="POST">
                    username: <input type="text" name="username" />
                    <br />
                    password: <input type="password" name="password" />
                    <br />
                    <input type="submit" value="Create User" />
                </form>
            </div>
        );
    }
}
module.exports = NewUser;