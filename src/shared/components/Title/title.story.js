import React from 'react';
import { storiesOf } from '@storybook/react';
import Title from './Title';

storiesOf('Title', module)
    .add('Default',
        (() => {
            return <Title
                label={'Title Storybook'}
            />;
        }),
    );

