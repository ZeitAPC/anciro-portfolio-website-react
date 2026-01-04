import React ,{useRef} from "react";
import emailjs from "@emailjs/browser";
function SendEmailDirectCard() {
  const inputContainer ="mb-[16px] flex flex-col";
  const textFieldLabelStyle = "text-left mb-[5px]";
  const textFieldStyle = "border-b-2 border-espresso  h-[40px] pl-[10px] focus:outline-none bg-[#D2AF92] text-text-main";

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            form.current,
            {
              publicKey: import.meta.env.VITE_PUBLIC_KEY,
            }
        )
        .then(
            () => {
              alert('Message sent successfully!');
              e.target.reset();
            },
            (error) => {
              console.error('FAILED...', error.text);
              alert('Failed to send message.');
            },
        );
  };
    return (
  <form className="bg-cream text-espresso rounded-[2%] shadow-[1px_1px_10px_4px_#6F4E37] p-[2rem] h-fit"  ref={form} onSubmit={sendEmail}>
    <h2 className="text-[2rem] font-semibold mb-1">Send me a message right here!</h2>
    
    <div className={inputContainer}>
      <label className={textFieldLabelStyle}>Email address</label>
      <input type="email" className={textFieldStyle} name="user_email" placeholder="name@example.com" required/>
    </div>

    <div className={inputContainer}>
      <label className={textFieldLabelStyle}>Name</label>
      <input type="text" className={textFieldStyle} name="from_name" placeholder="Name here" required/>
    </div>

    <div className={inputContainer}>
      <label  className={textFieldLabelStyle}>Your message: </label>
      <textarea className={textFieldStyle}  rows="2" name="message" placeholder="Let's collaborate!" required></textarea>
    </div>

    
    <div className="col-12">
      <button className="flex justify-start items-center p-[10px] bg-[#6F4E37] text-[#FFF8E1] rounded-[5px] w-[22rem] cursor-pointer" type="submit">Send message</button>
    </div>
  </form>
    )
}
export default SendEmailDirectCard;
