import * as React from 'react';
import logo from '@assets/images/app-logo.png';
import './styles/Header.style.scss';
import { Button } from '@basecomponents/Button/Button';

export interface IHeaderProps {
    leftNav: Array<{ label: string, selected: boolean, onClick: () => void }>
    rightNav: Array<{ type: string, label: string, onClick: () => void }>
}
export interface IHeaderState {}

export class Header extends React.PureComponent<IHeaderProps, IHeaderState> {
    render() {
        const { leftNav, rightNav } = this.props;
        return (
            <nav className="application-header">
                <aside className="left-nav">
                    <img
                        className="app-logo"
                        title="myHealthID" 
                        src={logo} />
                        <div className="left-nav-options">
                            {leftNav.map((item, key) => (
                                <div key={key} className={`left-nav-option-item ${item.selected ? 'selected' : ''}`} onClick={item.onClick}>{item.label}</div>
                            ))}
                        </div>
                </aside>
                <aside className="right-nav">
                    {rightNav.map((item, key) => (
                        <Button type={item.type} onClick={item.onClick} label={item.label} key={key} />
                    ))}
                </aside>
            </nav>
        )
    }
}