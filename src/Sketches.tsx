import * as React from 'react';

interface ISectionProps {
    innerRef: any;
    inViewport: boolean;
    enterCount: number;
    leaveCount: number;
}

export const Cam: React.SFC<ISectionProps> = ({ inViewport, innerRef }) => (
    <section ref={innerRef}>
        <div className='row'>
            <div className='centered column'>
                {
                    inViewport
                        ? (<iframe
                            width='800'
                            height='560'
                            src={`${process.env.PUBLIC_URL}/sketches/cam/index.html`}
                        />)
                        : (<div style={{
                            width: '800px',
                            height: '560px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            background: '#666',
                        }}></div>)
                }
            </div>
        </div>
    </section>
);

export const Rows: React.SFC<ISectionProps> = ({ inViewport, innerRef }) => (
    <section ref={innerRef} style={{ textAlign: 'center' }}>
        {[...Array(4)].map(
            (i, j) => (
                <div className='row' key={j}>
                    <div className='centered column'>
                        {
                            inViewport
                                ? (<iframe
                                    width='700'
                                    height='100'
                                    className='u-max-full-width'
                                    src={`${process.env.PUBLIC_URL}/sketches/life/index.html`}
                                />)
                                : (<div style={{
                                    width: '700px',
                                    height: '100px',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    background: '#666'
                                }}></div>)
                        }
                    </div>
                </div>
            )
        )}
    </section>
);

export const Numbers: React.SFC<ISectionProps> = ({ inViewport, innerRef }) => (
    <section ref={innerRef} style={{ textAlign: 'center' }}>
        <div className='row'>
            <div className='centered column'>
                {
                    inViewport
                        ? (<iframe
                            width='500'
                            height='500'
                            className='u-max-full-width'
                            src={`${process.env.PUBLIC_URL}/sketches/numbers/index.html`}
                        />)
                        : (<div style={{
                            width: '500px',
                            height: '500px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            background: '#666'
                        }}></div>)
                }  
                <p style={{ marginTop: '2rem', marginBottom: 0 }}>visualizing rational, irrational</p>
                <p style={{ marginTop: 0 }}>and transcedental numbers</p>
            </div>
        </div>
    </section>
);

export const Brain: React.SFC<ISectionProps> = ({ inViewport, innerRef }) => (
    <section ref={innerRef} style={{ textAlign: 'center' }}>
        <div className='row'>
            <div className='centered six columns'>
                {
                    inViewport
                        ? (<iframe
                            width='300'
                            height='300'
                            className='u-max-full-width'
                            src={`${process.env.PUBLIC_URL}/sketches/life2/1.html`}
                        />)
                        : (<div style={{
                            width: '300px',
                            height: '300px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            background: '#666'
                        }}></div>)
                }
            </div>
            <div className='centered six columns'>
                {
                    inViewport
                        ? (<iframe
                            width='300'
                            height='300'
                            className='u-max-full-width'
                            src={`${process.env.PUBLIC_URL}/sketches/life2/2.html`}
                        />)
                        : (<div style={{
                            width: '300px',
                            height: '300px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            background: '#666'
                        }}></div>)
                }
            </div>
        </div>
        <div className='row'>
            <div className='centered six columns'>
                {
                    inViewport
                        ? (<iframe
                            width='300'
                            height='300'
                            className='u-max-full-width'
                            src={`${process.env.PUBLIC_URL}/sketches/life2/3.html`}
                        />)
                        : (<div style={{
                            width: '300px',
                            height: '300px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            background: '#666'
                        }}></div>)
                }
            </div>
            <div className='centered six columns'>
                {
                    inViewport
                        ? (<iframe
                            width='300'
                            height='300'
                            className='u-max-full-width'
                            src={`${process.env.PUBLIC_URL}/sketches/life2/4.html`}
                        />)
                        : (<div style={{
                            width: '300px',
                            height: '300px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            background: '#666'
                        }}></div>)
                }
            </div>
        </div>
    </section>
);
