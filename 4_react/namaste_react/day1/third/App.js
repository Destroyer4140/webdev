

const child = React.createElement('div', {}, React.createElement('h1', {id:"heading"}, "Heading 1"));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(child);