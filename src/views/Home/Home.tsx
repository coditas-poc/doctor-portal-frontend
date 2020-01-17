import * as React from "react";
import "./styles/Home.style.scss";
import { Header } from "@components/Header/Header";
import { WelcomeBanner } from "./containers/WelcomeBanner/WelcomeBanner";

export interface IHomeProps {}
export interface IHomeState {
	selectedNav: string
}

export class Home extends React.PureComponent<any, IHomeState> {
	state = {
		selectedNav: 'Provider Portal'
	};

	handleLoginClick = () => {}

	handleNavClick = (selectedNav) => {
		this.setState({ selectedNav });
	}

	render() {
		const {
			selectedNav
		} = this.state;
		return (
			<section className="home-screen">
				<Header
					leftNav={[
						{ label: 'Provider Portal', selected: selectedNav === 'Provider Portal', onClick: () => this.handleNavClick('Provider Portal') }
					]}
					rightNav={[
						{ type: 'secondary', label: 'Login', onClick: this.handleLoginClick }
					]} />
				<WelcomeBanner />
			</section>
		);
	}
}
