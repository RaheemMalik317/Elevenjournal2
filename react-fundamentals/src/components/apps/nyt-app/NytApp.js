import React, {useState} from 'react';
import NytResults from './NytResults'

const baseUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
const key = '3StqIHkHYGd8bAXcLBmSHwdvnrkaTSlU';

const NytApp = () => {

    const [search, setSearch] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [ pageNumber, setPageNumber] = useState(0);
    const [results, setResults] = useState([]);

    const fetchResults = () => {
        let url = `${baseUrl}?api-key=${key}&page=${pageNumber}&q=${search}`;
        url = startDate ? url + `&begin_date=${startDate}` : url;
        url = endDate ? url + `&end_date=${endDate}` : url;

        fetch(url)
        .then(res => res.json())
        .then(data => setResults(data.response.docs))
        .catch(err => console.log(err));
    };

    const handleSubmit =(event) => {
        event.preventDefault();
        setPageNumber(0);
        fetchResults();
    };

    const changePageNumber = (event, direction) => {
        event.preventDefault();
        if (direction === 'down') {
          if (pageNumber > 0) {
            changePageNumber(pageNumber + 1);
            fetchReults();
          }
        }
        if (direction === 'up') {
          changePageNumber(pageNumber + 1);
          fetchReults();
        }
      };
    



    return(
        <div className="main">
            <div className="mainDiv">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <span>Enter a single search term (required) : </span>
                    <input type="text" name="search" onChange={(e) => setSearch(e.target.value)} required />
                    <br />
                    <span>Enter a start date: </span>
                    <input type="date" name="startDate" patter="[0-9]{8}" onChange={(e) => setStartDate(e.target.value)}/>
                    <br />
                    <span>Enter a end date: </span>
                    <input type="date" name="endDate" pattern="[0-9]{8}" onChange={(e) => setEndDate(e.target.value)} />
                    <br />
                    <button className="submit">Submit search</button>
                </form>
                {results.length > 0 ? <NytResults results={results} changePage={ changePageNumber}/> : null}
            </div>
        </div>
    );
};

export default NytApp;