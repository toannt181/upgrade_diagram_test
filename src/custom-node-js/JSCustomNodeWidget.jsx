import * as React from 'react';
import { PortWidget } from '@projectstorm/react-diagrams';

export class JSCustomNodeWidget extends React.Component {
  render() {
    console.log('ren')
    return (
      <div className="wrapper">
        <div className="custom-node">
          <PortWidget engine={this.props.engine} port={this.props.node.getPort('in')}>
            <div className="circle-port" />
          </PortWidget>
          <PortWidget engine={this.props.engine} port={this.props.node.getPort('out')}>
            <div className="circle-port" />
          </PortWidget>
        </div>
        <div className="custom-node-color" style={{ backgroundColor: this.props.node.color }} />
        <p className="text">{this.props.node.text}</p>
      </div>
    );
  }
}
