import React, { useState } from "react";
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
import Modal from 'react-modal';

const Footer = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState();
  const [modalParagraph, setModalParagraph] = useState();


  const modalTitles = [
    "Why Panda Lotto",
    "Terms & Conditions",
    "Privacy Policy"
  ]

  const modalParagraphs = [
    "Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto Why Panda Lotto ",
    "Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions Terms & Conditions ",
    "Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy Privacy Policy "
  ]

  const customStyles = {
    content: {
      borderRadius:'10px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      margin:'20px',
      transform: 'translate(-50%, -50%)',
      padding:'10px 50px',
      overflow:'auto'
    },
  };

  const showModal =(id)=>{
    setModalTitle(id)
    setModalParagraph(id)
    setModalIsOpen(true)
  }

  return (
    <div className="footer">
      
      
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}>
          <div className="modal-close-icon-container">
            <img src={require('../../icons/Close.png')} className="modal-close-icon"
            onClick={()=>setModalIsOpen(false)}/>
          </div>
          <div className="panda-modal-container">
            <div className="panda-modal-child">
              <h1>{modalTitles[modalTitle]}</h1>
              <p className="footer-modal-paragraph">{modalParagraphs[modalParagraph]}</p>
            </div>
          </div>
        </Modal>
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
        <a href="https://facebook.com" target="_blank">
          <img src={Fb} className="footer__social__icon"/>
        </a>
        <img src={charc} className="footer__panda__img"/>
        <a href="https://instagram.com" target="_blank">
          <img src={Insta} className="footer__social__icon"/>
        </a>
      </div>

      <div className="sec3">
        <div className="sec3-1">
          <Link classname="footer__link" style={{textDecoration:'none'}} to="/previous">
            <div className="sub">Previous Results</div>
          </Link>
          <Link classname="footer__link" style={{textDecoration:'none'}} to='/step1'>
            <div className="sub">Let's Play</div>
          </Link>
          <div className="sub" onClick={()=>showModal(0)}>Why Panda Lotto</div>
          <Link classname="footer__link" style={{textDecoration:'none'}} to="/reach-us">
            <div className="sub">Contact</div>
          </Link>
          <div className="sub" onClick={()=>showModal(1)}>Terms & Conditions</div>
          <div className="sub" onClick={()=>showModal(2)}>Privacy Policy</div>
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

export default Footer;
