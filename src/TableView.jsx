import React from "react";
import { table_headers, api_data } from "./constants";
import { DataCard } from "./DataCard";
export class TableView extends React.Component {
  render_table_headers = () => {
    return table_headers.map((ins, index) => {
      const { label, flex } = ins;
      return (
        <div key={`th-${index}`} className="p-3-0" style={{ flex: flex }}>
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
        <div className="table-body">
          {api_data.members.map(ins => (
            <DataCard data={ins} />
          ))}
        </div>
      </div>
    );
  }
}
