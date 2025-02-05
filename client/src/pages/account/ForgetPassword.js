import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom'

import { Container, Row, Col, Card, CardBody, FormGroup, Button, Alert } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

import { isUserAuthenticated } from '../../helpers/authUtils';
import Loader from '../../components/Loader';
import logo from '../../assets/images/logos/Logo_v1.png';

class ForgetPassword extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.handleValidSubmit = this.handleValidSubmit.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
        this.state = {
            passwordResetSuccessful: false,
            isLoading: false
        }
    }

    componentDidMount() {
        this._isMounted = true;
        document.body.classList.add('authentication-bg');
    }

    componentWillUnmount() {
        this._isMounted = false;
        document.body.classList.remove('authentication-bg');
    }

    onDismiss() {
        this.setState({ passwordResetSuccessful: false });
    }

    handleValidSubmit = (event, values) => {
        console.log(values);

        this.setState({ isLoading: true });

        // api call to register 

        window.setTimeout(() => {
            this.setState({ isLoading: false, passwordResetSuccessful: true });
        }, 1000)
    }

    renderRedirectToRoot = () => {
        const isAuthTokenValid = isUserAuthenticated();
        if (isAuthTokenValid) {
            return <Redirect to='/' />
        }
    }

    render() {
        const isAuthTokenValid = isUserAuthenticated();
        return (
            <React.Fragment>

                {this.renderRedirectToRoot()}

                {(this._isMounted || !isAuthTokenValid) && <React.Fragment>

                    <div className="account-pages mt-5 mb-5">
                        <Container>
                            <Row className="justify-content-center">
                                <Col md={8} lg={6} xl={5} >
                                    <div className="text-center">
                                        <Link to="/">
                                        <span><img src={logo} alt="" height="40" /></span>  
                                        </Link>
                                        <p></p>
                                    </div>
                                    <Card >
                                        <CardBody className="p-4 position-relative">
                                            { /* preloader */}
                                            {this.state.isLoading && <Loader />}

                                            <div className="text-center mb-4">
                                                <h4 className="text-uppercase mt-0 mb-3">Reset Password</h4>
                                                <p className="text-muted mb-0 font-13">Enter your email address and we'll send you an email with instructions to reset your password.  </p>
                                            </div>

                                            <Alert color="success" className="text-center" isOpen={this.state.passwordResetSuccessful} toggle={this.onDismiss}>
                                                We sent you an email containing a link to reset your password!
                                            </Alert>

                                            <AvForm onValidSubmit={this.handleValidSubmit}>
                                                <AvField type="email" name="email" label="Email address" placeholder="Enter your email" required />

                                                <FormGroup className="mb-0 text-center">
                                                    <Button color="primary" className="btn-block">Reset Password</Button>
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

export default connect()(ForgetPassword);