import * as React from "react";
import "./styles/Home.style.scss";
import { Header } from "@components/Header/Header";

export interface IHomeProps {}
export interface IHomeState {}

export class Home extends React.PureComponent<any, IHomeState> {
  state = {};

  render() {
    return (
        <section className="home-screen">
            <Header />
        </section>
    );
  }
}
