import { Component } from "react";
import UserItem from "./UserItem";

class UsersList extends Component{
    state ={
        show: true,
        inputValue: '',
        users: [{id:1, name: 'Default'}]
      } 

      componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(data => data.json())
        .then(res => console.log(res))
      }

      shouldComponentUpdate(_nextProps, nextState){
        return !(this.state.show === nextState.show && this.state.users === nextState.users)
      }
    
      onChange = (event) => {
        const value = event.target.value
        this.setState({
          inputValue: value
        })
      }

      addHomework = (event) => {
        event.preventDefault()

        const user = {
            id: this.state.users.length + 1,
            name: this.state.inputValue
        }
        this.setState({
            users: [...this.state.users, user],
            inputValue: ''
        })
      }

      removeUser = (id) => {
        const users = this.state.users.filter((user) => user.id !== id)
        this.setState({
            users
        })
      }

    toogle = () => {
        this.setState((prevState) => {
            return{
                show: !prevState.show
            }
    })
    }  

    open = () => {
        this.setState({show: true})
    }

    render() {
        console.log('Render Log')
        return(
            <div className="users">
                <form onSubmit={this.addHomework} className="user-form">
                    <input type="text" onChange={this.onChange} value={this.state.inputValue}/>
                    <button type="submit">Add Homework</button>
                </form>

                <button onClick={this.toogle}>Toggle</button>
                <button onClick={this.open}>Open</button>

                 {this.state.show && this.state.users.map((user) =>(
                    <UserItem key={user.id} id={user.id} name={user.name} action={this.removeUser}/>
                 ))}
                
            </div>
            
        )
    }
}

export default UsersList