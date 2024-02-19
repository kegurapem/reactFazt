export function Greeting({tittle, name="User"}) {
    // console.log(props)
    return <h1>{tittle} {name}</h1>
}

export function UserCard({name, amount, married, address, greet}) {
    return <div>
        <h1>Name :{name}</h1>    
        <p>Amount : ${amount}</p>
        <p>Is married?: {married ? 'Yes' : 'No'}</p>
        <ul>
            <li>City: {address.city}</li>
            <li>Street: {address.street}</li>
        </ul>
    </div>
}