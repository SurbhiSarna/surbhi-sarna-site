import React from "react";
import contactBg from "../../assets/images/contact-bg.jpg";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: "",
      fNameValue: "",
      lNameValue: "",
      description: "",
    };
  }

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="max-w-7xl mx-auto h-screen"
      >
        <h1 className="text-4xl font-bold text-violet-700 text-center py-10">
          Let's Talk, I'd love to hear from you!
        </h1>
        <div className="flex flex-col justify-center mx-auto max-w-xl px-5">
          <p className="text-xl text-emerald-800 text-center pb-10">
            I am always open to new opportunities, whether you have a question
            or just want to say hi. Please get in touch.
            <br />I would love to hear from you.
          </p>
        </div>
        <form
          action="https://gmail.us18.list-manage.com/subscribe/post"
          method="POST"
          className="md:w-4/5 mx-auto"
          noValidate
        >
          <input type="hidden" name="u" value="9a3ee21e2db7dfacb07809929" />
          <input type="hidden" name="id" value="f4142fc5bc" />
          <div className="flex flex-col justify-center mx-auto max-w-xl px-5">
            <label
              htmlFor="MERGE0"
              className="text-emerald-700 font-bold py-2 text-left"
            >
              Email
            </label>
            <input
              type="email"
              className="bg-white text-emerald-600 autofill:!bg-white autofill:text-emerald-600 focus:outline-none focus:shadow-outline border border-emerald-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              name="EMAIL"
              id="MERGE0"
              value={this.state.emailValue}
              onChange={(e) => {
                this.setState({ emailValue: e.target.value });
              }}
              autoCapitalize="off"
              autoCorrect="off"
            />
            <label
              htmlFor="MERGE1"
              className="text-emerald-700 font-bold py-2 text-left"
            >
              First name
            </label>
            <input
              type="text"
              className="bg-white focus:bg-white focus:outline-none focus:shadow-outline border border-emerald-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              name="FNAME"
              id="MERGE1"
              value={this.state.fNameValue}
              onChange={(e) => {
                this.setState({ fNameValue: e.target.value });
              }}
            />
            <label
              htmlFor="MERGE2"
              className="text-emerald-700 font-bold py-2 text-left"
            >
              Last name
            </label>
            <input
              type="text"
              className="bg-white focus:outline-none focus:shadow-outline border border-emerald-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              name="LNAME"
              id="MERGE2"
              value={this.state.lNameValue}
              onChange={(e) => {
                this.setState({ lNameValue: e.target.value });
              }}
            />
            <label
              htmlFor="MERGE3"
              className="text-emerald-700 font-bold py-2 text-left"
            >
              Description
            </label>
            <textarea
              type="textarea"
              className="bg-white focus:outline-none focus:shadow-outline border border-emerald-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              name="DESC"
              id="MERGE3"
              value={this.state.lNameValue}
              onChange={(e) => {
                this.setState({ lNameValue: e.target.value });
              }}
            />
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="bg-emerald-600 text-white font-bold py-2 px-6 rounded-full my-4 hover:text-white hover:bg-emerald-800 border hover:border-emerald-800"
            />
          </div>
        </form>
        <ul className="flex flex-col justify-center mx-auto max-w-xl px-5 pt-10">
          <li className="text-emerald-800 text-xl py-2 text-left">
            • Subscribe to receive announcements about new courses and workshops
          </li>
          <li className="text-emerald-800 text-xl py-2 text-left">
            • Or request a workshop or course in your area
          </li>
        </ul>
        <div className="flex flex-col justify-center mx-auto max-w-xl px-5 pt-10">
          <p className="text-emerald-800 text-xl py-2 text-left">
            Hello
          </p>
        </div>
      </div>
    );
  }
}

export default ContactForm;
