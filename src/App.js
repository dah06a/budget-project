import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import BudgetCard from "./components/BudgetCard";
import AddBudgetModal from './components/AddBudgetModal';
import { useBudgets } from './contexts/BudgetsContext';

function App() {
	const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
	const { budgets, getBudgetExpenses } = useBudgets();

	return (
		<Container>
			<AddBudgetModal show={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false)} />
			<Stack direction='horizontal' gap='2' className='mb-4'>
				<h1 className='me-auto'>Budgets</h1>
				<Button variant='primary' onClick={() => setShowAddBudgetModal(true)}>Add Budget</Button>
				<Button variant='outline-primary'>Add Expense</Button>
			</Stack>
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem', alignItems: 'flex-start' }}>
				{budgets.map(budget => {
					const amount = getBudgetExpenses(budget.id).reduce((total, expense) => total + expense.amount, 0);
					return (
						<BudgetCard 
							key={budget.id}
							name={budget.name} 
							amount={amount} 
							max={budget.max} 
						/>
					);
				})}
			</div>
		</Container>
	);
}

export default App;
