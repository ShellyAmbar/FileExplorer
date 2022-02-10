import React from 'react'
import "./ListResults.css";
import ListItem from '../ListItem';
function Index({results, handleOptionPicked}) {
  return (
  <div>
    {results && results.length > 0 && (
        <div className="container-options">
          <div className="container-options-inner">
            {results.map((title, index) => (
              <ListItem
                key={index}
                object={title}
                onClickOption={(title) => handleOptionPicked(title)}
              />
            ))}
          </div>
        </div>
      )}
  </div>
  )
}

export default Index