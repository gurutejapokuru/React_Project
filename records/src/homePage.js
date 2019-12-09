import React, { Component } from 'react';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",email:"",phone:"",dob:"",streetAddress:"",city:"",selectedState:"",selectedCountry:"",
      state:["select-state","NSW", "VIC", "QLD", "NT", "ACT", "SA", "TAS", "WA", "TN", "KL", "AP", "KA"],
      country:["select-country","Australia","India"],
      resultObj:{},
      results:[],
      viewResults:false,
      viewForm:true
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event)
  {
    
    this.setState({[event.target.name]:event.target.value}); //storing the filled value
    
    
  }
  handleSubmit()
  {
    const {name,email,phone,dob,streetAddress,city,selectedState,selectedCountry} = this.state;
    if(name !== "" && email !== "" && phone !== "" && dob !== "" && streetAddress !== "" && city !== "" && selectedState !== ""  && selectedCountry !== "")
    {
      let obj = {name:name,email:email,phone:phone,dob:dob,streetAddress:streetAddress,selectedState:selectedState,selectedCountry:selectedCountry,city:city}
      this.props.parent.updateState(obj); //updating tthe value to results
    }
    else
    {
      alert("Please Fill all the details") //error message on empty fields
    }
    
  }
  render()
  {
    return (
      <div className="HomePage">
        <form>
        <div className="title">
          <h2>Fill your records</h2>
        </div>
        <div className="info">
          <input type="text" name="name" value = {this.state.name}  onChange={(event) => { this.handleChange(event) }} placeholder="Full name" />
          <input type="text" name="phone" value = {this.state.phone}  onChange={(event) => { this.handleChange(event) }}  placeholder="Phone number" />
          <input type="text" name="email" value = {this.state.email}  onChange={(event) => { this.handleChange(event) }}  placeholder="Email" />
          <label style = {{color:"#fff"}}>DOB: </label><input type="date" value = {this.state.dob}  onChange={(event) => { this.handleChange(event) }}  name="dob" />
          <h2>Address:</h2>
          <input type="text" name="streetAddress" value = {this.state.streetAddress}  onChange={(event) => { this.handleChange(event) }}  placeholder="Street Address" />
          <input type="text" name="city" value = {this.state.city}  onChange={(event) => { this.handleChange(event) }}  placeholder="City" />
          <select value={this.state.selectedState} onChange={(event) => this.handleChange(event) } name ="selectedState">
          {this.state.state.map((value) => <option key={value} value={value}>{value}</option>)}
          </select>
          <select value={this.state.selectedCountry} onChange={(event) => this.handleChange(event) } name ="selectedCountry">
          {this.state.country.map((value) => <option key={value} value={value}>{value}</option>)}
          </select>
        </div>
        <button type="button" href="/">View Results</button>
        <button type="button" href="/" onClick = {this.handleSubmit}>Submit</button>
      </form>
      </div>
    );
  }
}

export default HomePage;
