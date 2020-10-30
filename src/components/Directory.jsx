import React, { Component } from "react";
import TableRow from "./TableRow";
import SearchBar from "./layout/SearchBar";

import API from "../utils/API";

class Directory extends Component {
  state = {
    result: [],
    alteredResult: [],
    search: "",
  };

  componentDidMount() {
    this.searchPeople();
  }

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change

    let value = event.target.value;
    const name = event.target.name;

    this.filterSearch(value);
    // Updating the input's state
    this.setState({
      [name]: value,
    });
  };

  filterSearch = (search) => {
    search = search.toLowerCase();
    const result = this.state.result.filter(emp => emp.name.first.toLowerCase().indexOf(search) !== -1 || emp.name.last.toLowerCase().indexOf(search) !== -1)
    this.setState({alteredResult: result})
  };

  searchPeople = (query) => {
    API.search(query).then((res) =>
      this.setState({ result: res.data.results, alteredResult: res.data.results })
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
                  {this.state.alteredResult.map((employee) => (
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
