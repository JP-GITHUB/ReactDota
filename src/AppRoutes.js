import React, { Component } from 'react';

// Components
import Header from './components/Global/Header';
import App from './components/App';

class AppRoutes extends Component {
    render() {
        return (
            <div>
                <Header />
                <App />
            </div>
        )
    }
}

export default AppRoutes;