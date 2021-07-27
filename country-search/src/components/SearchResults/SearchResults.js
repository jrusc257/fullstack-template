import React from 'react';
import PropTypes from 'prop-types';
import './SearchResults.scss';

const SearchResults = ({listResults}) => {
    console.log(listResults);
    return (
        <div className="search-results-component">
            <h2>Results</h2>
            <ul>
                {listResults}
            </ul>
        </div>
    )
    SearchResults.propTypes = {
        listResults: PropTypes.array
    }
}
// class SearchResults extends React.Component {
//     render() {
//         return (
//             <div className="search-results-component">
//                 <h2>Results</h2>
//                 <ul>
//                     {this.props.listResults
//                         ? this.props.listResults.map(function(name, index){
//                             return <li key={ index }>{name}</li>;
//                         })
//                         : <li>No Results</li>
//                     }
//                 </ul>
//             </div>
//         )
//         SearchResults.propTypes = {
//             listResults: PropTypes.array
//         }
//     }
// }

export default SearchResults