import * as React from "react";

import { PverifyPureComponent } from "@components/PverifyPureComponent";

export class PInput extends PverifyPureComponent {
  handleChange = (e) => {
    const value = e.target.value;
    this.props.onChange(value);
  };

  render() {
    const { value, placeholder, className, name } = this.props;
    return (
      <div key={name} className={className}>
        <input
          placeholder={placeholder}
          onChange={this.handleChange}
          className="text-box-input"
          name="name"
          defaultValue={value}
        />
      </div>
    );
  }
}
