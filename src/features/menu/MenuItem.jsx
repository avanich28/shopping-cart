import ImageBox from '../../ui/ImageBox';
import pizzaXX from '../../assets/images/home/slice-pizza.jpg';

function MenuItem({ pizza, detail = true }) {
  const { imageUrl, name, ingredients, unitPrice } = pizza;

  return (
    <div className="flex w-48 flex-col items-center border-2 border-stone-300 p-2 text-[14px] tracking-wider transition-all hover:border-amber-300">
      <ImageBox
        // FIXME
        src={pizzaXX}
        alt={name}
        className="mb-3 h-32 w-32 overflow-hidden rounded-full"
      />
      <h4>{name}</h4>

      {/* TODO */}
      {detail && (
        <>
          <p>{ingredients.join(', ')}</p>
          <p className="text-base font-semibold">{unitPrice}</p>
          {/* FIXME */}
          {/* <button>Add to cart</button> */}
        </>
      )}
    </div>
  );
}

export default MenuItem;
