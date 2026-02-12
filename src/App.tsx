import Header from './components/Header'
import HomePage from './pages/HomePage'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <HomePage />
      </main>
    </div>
  )
}

export default App
