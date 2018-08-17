module.exports = {
  userName: "Waldo",
  budget: {
      planned: [
          {
              category: "Income",
              total: "$amount",
              entries: [
                  {
                    name: "Source 1",
                    amount: "$amount",
                    id: "income-source1"
                  },
                  {
                    name: "Source 2",
                    amount: "$amount",
                    id: "income-source2"
                  }
              ]
          },
          {
              category: "Housing",
              total: "$amount",
              entries: [
                {
                  name: "Entry 1",
                  amount: "$amount",
                  id: "housing-source1"
                },
                {
                  name: "Entry 2",
                  amount: "$amount",
                  id: "housing-entry2"
                },
                {
                  name: "Entry 3",
                  amount: "$amount",
                  id: "housing-entry3"
                }
              ]
          },
          {
            category: "Transportation",
            total: "$amount",
            entries: [
              {
                name: "Entry 1",
                amount: "$amount",
                id: "transportation-entry1"
              },
              {
                name: "Entry 2",
                amount: "$amount",
                id: "transportation-entry2"
              },
              {
                name: "Entry 3",
                amount: "$amount",
                id: "transportation-entry3"
              }
            ]
        }
      ],
      spent: 
      [
        {
            category: "Income",
            total: "$amount",
            entries: [
                {
                  name: "Source 1",
                  amount: "$amount"
                },
                {
                  name: "Source 2",
                  amount: "$amount"
                }
            ]
        },
        {
            category: "Housing",
            total: "$amount",
            entries: [
              {
                name: "Entry 1",
                amount: "$amount"
              },
              {
                name: "Entry 2",
                amount: "$amount"
              },
              {
                name: "Entry 3",
                amount: "$amount"
              }
            ]
        },
        {
          category: "Transportation",
          total: "$amount",
          entries: [
            {
              name: "Entry 1",
              amount: "$amount"
            },
            {
              name: "Entry 2",
              amount: "$amount"
            },
            {
              name: "Entry 3",
              amount: "$amount"
            }
          ]
      }
    ],
      remaining: [
        {
            category: "Income",
            total: "$amount",
            entries: [
                {
                  name: "Source 1",
                  amount: "$amount"
                },
                {
                  name: "Source 2",
                  amount: "$amount"
                }
            ]
        },
        {
            category: "Housing",
            total: "$amount",
            entries: [
              {
                name: "Entry 1",
                amount: "$amount"
              },
              {
                name: "Entry 2",
                amount: "$amount"
              },
              {
                name: "Entry 3",
                amount: "$amount"
              }
            ]
        },
        {
          category: "Transportation",
          total: "$amount",
          entries: [
            {
              name: "Entry 1",
              amount: "$amount"
            },
            {
              name: "Entry 2",
              amount: "$amount"
            },
            {
              name: "Entry 3",
              amount: "$amount"
            }
          ]
      }
    ]
  }

}