import React, { Component } from "react";
import TableRow from "./TableRow";
import SearchBar from "./layout/SearchBar";

import API from "../utils/API";


class Directory extends Component {
  state = {
    result: [],
    search: "",
  };

  componentDidMount() {
    this.searchPeople();
  }

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    // Updating the input's state
    this.setState({
      [name]: value,
    });
  };

  searchPeople = (query) => {
    API.search(query).then((res) =>
      this.setState({ result: res.data.results })
    );
  };

  render() {
    return (
      <>
        <SearchBar
        //   search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.result.map((employee) => (
                    <TableRow
                      picture={employee.picture.thumbnail}
                      name={employee.name}
                      phone={employee.phone}
                      email={employee.email}
                      dob={employee.dob.date.substr(0, 10)}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Directory;
