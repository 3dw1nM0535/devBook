import React from "react";
import { Grid } from "semantic-ui-react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";

class AttendeeDashboardPage extends React.Component {
  render() {
    const { isConfirmed } = this.props;

    return (
      <Grid padded centered stackable columns={1}>
        <Grid.Column>
          { !isConfirmed && <ConfirmEmailMessage /> }
        </Grid.Column>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    isConfirmed: state.user.confirmed,
  };
}

AttendeeDashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(AttendeeDashboardPage);
