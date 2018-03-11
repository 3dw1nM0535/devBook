// Authenticated & Unauthenticated user top bar navigation
import React from "react";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import * as actions from "../../actions/authUser";

class TopNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "Home",
      defaultAvatar: "https://res.cloudinary.com/dazskjikr/image/upload/v1520713650/363633-200.png",
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { logout, user } = this.props;
    const { activeItem, defaultAvatar } = this.state;

    const trigger = (
      <Image avatar src={defaultAvatar} />
    );

    const text = (
      <span>Signed in as <strong>{user.fullname}</strong></span>
    );

    return (
      <Menu secondary>
          <Menu.Menu position="right">
            <Menu.Item as={Link} active={activeItem === "Home"} to="/dashboard" name="Home" onClick={this.handleItemClick} />
            <Menu.Item as={Link} active={activeItem === "Profile"} to="/profile" name="Profile" onClick={this.handleItemClick} />
            <Dropdown trigger="Notifications" pointing="top right" className="link item" icon={null} />
            <Dropdown trigger={trigger} pointing="top right" className="link item" icon={null}>
              <Dropdown.Menu>
                <Dropdown.Item text={text} disabled />
								<Dropdown.Item as={Link} to="/profile/settings" text="Settings" icon="settings" />
                <Dropdown.Item text="Logout" onClick={() => logout()} icon="sign out"/>
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
  }).isRequired,
};

export default connect(mapStateToProps, { logout: actions.logout })(TopNavigation);
