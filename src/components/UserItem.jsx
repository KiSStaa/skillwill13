import React, { PureComponent } from 'react'

class UserItem extends PureComponent {

    handleResize = () => {
        console.log('user' + this.props.id)
    }

    componentDidMount(){
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.handleResize)
    }

 render() {
    const {id, name,action} = this.props
 
 return(
    <div className="user-item">
        <p>Ongoing Homework: {name}</p>

        <button onClick={() => action(id)}>Remove</button>
     </div>
     
  )
}
}


export default UserItem