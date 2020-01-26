import React from "react"
import { connect  } from "react-redux"

const fetchUserIds = () => {
// SAMPLE RESULT
// [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496"
//       }
//     },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//       name: "Romaguera-Crona",
//       catchPhrase: "Multi-layered client-server neural-net",
//       bs: "harness real-time e-markets"
//     }
//   },
//   ...
// ]
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
      users.map(user => store.dispatch(addNumberAction(user.id)))
    })
}

fetchUserIds

// requestSaga({type: 'FETCH_USER_IDS'})

const mapStateToProps = state => {
  return { numbers: state.numbers  }
};

const ConnectedList = ({ numbers }) => (
  <div>
    {
      numbers.map(
        (num, index) => (<div key={index}>{num}</div>)
      )
    }
  </div>
)

const NumberList = connect(mapStateToProps)(ConnectedList)

export default NumberList
