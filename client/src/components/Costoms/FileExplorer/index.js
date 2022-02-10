import React, { useState } from "react";
import ListResults from '../ListResults'
import SearchBar from '../SearchBar';
import {getFilesfromPath} from "../../store/actions/FileExplorer"
import "./FileExplorer.css"


function FileExplorer() {
  const [results, setResults] = useState([]);
  const [directory, setDirectory] = useState("");
  const handleOptionPicked = (fileName) =>{
    let newDirectoryName = directory + "/" + fileName;
    getFilesfromPath(newDirectoryName)
  }
  const handleSearchClicked = async (fileName) =>{

   let results = await getFilesfromPath(fileName);
   setDirectory(fileName);
   setResults(results);
  }

  return (
      <div className="FileExplorerContainer">
     <SearchBar onSearchClicked={handleSearchClicked}/>
     <ListResults results={results}  handleOptionPicked={handleOptionPicked}/>
      </div>
  
  )
}

export default FileExplorer