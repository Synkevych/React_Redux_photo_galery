import React from "react";
import { connect } from "react-redux";
import { User } from "../components/User";
import { Page } from "../components/Page";
//прокидаємо  setYear
import { setYear } from "../actions/PageActions";

// прокидаэмо this.props = store
class App extends React.Component {
  render() {
    const { user, page, setYearAction } = this.props;
    console.log("this page", page.photos);
    return (
      <div className="App">
        <User surname={user.surname} name={user.name} />
        <header>This is your's photos:</header>
        <Page page={page.photos} year={page.year} setYear={setYearAction} />
        {/* <h3> Hello: {this.props.user.surname} {this.props.user.name}! </h3>
        <h3> You have: {this.props.page.photos.length} photo, for{" "}
          {this.props.page.year} year.</h3> */}
      </div>
    );
  }
}

//позволяет вытянуть из store те reducers  которые нам нужны
// он позволяет не перезагружать страницы при общем изменении в store
// а реагировать только на конкретные изменения
const mapStateToProps = store => {
  console.log(`This is store`, store.page, store.user);
  //возвращаем объект который прикрепится к this.props
  return {
    user: store.user.user,
    page: store.page
  };
};
// первый ааргумент получает dispatch
// можем диспатчить action которые будут пойманы рредюсером
const mapDispatchToProps = dispatch => {
  //setYearAction: year => dispatch(setYear(year)),
  console.log("mapDispatchToProps has:", dispatch);
  return {
    //возвращаем объект который прикрепится к this.props
    //создаем функцию setYearAction которая диспатчит импортированый выше setYear с переданым кодом
    setYearAction: year => dispatch(setYear(year))
  };
};
// подключить React компонент к Redux store.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
