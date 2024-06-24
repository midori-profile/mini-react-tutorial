import { createElement } from './core/createElement';

function App() {
  return (
    <div id="app">
      Hello, world!
      <NestedComponent />
    </div>
  );
}

function NestedComponent() {
  return (
    <div>
      This is a nested component.
    </div>
  );
}

export default App;
