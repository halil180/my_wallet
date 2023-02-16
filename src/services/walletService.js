
const apiUrl = "  http://localhost:3550/expenses";


export const addExpense = async (newExpense) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // set the request content type to JSON
            },
            body: JSON.stringify(newExpense) // convert the data to JSON and send it in the request body
        });

        if (!response.ok) {
            throw new Error('Failed to add expense.');
        }

        const responseData = await response.json(); // parse the response body as JSON
        return responseData;
        // do something with the response data (e.g. update UI)

    } catch (error) {
        console.log(error);
        // handle errors (e.g. display an error message)
    }
}


export const getExpenses = async () => {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch expenses');
        }
        const expenses = await response.json();
        return expenses;
    } catch (error) {
        console.error(error);
        return [];
    }
};
