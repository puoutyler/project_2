const React = require('react');

class AppLayout extends React.Component {
    render(){
        return(
            <html lang="en">
            <head>
                <link rel="stylesheet" href="/css/style.css"/>
                {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
                <meta charset="UTF-8"/> */}
                <link href="https://fonts.googleapis.com/css2?family=Cabin&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet"></link>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>AbovePar</title>
            </head>
            <body>
                {this.props.children}
            </body>
            </html>
        )
    }
}

module.exports = AppLayout;