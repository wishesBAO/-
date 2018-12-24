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
     			 	<li key={ book.title }>
						<div className="book">
							<div className="book-top">
								<div className="book-cover" style={{ width: 130, height: 190, backgroundImage:(book.imageLinks ? 'url('+book.imageLinks.smallThumbnail+')' :'url(https://books.google.com/googlebooks/images/no_cover_thumb.gif)' ) }}></div>
									<div className="book-shelf-changer">
											<select 
							onChange={(e)=>this.props.changeStatus(e.target.value)} 
						value={ book.shelf + book.id }>
												<option value={"undefined"+book.id} disabled >放到哪呢...</option>
												<option value={"currentlyReading"+book.id}>正在阅读</option>
												<option value={"wantToRead"+book.id}>想要阅读</option>
												<option value={"read"+book.id}>已读完了</option>
												<option value={"del"+book.id}>拜拜了您嘞</option>
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