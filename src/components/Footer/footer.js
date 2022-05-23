import React from "react";
import "../Footer/footer.scss";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Down from "../../icons/ardown.svg";
import Fb from "../../icons/fb.svg";
import Insta from "../../icons/insta.svg";
import { Link } from "react-router-dom";
import charc from "../../icons/charac.svg";

const footer = () => {
  return (
    <div className="footer">
      <div className="sec1">
        <div className="title">Frequently Asked Questions</div>

        <Accordion className="accordion">
          <AccordionItem className="item">
            <AccordionItemHeading>
              <AccordionItemButton className="head">
                How safe is Panda Lotto?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
        <Accordion className="accordion">
          <AccordionItem className="item">
            <AccordionItemHeading>
              <AccordionItemButton className="head">
                How can I get in touch with customer support?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
        <Accordion className="accordion">
          <AccordionItem className="item">
            <AccordionItemHeading>
              <AccordionItemButton className="head">
                How can I get in touch with customer support?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
        <Accordion className="accordion">
          <AccordionItem className="item">
            <AccordionItemHeading>
              <AccordionItemButton className="head">
                How safe is Panda Lotto?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
        <Accordion className="accordion">
          <AccordionItem className="item">
            <AccordionItemHeading>
              <AccordionItemButton className="head">
                How safe is Panda Lotto?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="sec2">
        <a href="https://facebook.com">
          <img src={Fb} />
        </a>
        <img src={charc} />
        <a href="https://instagram.com">
          <img src={Insta} />
        </a>
      </div>

      <div className="sec3">
        <div className="sec3-1">
          <Link to="/previous">
            <div className="sub">Previous Results</div>
          </Link>
          <div className="sub">Let's Play</div>
          <div className="sub">Why Panda Lotto</div>
          <div className="sub">Contact</div>
          <div className="sub">Terms & Conditions</div>
          <div className="sub">Privacy Policy</div>
        </div>

        <div className="sec3-2">
          Copyright © 2022 Panda Lotto. All product names, logos, and brands are
          property of their respective owners. All personal information,
          contacts, payments and links used in this website are 100% secured.
          Website by <span>Swot</span>
        </div>
      </div>
    </div>
  );
};

export default footer;
