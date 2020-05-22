const React = require('react');

class Index extends React.Component {
    render(){
        return(
            <div>
                <h1>AbovePar</h1>
                <nav>
                    <a href='/abovepar/new'>Enter new round</a>
                </nav>
                <ul>
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
                </ul>
            </div>
        )
    }
}

module.exports = Index;