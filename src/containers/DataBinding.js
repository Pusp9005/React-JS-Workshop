import React, {useState} from 'react'

function DataBinding() {
    const [data, setData] = useState( {
        name: "Mohan",
        age: 25

        })
        const handleChange=(event)=>{
            let value  =  event.target.value;
            setData({
                ...data,name:value
            });
        }
    
     return (
        <div>
            <h2>DataBinding </h2>
            <h4>
                one way Binding: {data.name}
                {data.age}
            </h4>
            <input type='text'
                value={data.name} />
            </div>
    )
}
export default DataBinding;