import React from "react";
import { connect } from "react-redux";
import queryString from "query-string";
// import { setCurrentUser } from "../../actions/authActions";
import { loadUser } from '../../actions/authActions';



class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { profile: [] };
  }

  async componentDidMount() {
    
    let query = queryString.parse(this.props.location.search);
    if (query.token) {
      window.localStorage.setItem("jwt", query.token);
      await this.props.loadUser();
      // this.props.history.push("/profile");
      // await this.props.setCurrentUser();
    }

    // if (!this.props.auth.isAuthenticated) {
    //   this.props.history.push("/");
    // }
  }
  render() {
    if (this.props.auth.isAuthenticated) {
      return (
        <div className="jumbotron">
          <h1 className="display-4">Howdy, {this.props.auth.user.name}!</h1>
          <p className="lead">We got these details about you.</p>
          <hr className="my-4" />
          <center>
            <div className="profile-container">
              <div className="profile-item">
                <ul className="list-group">
                  <li className="list-group-item">
                    <div>
                      <b>Name</b>: {this.props.auth.user.name}
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div>
                      <b>Email</b>: {this.props.auth.user.email}
                    </div>
                  </li>
                </ul>
              </div>
              <div className="profile-item">
                <img
                  className="photo"
                  src={this.props.auth.user.photo}
                  alt=""
                />
              </div>
            </div>
          </center>
        </div>
      );
    } else return <div>Loading...</div>;
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loadUser }
)(Profile);