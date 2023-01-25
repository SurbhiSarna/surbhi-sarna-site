import React from "react";

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
      <div className="bg-yellow-50">
        <div>
          <h1 className="text-4xl font-bold text-violet-700 text-center py-6">
            Let's Talk, I'd love to hear from you!
          </h1>
        </div>
        <form
          action="https://gmail.us18.list-manage.com/subscribe/post"
          method="POST"
          className="bg-yellow-50"
          noValidate
        >
          <input type="hidden" name="u" value="9a3ee21e2db7dfacb07809929" />
          <input type="hidden" name="id" value="f4142fc5bc" />
          <div className="flex flex-col justify-center mx-auto w-96 max-w-sm px-5">
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
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="bg-emerald-600 text-white font-bold py-2 px-6 rounded-full my-4 hover:text-white hover:bg-emerald-800 border hover:border-emerald-800"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
