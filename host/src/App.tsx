// @ts-nocheck
import React from 'react';
import BundleLoader from './BundleLoader';

function App() {
  const [bundle, setBundle] = React.useState(undefined);

  function setApp1() {
    setBundle({
      url: 'http://localhost:3001/remoteEntry.js',
      scope: 'app1',
      module: './App',
    });
  }

  function setApp1Widget() {
    setBundle({
      url: 'http://localhost:3001/remoteEntry.js',
      scope: 'app1',
      module: './Widget',
    });
  }

  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      }}
    >
      <h1>Dynamic System Host</h1>
      <h2>HOST</h2>
      <p>
        The Dynamic System will take advantage Module Federation <strong>remotes</strong> and{' '}
        <strong>exposes</strong>. It will no load components that have been loaded already.
      </p>
      <button onClick={setApp1}>Load App 1</button>
      <button onClick={setApp1Widget}>Load App 1 Widget</button>
      <div style={{ marginTop: '2em' }}>
        <BundleLoader bundle={bundle} />
      </div>
    </div>
  );
}

export default App;
