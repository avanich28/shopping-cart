import { HiMiniChevronLeft, HiMiniChevronRight } from 'react-icons/hi2';
import Button from '../../ui/Button';

function MenuPages({
  pages,
  isLoading,
  currentPage,
  onMenuLists,
  onClickPage,
}) {
  return (
    <>
      {pages > 1 && (
        <div className="mt-10 flex gap-3 [&>*]:transition-all">
          {currentPage > 0 && (
            <Button onClick={() => onMenuLists('left', false)} type="secondary">
              <HiMiniChevronLeft />
            </Button>
          )}

          {!isLoading &&
            new Array(pages).fill('')?.map((_, i) => (
              <Button
                key={i}
                type="secondary"
                onClick={() => onClickPage(i)}
                className={`
                ${
                  currentPage === i
                    ? 'rounded-full bg-amber-300 text-white hover:text-white'
                    : ''
                } h-8 w-8`}
              >
                {i + 1}
              </Button>
            ))}

          {currentPage < pages - 1 && (
            <Button
              onClick={() => onMenuLists('right', false)}
              type="secondary"
            >
              <HiMiniChevronRight />
            </Button>
          )}
        </div>
      )}
    </>
  );
}

export default MenuPages;
