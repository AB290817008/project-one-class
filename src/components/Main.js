import React, { useContext,useState } from 'react';
import {TransContext} from './../context/GlobalState';

const Main =() => {

		const [newName,setNewName] = useState('');
		const [newDesc,setNewDesc] = useState(null);

		const handleSubmit = (ev) => {
			ev.preventDefault()
			console.log(ev.target);




		}
		let {transactions} = useContext(TransContext)
		return (
			<div>
				<div>
					<h1>
						Balance <br />
						$0.00
					</h1>
				</div>
				<div>
					<h1>
						<span>Income</span>
						<br />
						$0.00 <span>Expense</span>
						<br />
						$0.00
					</h1>
				</div>
				<div>
					<ul>
						{transactions.map((v, i) => {
							return <li key={i}>
								<span>{v.name}   </span>
								<span>{v.desc}   </span>
							</li>;
						})}
					</ul>
				</div>
				<div>
					<form onSubmit={handleSubmit}>
						<label>
							<input type="text" placeholder="enter item" onChange={()=>setNewName()} required /><br/>
						</label>
						<label>
							<input type="number" placeholder="enter amount" required /><br/>
						</label>
						<button type="submit">Add Transaction</button>
					</form>
				</div>
			</div>
		)
	}


export default Main
