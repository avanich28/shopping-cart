import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsLine } from 'react-icons/bs';
import { BsWechat } from 'react-icons/bs';

import Heading from '../../ui/Heading';
import Hyperlink from '../../ui/Hyperlink';
import Map from '../../ui/Map';

function ContactUsContent() {
  return (
    <div className="flex h-full items-center gap-[10vw] px-[10vw]">
      <div className="h-[75vh] w-[40vw] animate-slideL">
        <Map />
      </div>
      <div className="flex animate-slideD flex-col gap-5 dark:text-white">
        <Heading type="primary">Contact us</Heading>
        <div className="flex flex-col gap-4">
          <div>
            <Heading type="secondary">Call</Heading>
            <p>090 123 4567</p>
          </div>
          <div>
            <Heading type="secondary">Email</Heading>
            <p>napopizza@worldmail.com</p>
          </div>
          <div>
            <Heading type="secondary">Location</Heading>
            <p>
              127 Rock Street, 21 Avenue,
              <br />
              New York, NY 92103-9000
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Heading type="secondary">Opening Times</Heading>
            <p>
              Monday to Friday
              <br />
              6.00 AM - 21.00 PM
            </p>
            <p>
              Saturday
              <br />
              10.00 AM - 21.00 PM
            </p>
            <p>Sunday Closed</p>
          </div>
        </div>

        <div className="flex gap-5 [&>*]:text-xl">
          <Hyperlink type="footer">
            <BsTwitter />
          </Hyperlink>
          <Hyperlink type="footer">
            <BsInstagram />
          </Hyperlink>
          <Hyperlink type="footer">
            <BsFacebook />
          </Hyperlink>
          <Hyperlink type="footer">
            <BsLine />
          </Hyperlink>
          <Hyperlink type="footer">
            <BsWechat />
          </Hyperlink>
        </div>
      </div>
    </div>
  );
}

export default ContactUsContent;
