// Authenticated & Unauthenticated user top bar navigation
import React from "react";
import { Menu, Dropdown, Image, Container } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import gravatarUrl from "gravatar-url";

import * as actions from "../../actions/authUser";

class TopNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "Home",
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { logout, user } = this.props;
    const { activeItem } = this.state;

    return (
      <Menu pointing secondary stackable>
        <Menu.Item as={Link} active={activeItem === "Home"} to="/dashboard" name="Home" onClick={this.handleItemClick} />
          <Menu.Menu position="right">
            <Dropdown trigger={<Image avatar src={gravatarUrl(user.email)} />}>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
      </Menu>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

TopNavigation.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, { logout: actions.logout })(TopNavigation);
