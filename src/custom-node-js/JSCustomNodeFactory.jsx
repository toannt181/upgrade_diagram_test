import * as React from 'react';
import { JSCustomNodeModel } from './JSCustomNodeModel';
import { JSCustomNodeWidget } from './JSCustomNodeWidget';
import { AbstractNodeFactory } from '@projectstorm/react-diagrams';

export class JSCustomNodeFactory extends AbstractNodeFactory {
  constructor() {
    super('Text');
  }

  generateModel(event) {
    return new JSCustomNodeModel();
  }

  generateReactWidget(engine, node) {
    return <JSCustomNodeWidget node={node} />;
  }
}
