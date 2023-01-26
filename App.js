//Using Javascript
// const heading  = document.createElement('h1');
// heading.innerHTML = "Namaste everyone from Javascript!!"
// const root = document.getElementById('root')
// root.appendChild(heading)

//Using React
const heading = React.createElement(
  'h1',
  {
    // abc : '1',
    id: 'title',
  },
  'Heading 1',
)

const heading2 = React.createElement(
  'h2',
  {
    id: 'title2',
  },
  'Heading 2',
)

const container = React.createElement(
  'div',
  {
    id: 'container',
  },
  [heading, heading2],
)
// console.log(heading)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(container)

// let H1 = document.getElementById('title')
// H1.innerHTML = "QWERTY"
