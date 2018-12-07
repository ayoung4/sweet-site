import * as React from 'react';

import { Earth, Cacti } from './Photography';
import { Rows, Cam, Brain, Numbers } from './Sketches';
import { Breaks } from './Music';

const handleViewport = require('react-in-viewport').default;

export const Feed: React.SFC = () => (
    <React.Fragment>
        {
            [Numbers, Brain, Breaks, Cacti, Rows, Earth, Cam]
                .map(
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
