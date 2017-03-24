import React from 'react';
import Demo from './demo';

module.exports = React.createClass({
    displayName: 'About',
    render: function() {
        return (
            <p>
                Current: <strong>About</strong>
                <Demo />
            </p>
        );
    }
});
