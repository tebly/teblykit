import React from 'react';
import { storiesOf } from '@storybook/react';
import LinkTo from '@storybook/addon-links/react'
import './styles/storybook-header.scss';

import {
    STORYBOOK_HEADER,
    STORYBOOK_SECTION,
    STORYBOOK_SECTION_TITLE,
    STORYBOOK_COMPONENT_MENU,
    STORYBOOK_COMPONENT_LIST,
    STORYBOOK_COMPONENT_VIEW,
} from './constants';

const main = () => {
    const Link = (props) => (
        <li className={STORYBOOK_COMPONENT_LIST}>
            - <LinkTo {...props} className={STORYBOOK_COMPONENT_VIEW}> {props.text} </LinkTo>
        </li>
    );
    return storiesOf('.Tebly', module)
        .add('Components List', () => (
            <div>
                <header className={STORYBOOK_HEADER}>
                    TEBLY
                </header>
                <section className={STORYBOOK_SECTION}>
                    <h2 className= {STORYBOOK_SECTION_TITLE}>Components</h2>
                    <code>src/shared/components</code>
                    <ul className={STORYBOOK_COMPONENT_MENU}>
                        <Link kind={'Title'} story={'Default'} text={'Title'} />
                    </ul>
                </section>
            </div>
        ));
};

export default main;
