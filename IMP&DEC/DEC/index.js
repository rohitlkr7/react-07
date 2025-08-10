const root = ReactDOM.createRoot(document.getElementById('root'));

// Declarative: You describe the UI, React figures out how to render it

root.render(
  React.createElement('p', null, 'Hello, World!')
);
