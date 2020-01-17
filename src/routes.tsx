import * as React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router";
import { HashRouter } from "react-router-dom";

import { PverifyPureComponent } from "@components/PverifyPureComponent";
import { Home } from './views/Home/Home';

export class PverifyRoutes extends PverifyPureComponent {
  state = { isLoading: false };

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </HashRouter>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};

// tslint:disable-next-line:variable-name
const Routes = connect(mapStateToProps)(PverifyRoutes);

export default Routes;
