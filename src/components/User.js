import React from "react";
import PropTypes from "prop-types";

export class User extends React.Component {
  render() {
    const { name, surname} = this.props;
    console.log(name,surname);
    return (
      <div>
        <p> Hello, {surname} {name}!</p>
      </div>
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired
};
