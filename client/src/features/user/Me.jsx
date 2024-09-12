import { Outlet } from 'react-router-dom';
import { MdDeliveryDining } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io';
import LinkButton from '../../ui/LinkButton';

function Me() {
  return (
    <div className="flex h-full">
      <aside className="ml-2 flex flex-col gap-4 self-center rounded-3xl bg-amber-300 px-3 py-6 [&_svg]:text-xl">
        <LinkButton to="delivery" type="nav2">
          <MdDeliveryDining />
        </LinkButton>

        <LinkButton to="setting" type="nav2">
          <IoMdSettings />
        </LinkButton>
      </aside>
      <section className="h-full w-full">
        <Outlet />
      </section>
    </div>
  );
}

export default Me;
