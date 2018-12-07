import * as React from 'react';

export const Layout: React.SFC<{}> = ({ children }) => (
    <div className='container'>
        <section className='centered'>
            <p>images | visualizations | beats</p>
        </section>
        {children}
        <footer>
            <div className='row'>
                <div className='centered column'>
                    <p>a young | 2018</p>
                </div>
            </div>
        </footer>
    </div>
);
