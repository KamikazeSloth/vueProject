import emailjs from "emailjs-com";

export const sendEmail = (e) => {
        emailjs
          .sendForm(
            "service_xklj84b",
            "template_mkjixjn",
            e.target,
            "user_QCNObBG5B2zy4EIjqT97l"
          )
          .then(
            (result) => {
              console.log("SUCCESS!", result.status, result.text);
            },
            (error) => {
              console.log("FAILED...", error);
            }
          );
}