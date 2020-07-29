import createElement from './element'
class Component{
    static isReactComponent = true
    construcor(props){
        this.props = props
    }
}

export default {
    createElement,
    Component
}