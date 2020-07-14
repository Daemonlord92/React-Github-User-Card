import React from 'react'
import axios from 'axios'
import UserCard from "./UserCard";
import FollowerCard from "./FollowerCard";
import Col from "reactstrap/es/Col";

class CardComponent extends React.Component {
	state = {
		user: {},
		followers: [],
	}

	componentDidMount() {
		axios
			.get("https://api.github.com/users/Daemonlord92")
			.then(res => {
				this.setState({user: res.data })
				axios
					.get("https://api.github.com/users/Daemonlord92/followers")
					.then(res => {
						res.data.forEach(user => {
							axios.get(user.url).then(res => {
								this.setState({
										followers: [...this.state.followers, res.data]
									})
								})
							})
						})
						.catch(err => console.log("MJM: CardComponent: Followers", err))
					})
					.catch(err => console.log("MJM: CardComponent: Self", err))
	}
	render() {
		return (
			<Col>
				<UserCard user={this.state.user} />
				{this.state.followers.map(follower => (
					<FollowerCard key={follower.id} follower={follower}/>
				))}
			</Col>
		)
	}
}

export default CardComponent