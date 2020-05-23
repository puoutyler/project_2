const React = require('react');
const AppLayout = require('./AppLayout.jsx')

class Show extends React.Component {
    render(){
        const {score} = this.props
        return(
            <AppLayout>
            <nav>
                <a href='/abovepar'>Home</a>
            </nav>
            <div>
                <h3>{score.course}</h3>
                <h5>Front 9: {score.front}</h5>
                <h5>Back 9: {score.back}</h5>
                <h6>Overall: {score.overall}</h6>
                <textarea rows="4" cols="50" name='notes'>{score.notes}</textarea>
            </div>
            </AppLayout>
        )
    }
}

module.exports = Show;