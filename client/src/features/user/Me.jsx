import { Outlet } from 'react-router-dom';
import { MdDeliveryDining } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io';
import LinkButton from '../../ui/LinkButton';

function Me() {
  return (
    <div className="flex h-full">
      <aside className="flex flex-col gap-5 bg-amber-100 px-3 py-6 [&_svg]:text-xl">
        <LinkButton type="nav2">
          <MdDeliveryDining />
        </LinkButton>

        <LinkButton to="setting" type="nav2">
          <IoMdSettings />
        </LinkButton>
      </aside>
      <section className="w-full">
        <Outlet />
      </section>
    </div>
  );
}

export default Me;
