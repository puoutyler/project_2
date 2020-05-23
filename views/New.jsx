const React = require('react');
const AppLayout = require('./AppLayout.jsx')

class New extends React.Component {
    render() {
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
                                    <a className='nav' href='/abovepar/'>Home</a>
                                </li>
                                <li>
                                    <a className='nav' href='/abovepar/tracker'>Tracker</a>
                                </li>
                                <li>
                                    <a className='nav' href='/abovepar/new'>New</a>
                                </li>
                                <li>
                                    <a href='#' className='signup'>Sign Up</a>
                                </li>
                                <li>
                                    <a href='#' className='login'>Login</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <form action='/abovepar' method="POST">
                        Course:  <input type='text' name='course'/> <br/>
                        Front 9 score: <input type='text' name='front'/> <br/>
                        Back 9 score: <input type='text' name='back'/> <br/>
                        Overall score: <input type='text' name='overall'/> <br/>
                        <textarea rows="4" cols="50" name='notes'>Enter any notes here...</textarea>
                        <input type="submit" name="" value="Enter round"/>
                    </form>
                </div>
            </AppLayout>
        )
    }
}

module.exports = New;