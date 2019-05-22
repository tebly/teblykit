import React from 'react';
import {
    configure,
    addDecorator,
    addParameters,
} from '@storybook/react';
import { create } from '@storybook/theming';
import { withInfo } from '@storybook/addon-info';
import mainStory from './index.story';
import {
    STORYBOOK_CSS_BLOCK,
    STORYBOOK_TITLE,
    STORYBOOK_BACKGROUNDS,
} from './constants';
import './styles/index.scss';

const req = require.context('../src/', true, /\.story\.js$/);

function loadStories() {
    mainStory();
    req.keys().forEach((filename) => req(filename))
}

addParameters({
    backgrounds: STORYBOOK_BACKGROUNDS,
    options: {
        theme: create({
            brandTitle: STORYBOOK_TITLE,
        }),
    },
});

addDecorator(withInfo);
addDecorator(story => (
    <div className={ STORYBOOK_CSS_BLOCK }>
        {story()}
    </div>)
);
configure(loadStories, module);
