import React from "react";
import ContactUsForm from "../../ContactPage/ContactUsForm";

const ContactFormSection=()=>{
    return(
        <div className="mx-auto translate-y-[-70px] border border-white rounded-lg p-9 border-y-4 h-[850px] ">
            <h1 className="font-bold text-3xl text-center text-richblack-25">Get in Touch</h1>
            <p className="text-center text-sm mt-3 text-richblack-400">We'd love to here for you,Please fill out this form.</p>
            <div className="mb-[140px] ">
                <ContactUsForm/>
            </div>

        </div>
    );
}
export default ContactFormSection;