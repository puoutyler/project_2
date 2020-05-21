const React = reqiore('react');

class New extends React.Component {
    render() {
        return(
            <div>
                <h1>AbovePar</h1>
                <form action='/abovepar' method="POST">
                    Course:  <input type='text' name='course'/> <br/>
                    Front 9 score: <input type='text' name='front'/> <br/>
                    Back 9 score: <input type='text' name='back'/> <br/>
                    Overall score = <input type='text' name='overall'/> <br/>
                    <textarea rows="4" cols="50" name='notes'>Enter any notes here...</textarea>
                    <input type="submit" name="" value="Enter round"/>
                </form>
            </div>
        )
    }
}

module.exports = New;