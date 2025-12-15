function NewsletterFormCard() {
    return (
        <section className="newsLetterFormContainer">
            {/* Fixed style object */}
            <p className="h2" style={{ textAlign: 'center', margin: '25px 0' }}>Sign up to my newsletter</p>
            
            <form name="newsLetter" id="newsLetter">
                <div className="form-group">
                    {/* Fixed for -> htmlFor */}
                    <label htmlFor="exampleInputFirstName">First name</label>
                    <input type="text" className="form-control" id="exampleInputFirstName" aria-describedby="emailHelp" placeholder="Ex: Juan" name="fName" />
                    
                    {/* Fixed style object */}
                    <small id="emailHelp" className="form-text" style={{ color: 'var(--color-text-muted)' }}>We'll never share your email with anyone else.</small>
                </div>
                
                <div className="form-group">
                    {/* Fixed for -> htmlFor */}
                    <label htmlFor="exampleInputLastName">Last name</label>
                    <input type="text" className="form-control" id="exampleInputLastName" aria-describedby="emailHelp" placeholder="Ex: Dela Cruz" name="lName" />
                </div>
                
                <div className="form-group">
                    {/* Fixed for -> htmlFor */}
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ex: jdelacruz@example.com" name="email" />
                </div>
                
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="newsLetterCheckBox" />
                    {/* Fixed for -> htmlFor */}
                    <label id="newsLetterCheckBoxLabel" className="form-check-label" htmlFor="newsLetterCheckBox">Sign up for news and updates</label>
                </div>
                
                <button type="submit" className="btn btn-primary" id="submitFormButton">Submit</button>
            </form>
        </section>
    )
}
export default NewsletterFormCard;