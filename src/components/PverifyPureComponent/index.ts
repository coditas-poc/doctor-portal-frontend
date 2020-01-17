import { Component } from "react";
import * as isEqual from "react-fast-compare";

export class PverifyPureComponent extends Component<any, any> {
  shouldComponentUpdate(nextProps, nextState) {
    return !isEqual(nextProps, this.props) || !isEqual(nextState, this.state);
  }
}
