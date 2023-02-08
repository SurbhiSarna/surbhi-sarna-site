import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

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
      <div className="bg-violet-900">
        <div className="max-w-7xl mx-auto md:h-max md:py-20 py-10">
          <h1 className="text-4xl font-bold text-white text-center py-10">
            Let's Talk, I'd love to hear from you!
          </h1>
          <div className="flex flex-col justify-center mx-auto max-w-xl px-5">
            <p className="text-xl text-emerald-300 text-center pb-10">
              I am always open to new opportunities, whether you have a question
              or just want to say hi. Please get in touch.
              <br />I would love to hear from you.
              <br />
              <br />
              Subscribe to receive announcements about new courses and workshops
              or request a workshop or course in your area
            </p>
          </div>
          <form
            action="https://gmail.us18.list-manage.com/subscribe/post"
            method="POST"
            className="w-4/5 mx-auto"
            noValidate
          >
            <input type="hidden" name="u" value="9a3ee21e2db7dfacb07809929" />
            <input type="hidden" name="id" value="f4142fc5bc" />
            <div className="flex flex-col justify-center mx-auto max-w-xl px-5">
              <label
                htmlFor="MERGE0"
                className="text-emerald-300 font-bold py-2 text-left"
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
                className="text-emerald-300 font-bold py-2 text-left"
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
                className="text-emerald-300 font-bold py-2 text-left"
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
                className="text-emerald-300 font-bold py-2 text-left"
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
                className="bg-emerald-600 text-white font-bold py-4 px-6 rounded-full my-10 hover:text-emerald-700 hover:bg-white border hover:border-emerald-800"
              />
            </div>
          </form>
          <h2 className="text-3xl font-bold text-white text-center pt-5 pb-2">
            You can also reach me at
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center flex-wrap mx-auto pb-5">
            <p className="text-xl text-emerald-700 text-left p-4 border-solid border-white border-2 bg-white w-64 h-28 m-4 rounded-xl">
              I'm situated in
              <br />
              <span className="font-medium">
                Bhubaneswar, Odisha <br />
                India
              </span>
            </p>
            <a href="mailto:surbhistoryzen@gmail.com" className="text-lg text-center pt-6 text-emerald-700 p-2 border-solid border-white border-2 bg-white w-64 h-28 m-4 rounded-xl hover:bg-emerald-700 hover:text-white">
              <EnvelopeIcon className="h-6 w-6 inline-block mb-2" />
              <br />
                surbhistoryzen@gmail.com
            </a>
            <a href="tel: +918908016222" className="text-lg text-center pt-6 text-emerald-700 p-2 border-solid border-white border-2 bg-white w-64 h-28 m-4 rounded-xl hover:bg-emerald-700 hover:text-white">
              <PhoneIcon className="h-6 w-6 inline-block mb-2" />
              <br />
                +91-8908016222
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
