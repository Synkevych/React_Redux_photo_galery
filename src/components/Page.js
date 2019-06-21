import React from "react";
import PropTypes from "prop-types";

export class Page extends React.Component {
  onBtnClick = e => {
    const year = +e.currentTarget.innerText;
    this.props.setYear(year);
  };

  render() {
    const { year, page } = this.props;
    console.log("photos", page);
    return (
      <div>
        <p>
          For today, you have {page} photo, for {year} year.
        </p>
        <div>
          <button onClick={this.onBtnClick}>2017</button>
          <button onClick={this.onBtnClick}>2018</button>
          <button onClick={this.onBtnClick}>2019</button>
        </div>
      </div>
    );
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  page: PropTypes.array.isRequired,
  setYear: PropTypes.func.isRequired
};
