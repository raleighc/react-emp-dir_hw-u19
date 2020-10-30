import React, { Component } from "react";
import TableRow from "./TableRow"

import API from "../utils/API";

class Directory extends Component {

    state = {
        result:[]
    }

    componentDidMount() {
        this.searchPeople();
      }
    
      searchPeople = (query) => {
        API.search(query).then((res) => this.setState({ result: res.data.results}));
      };
    

  render() {
    return (
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
                
                    {this.state.result.map(employee =>(
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
    );
  }
}

export default Directory;
