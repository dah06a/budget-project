import { currencyFormatter } from "./utils";

export default function BudgetCard({ name, amount, max }) {
    return (
        <div className="card">
            <div className="card-body">
                <div className="card-title">
                    <div>{name}</div>
                    <div>{currencyFormatter.format(amount)}</div>
                </div>
            </div>
        </div>
    );
}