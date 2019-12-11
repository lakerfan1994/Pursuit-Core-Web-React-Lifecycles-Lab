import React from 'react';
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';



 class Todo extends React.Component{

 	constructor(props){
 		super();
 		this.state = {
 			display: true
 		}
 	};

 	handleCheckBox = (e) => {
 		console.log(e.target.checked)
 		if(e.target.checked){
 			this.setState({
 			display: false
 		});
 			this.deleteToast();
 		}
 		else{
	 		this.setState({
	 			display: true
	 		});
 		}
 	} 

 	deleteToast = () => {
 		toast(`ToDo deleted successfully!`);
 	}









	render(){
		if(this.state.display){
 		return(
 			<p className ='todo'>{this.props.thing}<input onChange={this.handleCheckBox} type='checkbox' /></p>);
 		}
 		else {
 			return (
 				null)
 		}
 	}

}


 export default Todo;