import emptyCart from '../../assets/images/cart/empty-cart.png';
import ImageBox from '../../ui/ImageBox';

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 py-20">
      <ImageBox
        src={emptyCart}
        alt="Empty Cart"
        className="h-[100px] w-[100px]"
      />
      <p className="text-xl font-bold uppercase tracking-wide text-stone-400">
        Your cart is empty
      </p>
    </div>
  );
}

export default EmptyCart;
