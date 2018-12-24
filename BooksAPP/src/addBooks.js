import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BooksList from './booksList';

class AddBooks extends Component{
	render() {
      	if (Array.isArray(this.props.BooksData)) {
		return (
			<div className="search-books">
         		<div className="search-books-bar">
            		<Link to="/" className="close-search" onClick={this.props.getBooksInfo}>Close</Link>
            		<div className="search-books-input-wrapper">
              			<input type="text" placeholder="Search by title or author"
          					value={this.props.query} onChange={(event)=>this.props.updateQuery(event.target.value)}/>
           			</div>
            	</div>
          		<div className="search-books-results">
          			<BooksList books={ this.props.BooksData } changeStatus={ this.props.changeStatus } add={true}/>
          		</div>
      		</div>
			)}else{
            	return (
			<div className=
			"search-books">
         		<div className="search-books-bar">
            		<Link to="/" className="close-search" onClick={this.props.getBooksInfo}>Close</Link>
            		<div className="search-books-input-wrapper">
              			<input type="text" placeholder="Search by title or author"
          					value={this.props.query} onChange={(event)=>this.props.updateQuery(event.target.value)}/>
					</div>
					
            	</div>
				
          		<div className="search-books-results">
					
          		</div>
				<div className="no-book"><h4>无书本</h4></div>
      		</div>
			)
        }
		
    }
}
export default AddBooks;
//onClick="location.reload()"