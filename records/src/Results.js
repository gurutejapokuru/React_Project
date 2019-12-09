import React, { Component } from 'react';
import './App.css';

class Results extends Component {
  constructor(props) {
    super(props);
    console.log(props.data);
    this.state = {
        filter:"select",
        values:["select","Australia","India"]
    }
    this.handleBack = this.handleBack.bind(this);
  }
  handleChange(event)
  {
    this.setState({[event.target.name]:event.target.value}); //getting filter value
    
  }
  handleBack()
  {
      this.props.parent.setState({viewForm:true,viewResults:false}); //back to fill form
  }
  render()
  {
    return (
    <div className="Result">
    Filter Value:<select value={this.state.filter} onChange={(event) => this.handleChange(event) } name ="filter">
          {this.state.values.map((value) => <option key={value} value={value}>{value}</option>)}
          </select>
    <table id="customers">
    <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Date Of Birth</th>
        <th>Address</th>
        <th>City</th>
        <th>State</th>
        <th>Country</th>
    </tr>
  {this.state.filter === "select" ?<tbody>
  {this.props.data.map((item, i) => {
       return [
        <tr key={i}>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.dob}</td>                      {/*generating data in table*/}
          <td>{item.streetAddress}</td>
          <td>{item.city}</td>
          <td>{item.selectedState}</td>
          <td>{item.selectedCountry}</td>
        </tr> 
       ];
  })}
</tbody>:<tbody>
  {this.props.data.filter(c => c.selectedCountry === this.state.filter && c.selectedCountry !== "select").map((item, i) => {
       return [
        <tr key={i}>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.dob}</td>
          <td>{item.streetAddress}</td>
          <td>{item.city}</td>
          <td>{item.selectedState}</td>
          <td>{item.selectedCountry}</td>
        </tr> 
       ];
  })}
</tbody>}
  </table>
  <button type="button" className="resultBtn" onClick = {this.handleBack}>Fill Records</button>
      </div>
    );
  }
}

export default Results;
