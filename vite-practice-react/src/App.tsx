import { Suspense, lazy } from 'react'
import './App.scss'

const LazyComponent = lazy(() => import('./components/Authentication/Login'));

function App() {

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  )
}

export default App
