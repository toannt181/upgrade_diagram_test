import './App.css'
import Graph, { engine } from './Graph'
import '@projectstorm/react-diagrams/dist/style.min.css'
import './main.css'

function App() {
  const update = () => {
    const node = Object.values(engine.diagramModel.getNodes())[0]
    console.log(node)
    node.text = Date.now()
    engine.repaintCanvas()
  }

  window.engine = engine
  window.update = update

  return (
    <div className="App">
      <Graph />
    </div>
  )
}

export default App
