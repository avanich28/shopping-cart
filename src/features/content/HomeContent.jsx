import { HiArrowLeftCircle } from 'react-icons/hi2';
import { HiArrowRightCircle } from 'react-icons/hi2';
import { HiOutlineChevronLeft } from 'react-icons/hi2';
import { HiOutlineChevronRight } from 'react-icons/hi2';

import slicePizza from '../../assets/images/home/slice-pizza.jpg';
import pizzaOven from '../../assets/images/home/pizza-oven.jpg';
import eatPizza from '../../assets/images/home/eat-pizza.jpg';
import fastDelivery from '../../assets/images/home/fast-delivery.png';

import { headerContents, useHeaderContents } from './useHeaderContents';
import { useMenuLists } from '../menu/useMenuLists';

import ImageBox from '../../ui/ImageBox';
import LinkButton from '../../ui/LinkButton';
import MenuItem from '../menu/MenuItem';
import Spinner from '../../ui/Spinner';
import Button from '../../ui/Button';

const NUM_LISTS = 3;

function HomeContent() {
  const { currentContent, handleCurrentContent } = useHeaderContents();
  const {
    menuLists: currentPage,
    handleMenuLists,
    side,
    isLoading,
    currentMenuLists,
  } = useMenuLists(NUM_LISTS);

  const { id, title, detail } = currentContent;

  return (
    <>
      <header className="relative flex flex-col items-center justify-center">
        <Button
          type="circleArrow"
          className="left-1"
          onClick={() => handleCurrentContent(id - 1)}
        >
          <HiArrowLeftCircle />
        </Button>

        <div className="relative flex h-[35rem] w-full flex-col items-center justify-center overflow-hidden">
          <div
            style={{ transform: `translateX(-${Number(id) * 100}%)` }}
            className={`absolute flex transition-all duration-[1000ms] ease-in-out [&>div]:h-full [&>div]:w-full`}
          >
            {headerContents.map((content) => (
              <ImageBox
                key={content.id}
                src={content.image}
                alt={content.alt}
                type="advertise"
              />
            ))}
          </div>
          <div
            key={title}
            className="z-10 w-[600px] animate-fade text-center text-stone-50 opacity-0"
          >
            <h2 className="mb-3 text-5xl font-bold uppercase leading-snug tracking-wider">
              {title}
            </h2>
            <p className="text-xl font-semibold tracking-wide">{detail}</p>
          </div>
        </div>

        <Button
          type="circleArrow"
          className="right-1"
          onClick={() => handleCurrentContent(id + 1)}
        >
          <HiArrowRightCircle />
        </Button>

        <div className="absolute bottom-5 flex gap-6">
          {headerContents.map((content) => (
            <Button
              key={content.id}
              type="dot"
              className={id === content.id ? 'bg-stone-50' : 'bg-stone-400'}
              onClick={() => handleCurrentContent(content.id)}
            />
          ))}
        </div>
      </header>

      <section
        className="flex flex-col items-center justify-center gap-2 px-2 py-8
      "
      >
        <h3 className="mt-5 text-2xl font-bold uppercase tracking-widest text-red-700">
          Our Menus
        </h3>

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
                } flex w-[640px] justify-between`}
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
          <p className="vertical-text text-xl font-semibold [&>span]:text-3xl [&>span]:font-bold [&>span]:text-red-700">
            <span>M</span>ade Fresh Every Day with <span>F</span>resh{' '}
            Ingredients
          </p>
        </div>

        <div
          style={{ backgroundImage: `url(${pizzaOven})` }}
          className="bg-cover bg-top"
        ></div>
      </section>

      <section className="flex h-96 justify-between align-middle [&>div]:flex-1">
        <div className="flex flex-col items-center justify-center">
          <ImageBox
            src={fastDelivery}
            alt="Fast
            Delivery"
            className="h-24 w-24"
          />
          <p className="flex flex-col items-center text-xl font-bold tracking-widest">
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
          <h4 className="flex flex-col text-3xl font-bold uppercase text-red-700">
            <span>Hot</span>
            <span>Promotion</span>
          </h4>
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
