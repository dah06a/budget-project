function App() {
  return (
    <div className="container my-4">
        <div className="hstack gap-2 mb-4">
            <h1 className="me-auto">Budgets</h1>
            <button className="btn btn-primary">Add Budget</button>
            <button className="btn btn-outline-primary">Add Expense</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem', alignItems: 'flex-start' }} >
            
        </div>
    </div>
  );
}

export default App;
