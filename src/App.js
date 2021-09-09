import React from "react";
import profile from "./components/profile.jpeg";
import Interval from "./components/Interval";

export default class App extends React.Component {
  state = {
    shows: true,
    Person: {
      fullName: "Ousmane Fall",
      bio: "I'm javascript developer",
      imgSrc: profile,
      profession: "run for fun",
    },
    currentCount: 0,
    intervalId: 0,
  };

  toggle = () => {
    this.state.shows === true
      ? this.setState({ shows: false })
      : this.setState({ shows: true });
  };

  render() {
    if (this.state.shows === true) {
      return (
        <>
          <h2>FullName : {this.state.Person.fullName}</h2>
          <h2>Bio : {this.state.Person.bio}</h2>
          <h2>Profession : {this.state.Person.profession}</h2>
          <br />
          <button onClick={this.toggle}>click Me</button>
          <Interval />
          <img src={this.state.Person.imgSrc} alt="myprofile" />
          <br />
          <br />
        </>
      );
    } else {
      return (
        <>
          <p>Person is hidden !!!!</p>
          <br />
          <button onClick={this.toggle}>click Me</button>
        </>
      );
    }
  }
}
