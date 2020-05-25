const React = require('react');
const AppLayout = require('./AppLayout.jsx')

class New extends React.Component {
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
                    <h3 className='form-title'>Enter New Round</h3>
                    <form className='form' action='/abovepar' method="POST">
                        Course:  <input className='form-input' type='text' name='course'/> <br/>
                        Front 9 score: <input className='form-input' type='text' name='front'/> <br/>
                        Back 9 score: <input className='form-input' type='text' name='back'/> <br/>
                        Overall score: <input className='form-input' type='text' name='overall'/> <br/>
                        <textarea className='form-input' rows="4" cols="50" name='notes'>Enter any notes here...</textarea>
                        <input className='form-btn' type="submit" name="" value="Submit round"/>
                    </form>
                    <img className='form-img' src='https://www.golfbladet.com/wp-content/uploads/2018/03/iStock-146811596.jpg'/>
                </div>
            </AppLayout>
        )
    }
}

module.exports = New;