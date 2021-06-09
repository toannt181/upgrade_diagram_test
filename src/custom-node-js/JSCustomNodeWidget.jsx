import * as React from 'react';
import { PortWidget } from '@projectstorm/react-diagrams';

const Test = React.memo((node) => (
  <>
    <div className="custom-node-color" style={{ backgroundColor: node.color }} />
    <p className="text">{node.text}</p>
  </>
))

export class JSCustomNodeWidget extends React.Component {
  render() {
    console.log('ren')
    const { node } = this.props
    return (
      <div className="wrapper">
        <div className="custom-node">
          <PortWidget node={node} name="in">
            <div className="circle-port" />
          </PortWidget>
          <PortWidget node={node} name="out">
            <div className="circle-port" />
          </PortWidget>
        </div>
        <Test {...node} />
      </div>
    );
  }
}
