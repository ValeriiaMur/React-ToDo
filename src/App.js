import React from 'react';
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"

const items = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: items
    }
  }

  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      items : [...this.state.items, newItem]
    })
  }

  completeTask = id => {
    this.setState({
      items: this.state.items.map(item => {
        if(item.id === id){
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    })
  }

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      items: this.state.items.filter(item => item.completed === false)
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className = "container">
        <div className = "row">
          <div className = "col s12">
            <div className = "card" id="main">
              <div className = "card-content">
                <div className="card-title">Welcome to your Todo App!</div>
                <div className = "row">
                  <form id = "task-form">
                    <div className = "input-field col s12">
                    <TodoForm
                      addItem = {this.addItem}
                      clearCompleted = {this.clearCompleted}
                    />
                    </div>
                  </form>
                </div>
                <TodoList 
                  items = {this.state.items}
                  completeTask = {this.completeTask}
                />
               
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;


// <div class="container">
// <div class="row">
//   <div class="col s12">
//     <div id="main" class="card">
//       <div class="card-content">
//         <span class="card-title">Task List</span>
//         <div class="row">
//           <form id="task-form">
//             <div class="input-field col s12">
//               <input type="text" name="task" id="task">
//               <label for="task">New Task</label>
//             </div>
//             <input type="submit" value="Add Task" class="btn">
//           </form>
//         </div>
//       </div>
//       <div class="card-action">
//         <h5 id="task-title">Tasks</h5>
//         <div class="input-field col s12">
//           <input type="text" name="filter" id="filter">
//           <label for="filter">Filter Tasks</label>
//         </div>
//         <ul class="collection"></ul>
//         <a href="#" class="clear-tasks btn"  style="background-color:#0073b1">Clear Tasks</a>
//       </div>
//     </div>
//   </div>
// </div>
// </div>