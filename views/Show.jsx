const React = require('react');

class Show extends React.Component {
    render(){
        const score = this.props.score
        return(
            <>
            <div>
                <h1>AbovePar</h1>
            </div>
            <nav>
                <a href='/abovepar'>Home</a>
            </nav>
            <div>
                <h3>{score.course}</h3>
                <h5>Front 9: {score.front}</h5>
                <h5>Back 9: {score.back}</h5>
                <h6>Overall: {score.overall}</h6>
            </div>
            </>
        )
    }
}

module.exports = Show;