import React, { PureComponent } from 'react';
import './styles/WelcomeBanner.style.scss';
import { InputBox } from '@basecomponents/InputBox/InputBox';
import lock from '@assets/images/lock.svg';
import calendar from '@assets/images/calendar.svg';
import { Button } from '@basecomponents/Button/Button';

export interface IWelcomeBannerProps {}
export interface IWelcomeBannerState {
    otp: string,
    patientBirthYear: string
}

export class WelcomeBanner extends PureComponent<IWelcomeBannerProps, IWelcomeBannerState> {
    state = {
        otp: '',
        patientBirthYear: ''
    }

    otpChange = (elem: any) => {
        this.setState({ otp: elem.target.value })
    }

    birthYearChange = (elem: any) => {
        this.setState({ patientBirthYear: elem.target.value });
    }

    handleSubmission = () => {
        console.log('>> test submit');
    }

    render() {
        const { otp, patientBirthYear } = this.state;
        return (
            <section className="welcome-banner">
                <label className="welcome-title">Welcome to Provider portal</label>
                <p className="welcome-subtext">
                    The Provider Portal allows patients to temporarily share their provider information
                </p>
                <label className="info-section-title">One time password</label>
                <div className="info-input-section">
                    <InputBox
                        icon={lock}
                        maxLength={6}
                        value={otp}
                        type="number"
                        placeholder="OTP"
                        className="otp-input"
                        onChange={this.otpChange} />
                    <InputBox
                        icon={calendar}
                        maxLength={4}
                        value={patientBirthYear}
                        type="number"
                        placeholder="Patient's Birth Year"
                        className="year-input"
                        onChange={this.birthYearChange} />
                </div>
                <Button
                    type="primary"
                    className="submit-btn"
                    label="View Patient info"
                    onClick={this.handleSubmission} />
            </section>
        );
    }
}