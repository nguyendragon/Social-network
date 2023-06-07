import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './components/Layout';
import { publicRoutes } from './routes';

function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((Item, index) => {
                    return (
                        <Route
                            key={index}
                            path={Item.path}
                            element={
                                <DefaultLayout link={Item.path} layout={Item.Layout}>
                                    <Item.component />
                                </DefaultLayout>
                            }
                            exact
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
