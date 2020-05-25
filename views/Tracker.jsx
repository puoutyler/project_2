const React = require('react');
const AppLayout = require('./AppLayout.jsx')

class Tracker extends React.Component {
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
                    <div className='tracker-container'>
                        <ul className='tracker-list'>
                        {this.props.score.map((score, index) => {
                            return(
                                <li>
                                    <a className='tracker-course' href={`/abovepar/${score._id}`}>{score.course}</a>
                                    <br/>
                                    <h4 className='timestamp'>Overall score: {score.overall}</h4>
                                    <p className='timestamp'>Entered on: {`${score.createdAt}`}</p>
                                    <br />
                                    <form action={`/abovepar/${score._id}?_method=DELETE`} method="post">
                                        <input className='form-btn' type="submit" value="delete"/>
                                    </form>
                                    {/* <h4 className='handicap'>{score.overall - 72}</h4> */}
                                </li>
                            )
                        })}
                        </ul>
                    </div>
                </div>
            </AppLayout>
        )
    }
}

module.exports = Tracker;