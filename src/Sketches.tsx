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
    <section ref={innerRef}>
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
