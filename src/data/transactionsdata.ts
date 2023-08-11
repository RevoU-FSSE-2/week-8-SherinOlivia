export interface Itransaction {
    id: number,
    transactionType: string,
    transactionName: string,
    transactionDetail: string,
    transactionAmount: number,

}

export let transactions:Itransaction[] = [
    {
        id:1, 
        transactionType:"Cash In", 
        transactionName: "Payday Invest", 
        transactionDetail: "Inject RDPT",
        transactionAmount: 1000000, 
    },
    {
        id:2, 
        transactionType:"Cash In", 
        transactionName: "Birthday Angpao", 
        transactionDetail: "Normal Savings",
        transactionAmount: 200000, 
    },
    {
        id:3, 
        transactionType:"Cash In", 
        transactionName: "Work Bonus", 
        transactionDetail: "Annual Bonus",
        transactionAmount: 1500000, 
    },
    {
        id:4, 
        transactionType:"Cash Out", 
        transactionName: "Monthly Expense", 
        transactionDetail: "Top Up Emoney",
        transactionAmount: 150000, 
    },
    {
        id:5, 
        transactionType:"Cash Out", 
        transactionName: "Daily Expense", 
        transactionDetail: "Breakkie & Dinner",
        transactionAmount: 50000, 
    },
]