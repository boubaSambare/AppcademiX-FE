import React, { Component } from 'react';
import { Container, Col, Fade, Row } from 'reactstrap'
import RatingsPage from './RatingsPage';
import PostModal from './PostModal';
// import FontAwesome from 'react-fontawesome'

class PostsList extends Component {
    state = {
        posts: [],
        postModal: false,
        selectedPost: undefined
    }

    render() {
        return (
            <Fade>
                {this.state.postModal && <PostModal open={this.state.postModal} toggle={this.togglePostModal} post={this.state.selectedPost} />}
                {this.state.posts && this.props.posts.map((post, index) =>
                    <Container className="m-4 mx-auto post" key={index}>
                        <Row>
                            <div className="m-2">
                                <img className="post-image" src={post.image} alt="Post Default Pic" />
                            </div>
                            <Col>
                                <Row><h4>{post.title}</h4></Row>
                                <Row>{post.description}</Row>
                            </Col>
                            <RatingsPage id={post._id} refresh={this.props.refresh} count={post.ratingsCount}/>
                        </Row>
                    </Container>
                )}
            </Fade>
        );
    }

    togglePostModal = () => {
        this.setState({
            postModal: !this.state.postModal
        })
    }
}

export default PostsList;