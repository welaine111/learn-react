import React, { Component } from "react";
import Contact from "./Contact";
class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Elaine Wang",
        email: "11@gmail.com",
        phone: "444-444-444"
      },
      {
        id: 2,
        name: "Henry Joh",
        email: "22@gmail.com",
        phone: "555-555-555"
      },
      {
        id: 3,
        name: "Sara Wang",
        email: "33@gmail.com",
        phone: "666-666-666"
      }
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}
export default Contacts;
