import React, { Component } from 'react';

class BooksList extends Component {
  	constructor(props) {
  		super(props);
  		this.state = {
			   selectState:'',
			   
          	selectValue:''
  		}
	  }
	  
  	render() {
		  //下拉菜单
    		return (
				<ol className="books-grid">
      				{this.props.books.map((book) => (
     			 	<li key={ book.id }>
						<div className="book">
							<div className="book-top">
								<div className="book-cover" style={{ width: 130, height: 190, backgroundImage:(book.imageLinks ? 'url('+book.imageLinks.smallThumbnail+')' :'url(https://books.google.com/googlebooks/images/no_cover_thumb.gif)' ) }}></div>
									<div className="book-shelf-changer">
<select defaultValue={ book.shelf } onChange={(e) => { /* defaultValue 用来设置每本书的默认状态值 */
									let newShelf = e.target.value /* 当状态改变时获取选中项value */
         							if (book.shelf !== newShelf) { /* 一旦发现改变的值不与先前的相同就触发 updateBook 方法 */
           							this.props.updateBook(book, newShelf);/* 将当前图书对象以及新的选中项状态值传递过去 */
        							 }
       								}}>
         							<option value="none" disabled>Move to...</option>
         							<option value="currentlyReading">Currently Reading</option>
         							<option value="wantToRead">Want to Read</option>
         							<option value="read">Read</option>
         							<option value="none">None</option>
       						</select>
									</div>
							</div>
							<div className="book-title">{ book.title }</div>
							<div className="book-authors">{ book.authors }</div>
						</div>
					</li>
    			))}
				</ol>
   			)
  		}
}

export default BooksList;
