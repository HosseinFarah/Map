import { Link } from "react-router-dom";
export const books = [
  {
    title: 'Book1',
    author: 'Author 1',
    description: 'Description for Book 1',
  },
  {
    title: 'Book2',
    author: 'Author 2',
    description: 'Description for Book 2',
  },
  {
    title: 'Book3',
    author: 'Author 3',
    description: 'Description for Book 3',
  },
  {
    title: 'Book4',
    author: 'Author 4',
    description: 'Description for Book 4',
  },
  {
    title: 'Book5',
    author: 'Author 5',
    description: 'Description for Book 5',
  },
];
export const Books=()=>{
      return (
        <div className="container">
          <h1>Books Page</h1>
          <div className="row">
            {books.map((book,index)=>{
                return <div className="col-md-4 my-5" key={index}>
                <div className="card">
                  <div className="card-body">
                    <Link to={`/books/${book.title}`}><h5 className="card-title">{book.title}</h5></Link>
                    <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
                    <p className="card-text">{book.description}</p>
                  </div>
                </div>
              </div>
            })}
              
            
          </div>
        </div>
      );
}