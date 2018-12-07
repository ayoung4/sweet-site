import * as React from 'react';

export const Cacti: React.SFC = () => (
    <section>
        <div className='row'>
            <div className='eight centered columns'>
                <img className='u-max-full-width' src={`${process.env.PUBLIC_URL}/photos/cactus-2.jpg`} alt='' />
            </div>
            <div className='four centered columns'>
                <img className='u-max-full-width' src={`${process.env.PUBLIC_URL}/photos/cactus-1.jpg`} alt='' />
            </div>
        </div>
    </section>
);

export const Earth: React.SFC = () => (
    <section>
        <div className='row'>
            <div className='centered column'>
                <img className='u-max-full-width' src={`${process.env.PUBLIC_URL}/photos/moon.jpg`} alt='' />
            </div>
        </div>
        <div className='row'>
            <div className='five centered columns'>
                <img className='u-max-full-width' src={`${process.env.PUBLIC_URL}/photos/rock-1.jpg`} alt='' />
            </div>
            <div className='seven centered centered columns'>
                <img className='u-max-full-width' src={`${process.env.PUBLIC_URL}/photos/rock-3.jpg`} alt='' />
            </div>
        </div>
        <div className='row'>
            <div className='centered column'>
                <img className='u-max-full-width' src={`${process.env.PUBLIC_URL}/photos/rock-2.jpg`} alt='' />
            </div>
        </div>
    </section>
);

