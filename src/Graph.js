import * as React from 'react'
import './main.css'
import createEngine, {
  DefaultLinkModel,
  DiagramModel,
  DiagramEngine,
  DefaultLinkFactory,
} from '@projectstorm/react-diagrams'
import { JSCustomNodeFactory } from './custom-node-js/JSCustomNodeFactory'
import { JSCustomNodeModel } from './custom-node-js/JSCustomNodeModel'
import { BodyWidget } from './BodyWidget'

// create an instance of the engine
const engine = new DiagramEngine()
engine.installDefaultFactories();
// register the two engines
engine.registerLinkFactory(new DefaultLinkFactory())
engine.registerNodeFactory(new JSCustomNodeFactory())

// create a diagram model
const model = new DiagramModel()

//####################################################
// now create two nodes of each type, and connect them

const node1 = new JSCustomNodeModel({
  color: 'rgb(192,255,0)',
  text: 'initial 1',
})
node1.setPosition(50, 50)

const node2 = new JSCustomNodeModel({
  color: 'rgb(0,192,255)',
  text: 'initial 2',
})
node2.setPosition(200, 50)

var port1 = node1.getPort('in')
console.log(port1)
var link1 = port1.link(node2.getPort("in"));

model.addAll(node1, node2, link1)

//####################################################

// install the model into the engine
engine.setDiagramModel(model)

export { engine }

export default () => <BodyWidget engine={engine} />
