import React, { Profiler } from 'react';

import Directory from '../../components/directory/directory.component';

import { HomeContainer } from './home.styles';

const HomePage = () => {
    return (
        <HomeContainer>
            <Profiler
                id="Directory"
                onRender={(id, phase, actualDuration) => console.log({ id, phase, actualDuration })}
            >
                <Directory />
            </Profiler>
        </HomeContainer>
    );
};

export default HomePage;
