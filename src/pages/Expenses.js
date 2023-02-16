import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import * as service from "../services/walletService";
import { Chart } from "react-google-charts";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import ExpenseList from "../components/ExpenseList";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const shoppingExpenses = expenses.filter(
    (expense) => expense.type === "shopping"
  );
  const shoppingTotalCost = shoppingExpenses.reduce(
    (total, expense) => total + parseInt(expense.cost),
    0
  );

  const insuranceExpenses = expenses.filter(
    (expense) => expense.type === "insurance"
  );
  const insuranceTotalCost = insuranceExpenses.reduce(
    (total, expense) => total + parseInt(expense.cost),
    0
  );

  const taxesExpenses = expenses.filter((expense) => expense.type === "taxes");
  const taxesTotalCost = taxesExpenses.reduce(
    (total, expense) => total + parseInt(expense.cost),
    0
  );

  const getExpenses = async () => {
    const fetchedExpenses = await service.getExpenses();
    setExpenses(fetchedExpenses);
  };

  useEffect(() => {
    getExpenses();
  }, []);
  const data = [
    ["shopping", shoppingTotalCost],
    ["taxes", taxesTotalCost],
    ["insurance", insuranceTotalCost],
  ];
  return (
    <Container>
      <Row>
        <Col sm={6}>
          <ExpenseList expenseList={shoppingExpenses} title="shopping" />
          <ExpenseList expenseList={taxesExpenses} title="taxes" />
          <ExpenseList expenseList={insuranceExpenses} title="insurance" />
        </Col>
        <Col sm={6}>
          <Chart
            chartType="PieChart"
            data={data}
            width={"100%"}
            height={"400px"}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Expenses;