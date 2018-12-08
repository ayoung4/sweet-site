import * as React from 'react';

const MusicPlayer = require('react-responsive-music-player').default;

export const Breaks: React.SFC = () => (
    <section>
        <MusicPlayer
            style={{
                marginLeft: 'auto',
                marginRight: 'auto',
            }}
            playlist={[
                {
                    url: `${process.env.PUBLIC_URL}/photos/rock-2.jpg`,
                    cover: `${process.env.PUBLIC_URL}/covers/lynx.jpg`,
                    title: 'Breakz',
                    artist: [
                        'a young',
                    ],
                }
             ]}
        />
    </section>
);

export const Pixel: React.SFC = () => (
    <section>
        <MusicPlayer
            style={{
                marginLeft: 'auto',
                marginRight: 'auto',
            }}
            playlist={[
                {
                    url: `${process.env.PUBLIC_URL}/photos/rock-2.jpg`,
                    cover: `${process.env.PUBLIC_URL}/covers/pixel.jpg`,
                    title: 'Pixel',
                    artist: [
                        'a young',
                    ],
                }
             ]}
        />
    </section>
);