
import App from '/src/App'
import NavBar from './NavBar';

function Search (){


    return(
        <>
        <div className="input-group mb-3 search-div">
            <form action="" method="GET"className="form-styling input-group mb-3">
                <input type="search"className=" form-control input-styling"  />
                <button type='search' className="btn  btn-styling  btn-outline-secondary" >Search</button>
            </form>
        </div>
        </>

    )
}


export default Search;