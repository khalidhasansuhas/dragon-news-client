import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h2> here is our terms and conditions</h2>
            <p>go back Registration <Link to="/register">Register</Link></p>
        </div>
    );
};

export default TermsAndConditions;