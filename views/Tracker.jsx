const React = require('react');
const AppLayout = require('./AppLayout.jsx')

class Tracker extends React.Component {
    render(){
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
                        {this.props.score.map((score, index) => {
                            return(
                                <li>
                                    <a href={`/abovepar/${score._id}`}>{score.course}</a>
                                    <br/>
                                    <form action={`/abovepar/${score._id}?_method=DELETE`} method="post">
                                        <input type="submit" value="delete"/>
                                    </form>
                                    {/* <p>{`${this.props.score.createdAt}`}</p> */}
                            </li>
                        )
                    })}
                </div>
            </AppLayout>
        )
    }
}

module.exports = Tracker;