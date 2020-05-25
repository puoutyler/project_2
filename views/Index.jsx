const React = require('react');
const AppLayout = require('./AppLayout.jsx')

class Index extends React.Component {
    render(){
        const logout = (<form action='/sessions/?_method=DELETE' method="post">
            <a href='/sessions/new' className='login'>Logout</a>
        </form>)
        const login = <a href='/sessions/new' className='login'>Login</a>
        const showUsername = <a className='username' href='#'>{`${this.props.username}`}</a>
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
                    <div className='about-container'>
                    <div className='about-sec'>
                        <h4 className='about-title'>About us</h4>
                        <hr></hr>
                        <p className='about-p'>AbovePar is tool made by golfers, for golfers, that helps you keep track of your improvement. Just sign up and start entering your rounds into our tracker. We then calculate your handicap for you and you can see your improvement every round you play, while also having the ability to add any notes of areas that may need some work.</p>
                        <img className='about-img'src='https://www.stonehamoaks.com/wp-content/uploads/sites/5789/2016/04/background.jpg'/>
                    </div>
                    </div>
                </div>
            </AppLayout>
        )
    }
}

module.exports = Index;