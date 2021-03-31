import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {signIn} from "../../redux/actions/AuthActions"

const HomePage = (props) => {
    const {signIn} = props

    useEffect(()=>{
        signIn()
    })

    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

HomePage.prototype = {
    customerData: PropTypes.object.isRequired,
    signIn: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        customerData: state.customer.customerData
    };
};

export default connect(mapStateToProps, {signIn})(HomePage);