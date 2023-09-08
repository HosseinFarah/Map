import { useNavigate, useParams } from "react-router-dom";
import { books } from "./Books";
export const Book = () => {
  const { book } = useParams();
  const navigate = useNavigate();
  return (
    <div className=" container col col-3">
      Page is :{book}
      {books.map((select, index) => {
        return (
          select.title === book && (
            <div className="card" key={index}>
              <img
                src="https://via.placeholder.com/50"
                className="card-img-top"
                alt="Book Cover"
              />
              <div className="card-body">
                <h5 className="card-title">{select.title}</h5>
                <p className="card-text">{select.description}</p>
                <button
                  onClick={() => {
                    navigate("/books");
                  }}
                >
                  Books
                </button>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};
