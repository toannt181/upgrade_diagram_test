import { DefaultPortModel, NodeModel } from '@projectstorm/react-diagrams'

/**
 * Example of a custom model using pure javascript
 */
export class JSCustomNodeModel extends NodeModel {
  constructor(options = {}) {
    super({
      ...options,
      type: 'Text',
    })
    console.log(options)
    this.color = options.color || { options: 'red' }
    this.text = options.text || 'null'

    // setup an in and out port
    this.addPort(
      new DefaultPortModel({
        in: true,
        name: 'in',
      })
    )
    this.addPort(
      new DefaultPortModel({
        in: false,
        name: 'out',
      })
    )
  }

  serialize() {
    return {
      ...super.serialize(),
      color: this.color,
      text: this.text,
    }
  }

  deserialize(ob, engine) {
    super.deserialize(ob, engine)
    this.color = ob.color
    this.text = ob.text
  }
}
