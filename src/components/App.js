import { useState } from "react"; // Component,
import Counter from "./Counter";
import Controls from "./Controls";


function App() {
  const [counter, setCounter] = useState(0);
  const[name, changeName] = useState('Mike');

  const reset = () => {
    setCounter(0)
  }

  const increase = () => {
    setCounter((value)=>{
      return value + 1;
    })
  }

  const decrease = () => {
    setCounter((value)=>{
      return value -1 >= 0 ? value -1 : 0;
    })
  }


  return (
    <div className="App">
    <h1>Counter</h1>
    <Counter counter={counter}/>
    <Controls reset={reset} increase={increase} decrease={decrease}/>
    <h2>{name}</h2>
    <button onClick={()=>{changeName('Bob')}}>ChangeName</button>
 </div>
  );
}

export default App;

// class App extends Component {
//   state = {
//     counter: 0
//   }

//   increase = () => {
//     this.setState((state)=> {
//       return {
//         counter: state.counter + 1 
//       }
//     })
//   }

//   decrease = () => {
//     this.setState((state)=> {
//       return {
//         counter: state.counter - 1 >= 0 ? state.counter - 1 : 0
//       }
//     })
//   }

//   reset = () => {
//     this.setState({
//      counter: 0
//     })
//   }

//   render() {
//     return (
//     <div className="App">
//       <h1>Counter</h1>
//       <Counter counter={this.state.counter}/>
//       <Controls decrease={this.decrease} reset={this.reset} increase={this.increase}/>
//    </div>
//     );
//   }
// }

// export default App;
