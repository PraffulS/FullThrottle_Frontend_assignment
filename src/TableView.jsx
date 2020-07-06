import React from "react";
import { table_headers } from "./constants";
export class TableView extends React.Component {
  render_table_headers = () => {
    return table_headers.map((ins, index) => {
      const { label, flex } = ins;
      return (
        <div key={`th-${index}`} style={{ flex: flex }}>
          {label}
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="display-flex table-header">
          {this.render_table_headers()}
        </div>
        <div className="table-body">Some data</div>
      </div>
    );
  }
}
