const Card = () => {
  return (
    <article className="p-10 rounded-xl bg-white shadow-lg bg-gradient-to-r from-sky-100 via-pink-100 to-orange-100/50">
      <h5 className="text-xl font-medium mb-2">Card Title</h5>
      <p className="text-gray-700 text-base mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptas
        cupiditate. Tempore temporibus eum alias dolores veritatis dignissimos
        fugit quis neque explicabo sit quaerat architecto, laudantium animi
        nesciunt perspiciatis necessitatibus.
      </p>
      <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
    </article>
  );
};

export default Card;
