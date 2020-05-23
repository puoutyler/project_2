const React = reqiore('react');
const AppLayout = require('./AppLayout.jsx')

class Edit extends React.Component {
    render() {
        const {score} = this.props
        return(
            <AppLayout>
                <h3>Edit Round</h3>
                <form action={`/abovepar/edit/${score._id}`} method="POST">
                    Course:  <input type='text' name='course' value={score.course}/> <br/>
                    Front 9 score: <input type='text' name='front' value={score.front}/> <br/>
                    Back 9 score: <input type='text' name='back' value={score.back}/> <br/>
                    Overall score = <input type='text' name='overall' value={score.overall}/> <br/>
                    <textarea rows="4" cols="50" name='notes'>{score.notes}</textarea>
                </form>
            </AppLayout>
        )
    }
}

module.exports = Edit;