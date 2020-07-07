import * as React from "react";
import { Modal, Row, Col, Button, Badge } from "react-bootstrap";
// import "./styles.css";
import { group_by_date } from "./utils";
import moment from "moment";

export class UserModal extends React.Component {
  static defaultProps = {};

  componentDidMount() {}

  render_user_info = () => {
    const { data } = this.props;
    const { id = "", real_name = "", tz = "" } = data;

    return (
      <div className="display-flex">
        <div style={{ flex: 0.4 }}>
          <i style={{ fontSize: "47px" }} class="fa fa-user" />
        </div>
        <div style={{ flex: 1 }} className="lh-19">
          {real_name} <br /> <span className="small-font">#{id}</span> <br />
        </div>
      </div>
    );
  };
  render_log_div = log => {
    const { start_time, end_time } = log;
    return (
      <div className="single-log">
        <i style={{ fontSize: "100%" }} class="fa fa-arrow-right" />
        &nbsp;&nbsp;
        {moment(start_time, "MMM D YYYY HH:mmA").format(
          "Do MMM YYYY, HH:MM a"
        )}{" "}
        &nbsp;&nbsp;
        <Badge
          pill
          style={{
            backgroundColor: `#49bd49`,
            color: `white`
          }}
        >
          In
        </Badge>
        <br />
        <i style={{ fontSize: "100%" }} class="fa fa-arrow-left" />
        &nbsp;&nbsp;
        {moment(end_time, "MMM D YYYY HH:mmA").format(
          "Do MMM YYYY, HH:MM a"
        )}{" "}
        &nbsp;&nbsp;
        <Badge
          pill
          style={{
            backgroundColor: `#d9534f`,
            color: `white`
          }}
        >
          Out
        </Badge>
      </div>
    );
  };
  render_logs = () => {
    const { data } = this.props;
    const { activity_periods } = data;
    const grouped_data = group_by_date(activity_periods);

    return Object.keys(grouped_data).map((key, index) => {
      return (
        <div key={`act-${index}`} className="display-block single-day">
          Day - {key}
          {grouped_data[key].map(ins => this.render_log_div(ins))}
        </div>
      );
    });
  };
  render() {
    return (
      <Modal
        {...this.props}
        show={true}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        dialogClassName="modal-wide"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            User's Activities
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="display-flex">
            <div style={{ flex: 0.3, padding: "1%" }}>
              {this.render_user_info()}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ textAlign: "center" }}>
                <i
                  style={{ fontSize: "100px", color: "#f1a7a7" }}
                  class="fa fa-exclamation-triangle"
                />{" "}
                <br />
                No logs found for this date!
              </div>
              {/* {this.render_logs()} */}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
