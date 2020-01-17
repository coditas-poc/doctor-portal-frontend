// Base component for Input box
// author AMANK
// `type`: oneOf['text', 'number', 'email', 'url', etc]
// `value`: text value for input box
// `maxLength`: max length for input text
// `className`: custom class name for input box
// `onChange`: chnage event event for the input box
// `placeholder`: placeholder for the input box
// `disabled`: disabled property for the input box

import React, { PureComponent, ChangeEvent } from 'react';
import './styles/InputBox.style.scss';

export interface IInputBoxProps {
    icon: string,
    value: string,
    maxLength?: number,
    type: string,
    className?: string,
    placeholder: string,
    onChange: (e: ChangeEvent) => void,
    disabled?: boolean
}

export class InputBox extends PureComponent<IInputBoxProps> {
    render() {
        const {
            icon,
            value,
            maxLength,
            type,
            className,
            onChange,
            placeholder,
            disabled
        } = this.props;
        return (
            <section className="input-box-container">
                {icon && <img className="input-icon" src={icon} />}
                <input
                    type={type}
                    maxLength={maxLength}
                    value={value}
                    className={`main-input ${className || ''} ${icon ? 'with-icon' : ''}`}
                    placeholder={placeholder}
                    onChange={e => onChange(e)}
                    disabled={disabled || false} />
            </section>
        );
    }
}
