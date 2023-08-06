import React from 'react';
import HomeScreenServiceComponent from '../service/index.service';
import HomeScreenComponent from '../components/index.js';

class HomeScreen extends React.Component {
    //created separate component for business logic and view
    render() {
        return (
            <HomeScreenServiceComponent {...this.props}>
                {
                    props => (
                        <HomeScreenComponent
                            {...props}
                        />
                    )
                }
            </HomeScreenServiceComponent>
        );
    };
};

export default HomeScreen;