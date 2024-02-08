import './Search.css'

const Search = () => {

    return (
        <div className='searchDiv'>
            <input type="text" id='input-field' placeholder='Search note...'/>
            <input id="search-button" type="submit" value=""></input>
        </div>
        
    )
}

export default Search;
