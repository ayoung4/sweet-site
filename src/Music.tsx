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
                    url: `${process.env.PUBLIC_URL}/music/1.wav`,
                    cover: `${process.env.PUBLIC_URL}/covers/lynx.jpg`,
                    title: 'Tasty Morsels #1',
                    artist: [
                        '',
                    ],
                },
                {
                    url: `${process.env.PUBLIC_URL}/music/2.wav`,
                    cover: `${process.env.PUBLIC_URL}/covers/lynx.jpg`,
                    title: 'Tasty Morsels #2',
                    artist: [
                        '',
                    ],
                },
                {
                    url: `${process.env.PUBLIC_URL}/music/3.wav`,
                    cover: `${process.env.PUBLIC_URL}/covers/lynx.jpg`,
                    title: 'Tasty Morsels #3',
                    artist: [
                        '',
                    ],
                },
                {
                    url: `${process.env.PUBLIC_URL}/music/4.wav`,
                    cover: `${process.env.PUBLIC_URL}/covers/lynx.jpg`,
                    title: 'Tasty Morsels #4',
                    artist: [
                        '',
                    ],
                },
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
                    url: `${process.env.PUBLIC_URL}/music/pixel-lynx.wav`,
                    cover: `${process.env.PUBLIC_URL}/covers/pixel.jpg`,
                    title: 'Pixel',
                    artist: [
                        '',
                    ],
                },
                {
                    url: `${process.env.PUBLIC_URL}/music/pluck.wav`,
                    cover: `${process.env.PUBLIC_URL}/covers/pixel.jpg`,
                    title: 'Pluckin Around',
                    artist: [
                        '',
                    ],
                },
                {
                    url: `${process.env.PUBLIC_URL}/music/REPTILE.wav`,
                    cover: `${process.env.PUBLIC_URL}/covers/pixel.jpg`,
                    title: 'The Reptile',
                    artist: [
                        '',
                    ],
                },
                {
                    url: `${process.env.PUBLIC_URL}/music/autopan.wav`,
                    cover: `${process.env.PUBLIC_URL}/covers/pixel.jpg`,
                    title: 'Played Out',
                    artist: [
                        '',
                    ],
                },
                {
                    url: `${process.env.PUBLIC_URL}/music/biggie-rmx.wav`,
                    cover: `${process.env.PUBLIC_URL}/covers/pixel.jpg`,
                    title: 'Biggie rmx',
                    artist: [
                        '',
                    ],
                }
             ]}
        />
    </section>
);