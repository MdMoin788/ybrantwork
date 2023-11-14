import { Routes as Router, Route } from 'react-router-dom'
import { PrivateRouters } from './PrivateRouters';
import { PublicRouters } from './PublicRouters';
import Home from '../pages/Home';


function Routers() {
    return (

        <Router>
            <Route element={<PrivateRouters />} >
                {/* all private Routes  */}
                <Route
                    path='/'
                    element={
                        <Home />
                    }
                />

            </Route>

            <Route element={<PublicRouters />} >
                {/* all public routes  */}

                
            </Route>
        </Router>

    );
}

export default Routers;
