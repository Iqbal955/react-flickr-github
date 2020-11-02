import React, { Component } from 'react';

export default class SearchForm extends Component {
  
  state = {
    searchText: ''
  }
  
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }

  onSearchButton = e => {

    this.setState({searchText: "dog"});
    e.preventDefault();
    e.currentTarget.reset();

  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.searchText)
    e.currentTarget.reset();
  }
  
  render() {  
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <label className="is-hidden" htmlFor="search">Search</label>
        <input type="search" 
               onChange={this.onSearchChange}
               name="search" 
               placeholder="Search..." />
        <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
        <button onChange={this.onSearchChange}>Dog</button>
      </form>      
    );
  }
}