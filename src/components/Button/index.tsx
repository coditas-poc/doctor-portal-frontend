import * as React from "react";
import { PverifyPureComponent } from "@components/PverifyPureComponent";

export class CRMPButton extends PverifyPureComponent {
  render() {
    const { onClick, label, className } = this.props;
    return (
      <button onClick={onClick} className={className || ""}>
        {label}
      </button>
    );
  }
}
