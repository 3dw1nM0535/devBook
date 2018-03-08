import React from "react";
import { Grid, Header } from "semantic-ui-react";

import ProfileForm from "../forms/ProfileForm";

class ProfilesettingPage extends React.Component {
	state = {};
	render() {
		return (
			<Grid as="h2">
				<Header as="h2">Profile component</Header>
				<ProfileForm />
			</Grid>
		);
	}
}

export default ProfilesettingPage;
