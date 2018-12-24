import React from 'react';
import { Route } from 'react-router-dom';
import ReaderList from './readerList';
import AddBooks from './addBooks';
import './App.css';
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
	constructor(props) {
  		super(props);
  		this.state = {
 			allBooks :[],
          	addBooks:[],
          	query:'',
          	MAX_RESULTS : 20,
  		}
  	}
	getBooksInfo = () => {
      	BooksAPI.getAll().then((book) => {
          	if (Array.isArray(book)) {
          		this.setState( { allBooks : book } );
			}else{
              	this.setState( { allBooks : [] } );
            }
       	})
  	}

	 classedBook = (searchBooks)=>Array.isArray(searchBooks)&&
	searchBooks.map((searchBook) => {
  	if (Array.isArray(this.state.allBooks.filter((book)=>(book.id === searchBook.id)))) {
		this.state.allBooks.forEach((haha)=>{
          	if( haha.id === searchBook.id ){searchBook.shelf=haha.shelf}
        })
  	}
  	return searchBook
	})


		updateQuery = (query) =>{
     		this.setState({
        		query:query.trim()
        	}) 
          	if(query !== ''){
      		BooksAPI.search(query, this.state.MAX_RESULTS).then((book)=>{
              	this.setState( {
            	addBooks : this.classedBook(book)})
        		;console.log(book)
           	});}else{this.setState( {
            	addBooks : []})}
      		console.log(this.state.allBooks)
    	}

	changeStatus = (hehe) => {
		this.state.allBooks.forEach(
     		(book)=>{
              	
        		if ( hehe === "read"+book.id ){
    				//发送请求“read”
                  	BooksAPI.update(book, "read").then(this.getBooksInfo());
    			}else if(hehe === "currentlyReading"+book.id){
                 	//发送请求“currentlyReading");
                  	BooksAPI.update(book, "currentlyReading").then(this.getBooksInfo());
                }else if(hehe === "wantToRead"+book.id){
                  	//发送请求“wantToRead");
                  	BooksAPI.update(book, "wantToRead").then(this.getBooksInfo());
                }else if(hehe === "del"+book.id){
                  	var mymessage= confirm("确定移除此书本？");
    				if(mymessage===true)//如果按确定
    				{
    					//发送请求“delete”
                      	BooksAPI.update(book, "undefined").then(this.getBooksInfo());
    				}
                }
        	},(this)
      	)
  	}
	
	AddchangeStatus = (hehe) => {
		//this.setState({addBooks:
      	this.state.addBooks.forEach(
     		(book)=>{
        		if ( hehe === "read"+book.id ){
                  	BooksAPI.update(book, "read").then(()=>{
                      	book.shelf = "read";
                      	//alert("已经添加到书架");
                      	//return book;
                    });
    			}else if(hehe === "currentlyReading"+book.id){
                  	BooksAPI.update(book, "currentlyReading").then(()=>{
                      	book.shelf = "currentlyReading";
                   		//alert("已经添加到书架");
                      	//return book;
                    });
                }else if(hehe === "wantToRead"+book.id){
                  	BooksAPI.update(book, "wantToRead").then(()=>{
                      	book.shelf = "wantToRead";
                      	//alert("已经添加到书架");
                      	//return book;
                    });
                }else if(hehe === "del"+book.id){
                  	var mymessage= confirm("确定移除此书本？");
    				if(mymessage===true)//如果按确定
    				{
                      	BooksAPI.update(book, "undefined").then(()=>{
                      		book.shelf = "del";
                      		//alert("已经添加到书架");
                      		//return book;
                    		});
    				}
                }
        	},(this)
      	);
      	this.state.allBooks.forEach(
     		(book)=>{
        		if ( hehe === "read"+book.id ){

                      	book.shelf = "read";

    			}else if(hehe === "currentlyReading"+book.id){

                      	book.shelf = "currentlyReading";

                }else if(hehe === "wantToRead"+book.id){

                      	book.shelf = "wantToRead";

                }
        	},(this)
      	);
      this.updateQuery('');
      this.updateQuery(this.state.query);
      console.log(this.state.addBooks);
  	}

	componentDidMount(){
     	this.getBooksInfo();
    }
 render() {
  	return (
   		<div className="app">
   			<Route exact path="/" render={() => (
   				<ReaderList BooksData={ this.state.allBooks } changeStatus={ this.changeStatus }/>
   			)}/>
			<Route path="/Add_Books" render={() => (
   				<AddBooks 
              		BooksData={ this.state.addBooks } 
					changeStatus={ this.AddchangeStatus }
					query={this.state.query}
					updateQuery={this.updateQuery}
					getBooksInfo={this.getBooksInfo}
				/>
			)}/>
		</div>
    )
  }
}

export default BooksApp
