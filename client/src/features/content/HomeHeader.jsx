import { HiArrowLeftCircle, HiArrowRightCircle } from 'react-icons/hi2';
import Button from '../../ui/Button';
import ImageBox from '../../ui/ImageBox';
import Heading from '../../ui/Heading';
import { headerContents, useHeaderContents } from './useHeaderContents';

function HomeHeader() {
  const { currentContent, handleCurrentContent } = useHeaderContents();

  const { id, title, detail } = currentContent;

  return (
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
          <Heading type="title">{title}</Heading>
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
  );
}

export default HomeHeader;
