import React from "react"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap'

class UserCard extends React.Component {
    //   constructor() {}

    render() {
        if (!this.props.user) {
            return (
                <div>
                <p>Loading...</p>
            </div>
        )
        }

        return (
            <Card className="card">
            <CardImg top width="50%" src={this.props.user.avatar_url} />
        <CardBody className="card-info">
            <CardTitle className="name">{this.props.user.name}</CardTitle>
            <CardText className="username">{this.props.user.login}</CardText>
            <CardText>Location: {this.props.user.location}</CardText>
        <CardText>
        Profile:
    <a href={`${this.props.user.html_url}`}>
        {this.props.user.html_url}
    </a>
        </CardText>
        <CardText>Followers: {this.props.user.followers}</CardText>
        <CardText>Following: {this.props.user.following}</CardText>
        <CardText>Bio: {this.props.user.bio}</CardText>
        </CardBody>
        </Card>
    )
    }
}

export default UserCard