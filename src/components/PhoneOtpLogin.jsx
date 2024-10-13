import React, { useState } from 'react'
import OtpInput from './OtpInput'

function PhoneOtpForm() {
    const [phoneNumber, setPhoneNumber] = useState("")
    const [showOtpInput  , setShowOtpInput] = useState(false)

    const handlePhoneNumber = (event) => { 
        setPhoneNumber(event.target.value)
    }
    const handlePhoneSubmit = (event) => {
        event.preventDefault()
    

    // phone validation
    const regex = /[^0-9]/g;
    if(phoneNumber.length< 10 || regex.test(phoneNumber))
    {
        alert("invalid Phonenumber")
        return
    }

    // show otp field 
    setShowOtpInput(true)

}

const OnOtpSubmit = (otp) => {
    console.log("otp is "+otp)
}
  return (
    <div>
       {!showOtpInput ? (<form onSubmit={handlePhoneSubmit}>

        <input type="text" value={phoneNumber}
        onChange={handlePhoneNumber}
        placeholder='Enter mobile number '
        />

        <button type='submit' >Submit</button>

        </form>) : (<div> 
            <p>Entered Otp sent to {phoneNumber}</p>
            <OtpInput length={4} OnOtpSubmit = {OnOtpSubmit} />
            </div>
        )}
         </div>
  )
}

export default PhoneOtpForm