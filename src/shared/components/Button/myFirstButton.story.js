//Made by Adam Copeland.

import React from 'react';
import { storiesOf } from '@storybook/react';
import AwesomeButton from 'myFirstButton.jsx';

storiesOf('Button', module)
    .add('Default',
        (() => {
            return <AwesomeButton buttonName = "Facebook" buttonWidth = {150}/>
        }),
    );
