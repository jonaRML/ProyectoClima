import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div>
      <input type="text" placeholder='cuidad...'/>
      <button onClick={props.onSearch}>Search</button>
    </div>
  )
};