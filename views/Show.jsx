const React = require('react');
const AppLayout = require('./AppLayout.jsx')

class Show extends React.Component {
    render(){
        const logout = (<form action='/sessions/?_method=DELETE' method="post">
        <input className='logout-btn' type='submit' value='Logout'/>
    </form>)
        const login = <a href='/sessions/new' className='login'>Log In</a>
        const showUsername = <a className='username' href='#'>{`Welcome, ${this.props.username}`}</a>
        const signup = <a href='/user/new' className='signup'>Sign Up</a>
        const {score} = this.props
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
                    <div>
                        <h3 className='form-title'>{score.course}</h3>
                        <h5 className='show-score' >Front 9: {score.front}</h5>
                        <h5 className='show-score' >Back 9: {score.back}</h5>
                        <h6 className='show-score' >Overall: {score.overall}</h6>
                        <textarea className='show-textbox' rows="4" cols="50" name='notes'>{score.notes}</textarea>
                        <a className='show-edit' href={`/abovepar/edit/${score._id}`}>Edit</a> 
                    </div>
                </div>
            </AppLayout>
        )
    }
}

module.exports = Show;