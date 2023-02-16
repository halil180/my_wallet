import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function ExpenseList({ expenseList, title }) {
  return (
    <>
      {expenseList.length > 0 ? (
        <ListGroup as="ul" className="mb-5">
          <ListGroup.Item as="li" active>
            {title}
          </ListGroup.Item>
          {expenseList.map((expense) => (
            <ListGroup.Item as="li" key={expense.id}>
              {expense.item} : {expense.cost}
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <h4>no {title} expenses found</h4>
      )}
    </>
  );
}

export default ExpenseList;
