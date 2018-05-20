import React, { Component } from 'react'

class Pokemon extends Component {
    handleClick = () => { this.props.onClick(this.props.pokemon.id) }

    handleDelete = () => { this.props.onDelete(this.props.pokemon.id) }

    render () {
        return(
            <div className="tile">
                <span className="deleteButton" onClick={this.handleDelete}>x</span>
                <h4 onClick={this.handleClick}>{this.props.pokemon.title}</h4>
                <p onClick={this.handleClick}>{this.props.pokemon.body}</p>
            </div>
        )
    }
}

export default Pokemon
