import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Collapse } from 'reactstrap';


const NavMenuContent = (props) => {

    return <React.Fragment>
        <ul className="navigation-menu">
            <li className="has-submenu">
                <Link to="/dashboard" className="side-nav-link-ref">
                    <i className="mdi mdi-fridge"></i>
                    Dashboard
                </Link>
            </li>
            <li className="has-submenu">
                <Link to="/recipes" className="side-nav-link-ref">
                    <i className="mdi mdi-book-open-page-variant"></i>
                    Recipes
                </Link>
            </li>
            <li className="has-submenu">
                <Link to="/planner" className="side-nav-link-ref">
                    <i className="mdi mdi-file-document-box-multiple"></i>
                    Planner
                </Link>
            </li>
            <li className="has-submenu">
                <Link to="/ingredients" className="side-nav-link-ref">
                    <i className="mdi mdi-leaf"></i>
                    Ingredients
                </Link>
            </li>
        </ul>
    </React.Fragment>
}


class Navbar extends Component {
    constructor(props) {
        super(props);

        this.initMenu = this.initMenu.bind(this);
    }


    componentDidMount = () => {
        this.initMenu();
    }

    initMenu = () => {
        var links = document.getElementsByClassName('side-nav-link-ref');
        var matchingMenuItem = null;
        for (var i = 0; i < links.length; i++) {
            if (this.props.location.pathname === links[i].pathname) {
                matchingMenuItem = links[i];
                break;
            }
        }

        if (matchingMenuItem) {
            matchingMenuItem.classList.add('active');
            var parent = matchingMenuItem.parentElement;


            if (parent) {
                parent.classList.add('active');
                const parent2 = parent.parentElement;
                if (parent2) {
                    parent2.classList.add('in');
                }
                const parent3 = parent2.parentElement;
                if (parent3) {
                    parent3.classList.add('active');
                    var childAnchor = parent3.querySelector('.has-dropdown');
                    if (childAnchor) childAnchor.classList.add('active');
                }

                const parent4 = parent3.parentElement;
                if (parent4)
                    parent4.classList.add('in');
                const parent5 = parent4.parentElement;
                if (parent5)
                    parent5.classList.add('active');
            }
        }
    }

    onMenuClick(event) {
        event.preventDefault();
        const nextEl = event.target.nextSibling;
        if (nextEl && !nextEl.classList.contains('open')) {
            const parentEl = event.target.parentNode;
            if (parentEl) { parentEl.classList.remove('open'); }

            nextEl.classList.add('open');
        } else if (nextEl) { nextEl.classList.remove('open'); }
        return false;
    }



    render() {
        return (
            <React.Fragment>
                <div className="topbar-menu">
                    <div className="container-fluid">
                        <Collapse isOpen={this.props.isMenuOpened} id="navigation">
                            <NavMenuContent onMenuClickCallback={this.onMenuClick} />
                            <div className="clearfix"></div>
                        </Collapse>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(connect()(Navbar));
