import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsLine } from 'react-icons/bs';
import { BsWechat } from 'react-icons/bs';

import cashOnDelivery from '../../assets/images/footer/cash-on-delivery.png';
import masterCard from '../../assets/images/footer/card.png';
import applePay from '../../assets/images/footer/apple-pay.png';
import jcb from '../../assets/images/footer/jcb.png';
import payPal from '../../assets/images/footer/paypal.png';
import unionPay from '../../assets/images/footer/union-pay.png';
import visa from '../../assets/images/footer/visa.png';
import robinhood from '../../assets/images/footer/robinhood.jpeg';
import shopeeFood from '../../assets/images/footer/shopee-food.svg';
import grab from '../../assets/images/footer/grab.svg';
import lineMan from '../../assets/images/footer/line-man.svg';

import ImageBox from '../../ui/ImageBox';
import FooterContentBox from './FooterContentBox';
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
        <ImageBox src={cashOnDelivery} alt="Cash on delivery" />
        <ImageBox src={masterCard} alt="Master Card" />
        <ImageBox src={applePay} alt="Apple Pay" />
        <ImageBox src={jcb} alt="JCB" />
        <ImageBox src={payPal} alt="Paypal" />
        <ImageBox src={unionPay} alt="Union Pay" />
        <ImageBox src={visa} alt="Visa" />
      </FooterContentBox>

      <FooterContentBox
        label="Delivery Services"
        className="[&>div]:h-20 [&>div]:w-20"
      >
        <ImageBox src={robinhood} alt="Robinhood" />
        <ImageBox src={shopeeFood} alt="Shopee Food" />
        <ImageBox src={grab} alt="Grab" />
        <ImageBox src={lineMan} alt="Line Man" />
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
