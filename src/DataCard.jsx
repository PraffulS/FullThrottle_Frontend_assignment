import React from "react";
import { Badge, Button } from "react-bootstrap";

export class DataCard extends React.Component {
  static defaultProps = {
    data: {}
  };

  render_status = data => {
    const is_active = data.activity_periods && data.activity_periods.length;

    return (
      <Badge
        pill
        style={{
          backgroundColor: is_active ? `#49bd49` : `#d9534f`,
          color: `white`
        }}
      >
        {is_active ? `Active` : `Inactive`}
      </Badge>
    );
  };
  render() {
    const { data } = this.props;
    const { id = "", real_name = "", tz = "", activity_periods = [] } = data;
    return (
      <div className="display-flex data-card" key={`tb-${id}`}>
        <div style={{ flex: 1 }}>{id}</div>
        <div style={{ flex: 2 }}>{real_name}</div>
        <div style={{ flex: 1.5 }}>{tz}</div>
        <div style={{ flex: 1 }}>{this.render_status(data)}</div>
        <div style={{ flex: 1 }}>
          <Button className="btn-sm sleek-button btn-outline-primary">
            {" "}
            View{" "}
          </Button>
        </div>
      </div>
    );
  }
}
