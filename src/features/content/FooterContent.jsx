import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsLine } from 'react-icons/bs';
import { BsWechat } from 'react-icons/bs';

import ImageBox from '../../ui/ImageBox';
import FooterContentBox from '../../ui/FooterContentBox';
import LinkButton from '../../ui/LinkButton';
import Hyperlink from '../../ui/Hyperlink';

function FooterContent() {
  return (
    <div className="flex flex-wrap gap-8 [&>*]:flex-1">
      <FooterContentBox label="Help" className="flex-col">
        <LinkButton type="footer">How to Buy</LinkButton>
        <LinkButton type="footer">How to Return</LinkButton>
        <LinkButton type="footer">Shipping & Delivery</LinkButton>
        <LinkButton type="footer">FAQ</LinkButton>
      </FooterContentBox>

      <FooterContentBox
        label="Payment Methods"
        className="[&>div]:h-14 [&>div]:w-14"
      >
        <ImageBox src="cash-on-delivery.png" alt="Cash on delivery" />
        <ImageBox src="card.png" alt="Master Card" />
        <ImageBox src="apple-pay.png" alt="Apple Pay" />
        <ImageBox src="jcb.png" alt="JCB" />
        <ImageBox src="paypal.png" alt="Paypal" />
        <ImageBox src="union-pay.png" alt="Union Pay" />
        <ImageBox src="visa.png" alt="Visa" />
      </FooterContentBox>

      <FooterContentBox
        label="Delivery Service"
        className="[&>div]:h-20 [&>div]:w-20"
      >
        <ImageBox src="robinhood.jpeg" alt="Robinhood" />
        <ImageBox src="shopee-food.svg" alt="Shopee Food" />
        <ImageBox src="grab.svg" alt="Grab" />
        <ImageBox src="line-man.svg" alt="Line Man" />
      </FooterContentBox>

      <FooterContentBox label="Follow Us" className="text-2xl">
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
      </FooterContentBox>
    </div>
  );
}

export default FooterContent;
