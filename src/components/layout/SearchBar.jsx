import React from 'react';

const SearchBar = (props) => {
    return (
        <form className="text-center" style= {formStyle}>
            <input
          type="text"
          name="search"
          style={searchStyle}
          placeholder="Search"
        //   value={this.props.search}
          onChange={props.handleInputChange}
        />
        </form>
    );
};

const formStyle = {
    background: '#f4f4f4',
    padding: "10px", 
}

const searchStyle = {
    flex: "10",
    padding: "5px", 
}

export default SearchBar;