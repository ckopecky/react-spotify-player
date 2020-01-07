import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle, CardImgOverlay } from 'reactstrap';
import "./Dashboard.css";

class Dashboard extends Component {
    state = {
        playlists: [],
        token: '',

    }
    componentDidMount() {
        this.getCurrentUserPlaylists(this.props.currentUser.accessToken);
    }

    getCurrentUserPlaylists = (token) => {
        axios({
            method: 'GET',
            url: 'https://api.spotify.com/v1/me/playlists',
            headers: {
            'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
            this.setState({
                token,
                data: response.data,
                playlists: response.data.items,
                loading: false
            }, () => {
                console.log(this.state, "player state");
            })
            })
            .catch(error => {
            console.log({Error: error});
            })
        }

    render() {
        if (this.props.loggedIn) {
            //list of Playlists
            console.log(this.props.currentUser);
            return (
                <div className="dashboard-container">
                    {this.state.playlists.map(playlist => {
                        console.log(playlist);
                        return (
                            <div className="playlist-container">
                                <Card>
                                    <CardBody>
                                        <CardTitle>
                                            {playlist.name}
                                        </CardTitle>
                                        <CardSubtitle>
                                            {playlist.subtitle}
                                        </CardSubtitle>
                                    </CardBody>
                                    <CardImg src={playlist.images[0].url} alt={playlist.name}/>
                                    <CardBody>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        <CardLink href="#">Open Playlist</CardLink>
                                    </CardBody>
                                </Card>
                            </div>
                        )
                    })}
                </div>
            );
        } else {
            console.log(this.props);            

            return (
                <div>Error</div>
            )
        }
    }
}

export default Dashboard;