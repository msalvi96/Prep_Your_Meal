import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom'

import { Container, Row, Col, Card, CardBody, } from 'reactstrap';

import { isUserAuthenticated } from '../../helpers/authUtils';
import logo from '../../assets/images/logos/Logo_v1.png';
import mailSvg from '../../assets/images/mail_confirm.png';


class Confirm extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this._isMounted = true;
        document.body.classList.add('authentication-bg');
        document.body.classList.add('authentication-bg-pattern');
    }

    componentWillUnmount() {
        this._isMounted = false;
        document.body.classList.remove('authentication-bg');
        document.body.classList.remove('authentication-bg-pattern');
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
                                            <span><img src={logo} alt="" height="35" /></span>
                                        </Link>
                                        <p></p>
                                    </div>

                                    <Card className="text-center">
                                        <CardBody className="p-4 position-relative">
                                            <div className="mb-4">
                                                <h4 className="text-uppercase mt-0">Confirm Email</h4>
                                            </div>

                                            <img src={mailSvg} alt="img" width="86" className="mx-auto d-block" />

                                            <p className="text-muted font-14 mt-2"> A confirmation email has been sent to your email!</p>

                                            <p className="text-center">
                                                <Link className="btn btn-block btn-blue waves-effect waves-light mt-3" to="/login">Back to Login</Link>
                                            </p>

                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </React.Fragment>}
            </React.Fragment>
        )
    }
}

export default connect()(Confirm);