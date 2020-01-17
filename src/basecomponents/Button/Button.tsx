// Base component for Button
// author AMANK
// `type`: oneOf['primary', 'secondary']: primary renders normal blue button and secondary runs a green button
// `onClick`: click event for the button
// `label`: title label for the button
// `disabled`: disabled property for the button

import React, { PureComponent } from 'react';
import './styles/Button.style.scss';

export interface IButtonProps {
    type?: string,
    className?: string,
    onClick: () => void,
    label: string,
    disabled?: boolean
}

export class Button extends PureComponent<IButtonProps> {
    render() {
        const { type, className, onClick, label, disabled } = this.props;
        return (
            <button className={`main-btn ${type || ''} ${className || ''}`} onClick={onClick} disabled={disabled || false}>{label}</button>
        );
    }
}
