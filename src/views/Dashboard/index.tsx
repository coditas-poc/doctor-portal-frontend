import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./styles.scss";

export interface IDashboardProps {}
export interface IDashboardState {}

export class DashboardImpl extends React.PureComponent<any, IDashboardState> {
  state = {};
  async componentDidMount() {}

  render() {
    return <div className="dashboard-bg">Welcome to the Dashboard.</div>;
  }
}
const mapStateToProps = (state) => {
  return {};
};

export const Dashboard = withRouter(connect(mapStateToProps)(DashboardImpl));
