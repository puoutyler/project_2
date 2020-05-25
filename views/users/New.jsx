const React = require('react');
const AppLayout = require('../AppLayout.jsx')

class NewUser extends React.Component {
    render(){
        const logout = (<form action='/sessions/?_method=DELETE' method="post">
        <input className='logout-btn' type='submit' value='Logout'/>
    </form>)
        const login = <a href='/sessions/new' className='login'>Login</a>
        const showUsername = <a className='username' href='#'>{`Welcome, ${this.props.username}`}</a>
        const signup = <a href='/user/new' className='signup'>Sign Up</a>
        return(
            <AppLayout>
                <div className='container'>
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
                                    {this.props.username ? showUsername : signup}
                                </li>
                                <li>
                                    {this.props.username ? logout : login}
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <h1 className='form-title'>New User</h1>
                    <form className='form' action="/user/" method="POST">
                        username: <input className='form-input' type="text" name="username" />
                        <br />
                        password: <input className='form-input' type="password" name="password" />
                        <br />
                        <input className='form-btn' type="submit" value="Create User" />
                    </form>
                </div>
            </AppLayout>
        );
    }
}
module.exports = NewUser;