import './App.css'
import Graph, { engine } from './Graph'

function App() {
  const update = () => {
    console.log(engine.model.getNodes()[0])
    engine.model.getNodes()[0].text = Date.now()
    // engine.repaintCanvas()
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
