import React from 'react'

class SearchBar extends React.Component {

    //what is in searchbar
    state = {term: ''}

    //stores the value in the input field in the state
    onChangeHandler=(event)=>{
        const text = event.target.value
        this.setState({term: text})
    }

    onFormSubmit =  event =>{
        //prevents default form submit when user hits enter
        event.preventDefault()
        //passes the value of term to parent component
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