import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getColorModifiers, removeColorProps,
    withHelpersModifiers
} from './../../bulma';
import { getHTMLProps } from './../../helpers';

export interface Help<T> extends Bulma.Color,
    React.HTMLProps<T> {

}

export const Help: React.SFC<Help<HTMLParagraphElement>> = (props) => {
    const className = classNames(
        'help',
        {
            ...getColorModifiers(props),
        },
        props.className,
    );

    const HTMLProps = getHTMLProps(props, removeColorProps);

    return (
        <p {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(Help);