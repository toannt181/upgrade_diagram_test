import * as React from "react";
import { DiagramWidget } from "@projectstorm/react-diagrams";

export class BodyWidget extends React.Component {
  render() {
    return (
      <DiagramWidget className="diagram-container" diagramEngine={this.props.engine} />
    );
  }
}
