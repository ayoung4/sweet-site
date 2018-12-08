import * as React from 'react';

import { Earth, Cacti } from './Photography';
import { Rows, Cam, Brain, Numbers } from './Sketches';
import { Pixel, Breaks } from './Music';

const handleViewport = require('react-in-viewport').default;

const items = [
    Pixel,
    Numbers,
    Breaks,
    Brain,
    Cacti,
    Rows,
    Earth,
    Cam,
];

export const Feed: React.SFC = () => (
    <React.Fragment>
        {
            items.map(
                (Component, i) => {
                    const WithViewport = handleViewport(Component);
                    return (
                        <WithViewport key={i} />
                    );
                }
            )
        }
    </React.Fragment>
);
