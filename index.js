import React from './react'
import ReactDOM from './react-dom'

class Welcome extends React.Component {
    render(){
        return React.createElement('h1',{className:'title'},this.props.title)
    }
}

let element = React.createElement(Welcome,{title:'标题'})
ReactDOM.render(element, document.getElementById('root'))
