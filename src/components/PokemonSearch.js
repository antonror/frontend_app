import React, { Component } from 'react'
import axios from 'axios'

class PokemonSearch extends Component {

    constructor(props) {
        super(props)
        this.state = {
            term: '',
            autoCompleteResults: [],
            itemSelected: {},
            showItemSelected: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/search?q=' + this.state.term)
            .then(response => this.setState({ autoCompleteResults: response.data }))
    }

    getAutoCompleteResults(e){
        this.setState({
            term: e.target.value
        }, () => {
            axios.get('http://localhost:3001/search?q=' + this.state.term)
                .then(response => this.setState({ autoCompleteResults: response.data }))
        })
    }

    render(){
        let autoCompleteList = this.state.autoCompleteResults.map((response, index) => {
            return <div key={index}>
                <h2>{response.title}</h2>
                <p>{response.body }</p>
            </div>
        })

        return (
            <div>
                <input ref="input" value={ this.state.term } onChange={ this.getAutoCompleteResults.bind(this) } type='text' placeholder='Search...' />
                { autoCompleteList }
            </div>
        )
    }
}

export default PokemonSearch