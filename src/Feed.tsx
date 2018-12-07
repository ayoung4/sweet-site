import * as React from 'react';

import { Earth, Cacti } from './Photography';
import { Rows, Cam } from './Sketches';
import { Breaks } from './Music';

const handleViewport = require('react-in-viewport').default;

export const Feed: React.SFC = () => (
    <React.Fragment>
        {
            [Breaks, Rows, Cacti, Cam, Earth]
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
