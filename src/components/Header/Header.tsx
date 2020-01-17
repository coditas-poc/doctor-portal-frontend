import * as React from 'react';
import logo from '@assets/images/app-logo.png';
import './styles/Header.style.scss';

export interface IHeaderProps {}
export interface IHeaderState {}

export class Header extends React.PureComponent<any, IHeaderState> {
    render() {
        return (
            <nav className="application-header">
                <img src={logo} />
            </nav>
        )
    }
}