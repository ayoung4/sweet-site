import React from 'react';

import { Layout } from './Layout';
import { Feed } from './Feed';

export const App = () => (
    <div className="App">
        <Layout>
            <Feed />
        </Layout>
    </div>
);

export default App;
