import React from "react";
import "./ContactUs.css";
const ContactUs = () => {
  const persons = [
    {
      name: "Nitish Kumar",
      pos: "MANAGER,HOSPITALITY",
      mob: "+91-9835637958",
    },
    {
      name: "Kunal Saini",
      pos: "MANAGER,HOSPITALITY",
      mob: "+91-7231982706",
    },
    {
      name: "Ericlim Pallepogu",
      pos: "MANAGER, HOSPITALITY",
      mob: "+91-9835637958",
    },
    {
      name: "Anita Waskale",
      pos: "MANAGER, HOSPITALITY",
      mob: "+91-9835637958",
    },
    {
      name: "Aarjav",
      pos: "MANAGER, HOSPITALITY",
      mob: "+91-9835637958",
    },
    {
      name: "Sanskar Mittal",
      pos: "HEAD, EVENTS AND COMPETITIONS",
      mob: "+91-9835637958",
    },
    {
      name: "Anita Waskale",
      pos: "HEAD, EVENTS AND COMPETITIONS",
      mob: "+91-9835637958",
    },
  ];

  const person = persons.map((p) => {
    return (
      <div class="card">
        <div class="content">
          <div class="imgBx">
            <img
              src="https://icon-library.com/images/person-png-icon/person-png-icon-29.jpg"
              alt=""
            />
          </div>
          <div class="contentBx">
            <h3>
              {p.name}
              <br />
              <span>{p.pos}</span>
              <br />
              <span>{p.mob}</span>
            </h3>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
    );
  });
  return <div className="container">{person}</div>;
};

export default ContactUs;
