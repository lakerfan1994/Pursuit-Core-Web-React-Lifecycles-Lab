import React from 'react';
import Todo from './Todo.jsx';
import './BoxOfTodos.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class BoxOfTodos extends React.Component {
	constructor(){
		super();
		this.state = {
			arrOfTodos: [],
			currentInput: ''
		};
	}

	convertTodos = () => {
		console.log('im running');
		let newArr = this.state.arrOfTodos.map((elem) => {
			return (<Todo thing={elem} />)
		});
		return newArr;
	}

	handleInputChange = (e) => {
		this.setState({
			currentInput: e.target.value
		});
	};

	

	handleFormSubmit = (e) => {
		e.preventDefault();
		let temp = this.state.arrOfTodos;
		temp.push(this.state.currentInput);
		toast(`ToDo added: ${this.state.currentInput}`);
		this.setState({
			arrOfTodos: temp,
			currentInput: ''
		});
	};



	render(){
		return(
			<div className = 'boxOfTodos'>
				<h1>List of stuff to do</h1>
				<form onSubmit={this.handleFormSubmit}>
					<input type='text' onChange={this.handleInputChange} placeholder='toDo' value={this.state.currentInput}/>
					<button type='submit'>Submit</button>
				</form>

				{this.convertTodos()}
			</div>)
	}
}

export default BoxOfTodos;