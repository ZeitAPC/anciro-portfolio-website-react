function SendEmailDirectCard() {
    return (
<>
  <form className="row g-3 needs-validation sendEmailDirectCard card" noValidate>
    <h2>Send me a message right here!</h2>
    
    <div className="col-md-12 mb-3 inputField">
      <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
    </div>
    
    <div className="col-md-12 mb-3 inputField">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">Your message: </label>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
    </div>

    <div className="termsAndConditionsCheckbox col-12">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
        <label className="form-check-label" htmlFor="invalidCheck">
          Agree to terms and conditions
        </label>
        <div className="invalid-feedback">
          You must agree before submitting.
        </div>
      </div>
    </div>
    
    <div className="col-12">
      <button className="btn btn-primary btn-lg" type="submit">Submit form</button>
    </div>
  </form>
</>
    )
}
export default SendEmailDirectCard;
        {/* <section className="newsLetterFormContainer">
            <p className="h2" style={{ textAlign: 'center', margin: '25px 0' }}>Sign up to my newsletter</p>
            
            <form name="newsLetter" id="newsLetter">
                <div className="form-group">
                    <label htmlFor="exampleInputFirstName">First name</label>
                    <input type="text" className="form-control" id="exampleInputFirstName" aria-describedby="emailHelp" placeholder="Ex: Juan" name="fName" />
                    
                    <small id="emailHelp" className="form-text" style={{ color: 'var(--color-text-muted)' }}>We'll never share your email with anyone else.</small>
                </div>
                
                <div className="form-group">
                    <label htmlFor="exampleInputLastName">Last name</label>
                    <input type="text" className="form-control" id="exampleInputLastName" aria-describedby="emailHelp" placeholder="Ex: Dela Cruz" name="lName" />
                </div>
                
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ex: jdelacruz@example.com" name="email" />
                </div>
                
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="newsLetterCheckBox" />
                    <label id="newsLetterCheckBoxLabel" className="form-check-label" htmlFor="newsLetterCheckBox">Sign up for news and updates</label>
                </div>
                
                <button type="submit" className="btn btn-primary" id="submitFormButton">Submit</button>
            </form>
        </section> */}