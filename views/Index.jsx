const React = require('react');

class Index extends React.Component {
    render(){
        retuern(
            <div>
                <h1>AbovePar</h1>
                <ul>
                    {this.props.score.map((score, indec) => {
                        return(
                            <li>
                                <a href={`/abovepar/${score._id}`}>{score.course}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

module,exports = Index;