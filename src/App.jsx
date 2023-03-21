
import './App.css';
import Card from './components/Card';

const cardsArr = [
  {id: 1, title: 'Html', body: 'Body of Html'},
  {id: 2, title: 'Css', body: 'Body of Css'},
  {id: 3, title: 'JS', body: 'Body of Js'},
]

function App () {
  return <div>
    <h1>Hello</h1>
    <div className='gridThree'>
     <Card item={cardsArr[0]} size='lg' />
     <Card item={cardsArr[1]} />
     <Card item={cardsArr[2]} />
    </div>
  </div>
}
export default App