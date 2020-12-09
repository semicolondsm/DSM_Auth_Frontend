import { BrowserRouter, Route } from 'react-router-dom'

import GlobalStyled from './GlobalStyled'

import { Main } from './components'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyled />
      <Route path="/" component={Main} /> 
    </BrowserRouter>
  );
}

export default App;
