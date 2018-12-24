import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BooksList from './booksList';

class ReaderList extends Component{
	 render() {
    return (
         <div className="list-books">
            <div className="list-books-title">
              <h1>我的书架</h1>
            	</div>
            	<div className="list-books-content">
              		<div className="bookshelf">
						<h2 className="bookshelf-title">正在阅读</h2>
      					<div className="bookshelf-books">
       					      <BooksList books={ this.props.BooksData.filter((a) => (a.shelf === "currentlyReading")) } changeStatus={ this.props.changeStatus } add={false}/>
						</div>
      				</div>
       				<div className="bookshelf">
						<h2 className="bookshelf-title">想要阅读</h2>
						<div className="bookshelf-books">
    						<BooksList books={ this.props.BooksData.filter((a) => (a.shelf === "wantToRead")) } changeStatus={ this.props.changeStatus } add={false}/>
						</div>
       				</div>
      				 <div className="bookshelf">
						<h2 className="bookshelf-title">已经阅读</h2>
						<div className="bookshelf-books">
							<BooksList books={ this.props.BooksData.filter((a) => (a.shelf === "read")) } changeStatus={ this.props.changeStatus } add={false}/>
						</div>
       				</div>
            	</div>
            	<div className="open-search">
              	<Link to="/Add_Books" className="Add-a-book">Add a book</Link>
            </div>
          </div>
    )
  }
}

export default ReaderList;