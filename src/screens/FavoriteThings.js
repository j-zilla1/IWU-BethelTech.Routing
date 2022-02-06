import React from 'react';
import Things from './Things';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';




const FavoriteThings = ( { match }) => (
    <div>
        <h1>
            Favorite Things
        </h1>
            <ul>
                <li><Link to ={`${match.url}/cold_Blooded`}>Song</Link></li>
                <li><Link to ={`${match.url}/parallel_Worlds`}>Book</Link></li>
                <li><Link to ={`${match.url}/james_McAvoy`}>Actor</Link></li>
            </ul>

            
            <Route path={`${match.url}/:ftId`} component={Things} />
            <Route exact path={match.url} />
        
    </div>
);

export default FavoriteThings;