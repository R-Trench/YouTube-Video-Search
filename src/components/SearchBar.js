import React from 'react'

class SearchBar extends React.Component {

    
    state = {term: ''}

    onChangeHandler=(event)=>{
        const text = event.target.value
        this.setState({term: text})
    }

    onFormSubmit =  event =>{
        event.preventDefault()

        this.props.onFormSubmit(this.state.term)
    }

    render() {
        return (
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input onChange={this.onChangeHandler} type="text" value={this.state.term}></input>
                </div>
            </form>
        </div>
        )
    }
}
export default SearchBar