import {useState} from 'react'
import './Registration.css'

function Registration() {

    const[field, setField] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
    })

    const[submitted, setSubmitted]=useState(false)
    const[validate,setValidate]=useState(false)

    

    const handleSubmit = (e)=>{
        e.preventDefault()
        setSubmitted(true)
        if(field.firstName && field.lastName && field.phoneNumber && field.email){
            setValidate(true)
        }
        
    }
  return (
    <div className="form-container">
        <h1 className="form-header">Form</h1>

        <form onSubmit={handleSubmit}>

            {submitted && validate ? <div>Registration Succesfull</div> : null}
            
            <div className="form-group">
            <input type="text" placeholder='FirstName' value={field.firstName} onChange={(event)=>setField({...field, firstName:event.target.value})}/>
            {submitted && !field.firstName ? <span className="error-message">Enter your FirstName</span> : null}
            </div>
            
            <div className='form-group'>
            <input type="text" placeholder='LastName' value={field.lastName} onChange={(event)=>setField({...field, lastName:event.target.value})}/>
            {submitted && !field.lastName ? <span className="error-message">Enter your LastName</span> : null}
            </div>
            
            <div className='form-group'>
            <input type="email" placeholder='Email' value={field.email} onChange={(event)=>setField({...field, email:event.target.value})}/>
            {submitted && !field.email ? <span className="error-message">Enter your Email</span> : null}
            </div>

            <div className='form-group'>
            <input type="number" placeholder='PhoneNumber' value={field.phoneNumber} onChange={(event)=>setField({...field, phoneNumber:event.target.value})}/>
            {submitted && !field.phoneNumber ? <span className="error-message">Enter your PhoneNumber</span> : null}
            </div>

            <button className="submit-button" type='submit'>Register Here</button>

        </form>
      
    </div>
  )
}

export default Registration
