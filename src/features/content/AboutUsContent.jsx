import pizzeria from '../../assets/images/aboutUs/pizza-restaurant.jpg';

import Heading from '../../ui/Heading';

function AboutUsContent() {
  return (
    <div className="flex h-full [&>div]:flex-1">
      <div className="flex animate-slideD flex-col justify-center gap-5 px-5">
        <Heading type="primary">About us</Heading>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          architecto error minus nihil quod asperiores et, sint, doloremque
          nisi, accusamus assumenda velit pariatur laboriosam dicta atque
          debitis reiciendis? Mollitia, cum! Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Architecto rerum maiores impedit iure
          consequuntur qui reprehenderit nihil laudantium beatae nam labore ut
          odit sunt vero optio modi, voluptates, perferendis eius.
        </p>
      </div>
      <div
        style={{ backgroundImage: `url(${pizzeria})` }}
        className="h-full animate-slideR bg-cover bg-center"
      ></div>
    </div>
  );
}

export default AboutUsContent;
