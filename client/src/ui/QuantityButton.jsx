import { HiMiniMinusCircle, HiMiniPlusCircle } from 'react-icons/hi2';
import Button from './Button';

function QuantityButton({ onClickDec, onClickInc, quantity }) {
  return (
    <div className="flex items-center">
      <Button type="quantity" onClick={onClickDec}>
        <HiMiniMinusCircle />
      </Button>
      <span className="w-[50px] text-center">{quantity}</span>
      <Button type="quantity" onClick={onClickInc}>
        <HiMiniPlusCircle />
      </Button>
    </div>
  );
}

export default QuantityButton;
