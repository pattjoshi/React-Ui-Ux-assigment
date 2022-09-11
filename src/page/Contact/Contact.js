import React from "react";
import { ContactStyled, Flex, ConnDiv } from "./ContactStyled";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const Contact = () => {
  return (
    <>
      <Flex>
        <ContactStyled>
          <h1 className="h1">Connect with us</h1>
          <div className="mainDiv">
            <h5>Tell us about your project</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum
              lobortis mi vulputate potenti orci.
            </p>

            <div className="Biodata">
              <div>
                <h6>Your Name</h6>
                <input type="text" className="name" />
              </div>
            </div>
          </div>
          <div className="bigMessage">
            <h6 className="msgH">Message</h6>
            <textarea className="message" />
          </div>
          <a href="https://webalar.in/" target="blank">
            <button>submit</button>
          </a>
        </ContactStyled>
        <ConnDiv>
          <h5 className="h5">Address</h5>
          <p className="address">0199 Taylor Park, North Dakota, USA </p>
          <h5 className="call">Call Us</h5>
          <p className="callNo">+1 98723 42023 info@logoipsum.com</p>

          <h5 className="sosial">Follow Us</h5>

          <div className="conndev">
            <a href="https://www.instagram.com/om_pattjoshi/" target="_blank">
              <FaInstagram className="insta" />
            </a>
            <a href="https://twitter.com/Omprakshp3/" target="_blank">
              <FaTwitter className="twitter" />
            </a>

            <a href="https://www.facebook.com/om.pattjoshi/" target="_blank">
              <FaFacebook className="facebook" />
            </a>
          </div>
        </ConnDiv>
      </Flex>
    </>
  );
};

export default Contact;
