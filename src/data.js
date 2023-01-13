import React, { useEffect, useState } from "react"

const UsingFetch = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/508f46dbf6535f830aa92cf97359853c5700bab1/mock-progress")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  console.log(data);

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default UsingFetch





export const groupedTasksData = [
    {
      title: "General Infos",
      tasks: [
        {
          description: "Add name and surname",
          value: 10,
          checked: true
        },
        {
          description: "Add email",
          value: 15,
          checked: false
        },
        {
          description: "Add linkedin profile",
          value: 8,
          checked: false
        },
        {
          description: "Provide websites page url",
          value: 5,
          checked: true
        }
      ]
    },
    {
      title: "Accomiplishment",
      tasks: [
        {
          description: "Wrote a small poem about the birthdate",
          value: 23,
          checked: false
        },
        {
          description: "Jump three time with one leg",
          value: 32,
          checked: true
        },
        {
          description: "Avoid the annoying neighbor",
          value: 2,
          checked: false
        },
        {
          description: "Say hello to a random person",
          value: 21,
          checked: false
        },
        {
          description: "Fill the description in at least 3 places",
          value: 12,
          checked: true
        }
      ]
    },
    {
      title: "Personal retrospective",
      tasks: [
        {
          description: "Remember a dream",
          value: 15,
          checked: true
        },
        {
          description: "Have a crush",
          value: 7,
          checked: true
        }
      ]
    },
    {
      title: "Things before leaving",
      tasks: [
        {
          description: "Tell what you feel to all the people you know",
          value: 42,
          checked: false
        },
        {
          description: "Have a pet",
          value: 23,
          checked: false
        },
        {
          description: "Buy a fashion shirt",
          value: 12,
          checked: false
        }
      ]
    }
  ]