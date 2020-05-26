import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap'

class FollowerCard extends React.Component {
    //   constructor() {}

    render() {
        if (!this.props.follower) {
            return (
                <div>
                    <p>Loading...</p>
                </div>
            );
        }

        return (
            <Card className="card">
                <CardImg src={this.props.follower.avatar_url} />
                <CardBody className="card-info">
                    <CardTitle className="name">{this.props.follower.name}</CardTitle>
                    <CardText className="followername">{this.props.follower.login}</CardText>
                    <CardText>Location: {this.props.follower.location}</CardText>
                    <CardText>
                        Profile:
                        <a href={`${this.props.follower.html_url}`}>
                            {this.props.follower.html_url}
                        </a>
                    </CardText>
                    <CardText>Followers: {this.props.follower.followers}</CardText>
                    <CardText>Following: {this.props.follower.following}</CardText>
                    <CardText>Bio: {this.props.follower.bio}</CardText>
                </CardBody>
            </Card>
        );
    }
}

export default FollowerCard