import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom'

import { Container, Row, Col, Card, CardBody, Label, FormGroup, Button, Alert } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';

import { registerUser } from '../../redux/actions';
import { isUserAuthenticated } from '../../helpers/authUtils';
import Loader from '../../components/Loader';
import logo from '../../assets/images/logos/Logo_v1.png';

class Register extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.handleValidSubmit = this.handleValidSubmit.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;
        document.body.classList.add('authentication-bg');
    }

    componentWillUnmount() {
        this._isMounted = false;
        document.body.classList.remove('authentication-bg');
    }

    handleValidSubmit = (event, values) => {
        this.props.registerUser(values.name, values.email, values.password);
    }

    renderRedirectToRoot = () => {
        const isAuthTokenValid = isUserAuthenticated();
        if (isAuthTokenValid) {
            return <Redirect to='/' />
        }
    }

    renderRedirectToConfirm = () => {
        return <Redirect to='/confirm' />;
    }

    render() {
        const isAuthTokenValid = isUserAuthenticated();
        return (
            <React.Fragment>

                {this.renderRedirectToRoot()}

                {Object.keys(this.props.user || {}).length > 0 && this.renderRedirectToConfirm()}

                {(this._isMounted || !isAuthTokenValid) && <React.Fragment>

                
                    <div className="account-pages mt-5 mb-5">
                        <Container>
                            <Row className="justify-content-center">
                                <Col md={8} lg={6} xl={5} >

                                    <div className="text-center">
                                        <Link to="/">
                                            <span><img src={logo} alt="" height="35" /></span>
                                        </Link>
                                        <p></p>
                                    </div>
                                    <Card>

                                        <CardBody className="p-4 position-relative">
                                            { /* preloader */}
                                            {this.props.loading && <Loader />}

                                            <div className="text-center mb-4">
                                                <h4 className="text-uppercase mt-0">Register</h4>
                                            </div>

                                            {this.props.error && <Alert color="danger" isOpen={this.props.error ? true : false}>
                                                <div>{this.props.error}</div>
                                            </Alert>}

                                            <AvForm onValidSubmit={this.handleValidSubmit}>
                                                <AvField name="name" label="Full Name" placeholder="Enter your name" required />

                                                <AvField type="email" name="email" label="Email address" placeholder="Enter your email" required />

                                                <AvGroup>
                                                    <Label for="password">Password</Label>
                                                    <AvInput type="password" name="password" id="password" placeholder="Enter your password" required />
                                                    <AvFeedback>This field is invalid</AvFeedback>
                                                </AvGroup>

                                                <FormGroup className="mt-3 mb-0 text-center">
                                                    <Button color="primary" className="btn-block">Submit</Button>
                                                </FormGroup>
                                            </AvForm>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>

                            <Row className="mt-1">
                                <Col className="col-12 text-center">
                                    <p className="text-light">Already have an account? <Link to="/login" className="text-light ml-1"><b>Sign In</b></Link></p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </React.Fragment>}

            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    const { user, loading, error } = state.Auth;
    return { user, loading, error };
};

export default connect(mapStateToProps, { registerUser })(Register);