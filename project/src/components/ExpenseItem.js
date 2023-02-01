import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';
 
// JSX 동적데이터 출력방식 
//  function ExpenseItem() { 
// 	const expenseDate = new Date(2023, 2, 1);
// 	const expenseTitle = 'Car Insurance';
// 	const expenseAmount = 294.67; 

// 	return (
// 		<div className='expense-item'>
// 			<div>{expenseDate.toISOString()}</div>
// 			<div className='expense-item__description'>
// 				<h2>{expenseTitle}</h2>
// 				<div className='expense-item__price'>${expenseAmount}</div>
// 			</div>
// 		</div>
		
// 	);
//  }


// props component
function ExpenseItem(props) { 
	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.date} />
			<div className='expense-item__description'>
				<h2>{props.title }</h2>
				<div className='expense-item__price'>${props.amount}</div>
			</div>
		</Card>
	);
 }

 export default ExpenseItem;