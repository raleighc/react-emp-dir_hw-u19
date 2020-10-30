import React from 'react';

const TableRow = (props) => {
    return (
        <tr>
            <th scope="row"><img src={props.picture} /></th>
                  <td>{props.name.first + ' ' + props.name.last}</td>
                  <td>{props.phone}</td>
                  <td>{props.email}</td>
                  <td>{props.dob}</td>
        </tr>
    );
};

export default TableRow;