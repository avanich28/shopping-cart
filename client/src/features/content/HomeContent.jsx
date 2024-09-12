import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2';
import { MdDeliveryDining } from 'react-icons/md';

import slicePizza from '../../assets/images/home/slice-pizza.jpg';
import pizzaOven from '../../assets/images/home/pizza-oven.jpg';
import eatPizza from '../../assets/images/home/eat-pizza.jpg';

import { useMenuLists } from '../menu/useMenuLists';

import LinkButton from '../../ui/LinkButton';
import MenuItem from '../menu/MenuItem';
import Spinner from '../../ui/Spinner';
import Button from '../../ui/Button';
import Heading from '../../ui/Heading';
import HomeHeader from './HomeHeader';

const NUM_LISTS = 3;

function HomeContent() {
  const {
    menuLists: currentPage,
    handleMenuLists,
    side,
    isLoading,
    currentMenuLists,
  } = useMenuLists(NUM_LISTS, true);

  return (
    <>
      <HomeHeader />

      <section
        className="flex flex-col items-center justify-center gap-2 px-2 py-8
      "
      >
        <Heading type="primary">Our Menus</Heading>

        <div className="flex min-h-[180px] items-center gap-9 overflow-hidden">
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <Button type="secondary" onClick={() => handleMenuLists('left')}>
                <HiOutlineChevronLeft />
              </Button>

              <div
                key={currentPage}
                className={`${
                  side === 'left' ? 'animate-slideL' : 'animate-slideR'
                } flex`}
              >
                {currentMenuLists?.map((pizza) => (
                  <MenuItem
                    pizza={pizza}
                    detail={false}
                    key={pizza.name}
                    type="primary"
                  />
                ))}
              </div>

              <Button type="secondary" onClick={() => handleMenuLists('right')}>
                <HiOutlineChevronRight />
              </Button>
            </>
          )}
        </div>

        {!isLoading && (
          <LinkButton to="/menu" type="primary">
            Order now
          </LinkButton>
        )}
      </section>

      <section className="flex h-96 justify-between align-middle [&>div]:flex-1">
        <div
          style={{ backgroundImage: `url(${slicePizza})` }}
          className="bg-cover bg-bottom"
        ></div>

        <div className="flex justify-center text-center">
          <p className="vertical-text text-xl font-semibold dark:text-white [&>span]:text-3xl [&>span]:font-bold [&>span]:text-red-700">
            <span>M</span>ade Fresh Every Day with <span>F</span>resh{' '}
            Ingredients
          </p>
        </div>

        <div
          style={{ backgroundImage: `url(${pizzaOven})` }}
          className="bg-cover bg-top"
        ></div>
      </section>

      <section className="flex h-96 justify-between align-middle dark:text-white [&>div]:flex-1">
        <div className="flex flex-col items-center justify-center">
          <p className="flex flex-col items-center text-xl font-bold tracking-widest">
            <span className="text-5xl">
              <MdDeliveryDining />
            </span>
            <span>Delivery</span>
            <span>or</span>
            <span>Pick Up</span>
          </p>
        </div>

        <div
          style={{ backgroundImage: `url(${eatPizza})` }}
          className="bg-cover bg-center"
        ></div>

        <div className="flex flex-col justify-center gap-2 tracking-widest [&>*]:px-3">
          <Heading className="flex flex-col text-3xl font-bold uppercase text-red-700">
            <span>Hot</span>
            <span>Promotion</span>
          </Heading>
          <p className="flex flex-col text-xl font-semibold">
            <span>Buy 5 Large Size</span>
            <span>Get 25% Discount</span>
          </p>
        </div>
      </section>
    </>
  );
}

export default HomeContent;
