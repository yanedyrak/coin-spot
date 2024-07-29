export const BalanceAction = () => {
  return (
    <div className="mt-2 p-3 rounded-3xl grid grid-cols-6 items-center duration-300 hover:bg-green cursor-pointer">
      <div className="flex">
        <img
          className="w-12 h-12 rounded-full"
          src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
          alt=""
        />
        <img
          className="w-12 h-12 -ml-3 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKQZF4qaT31FQjaL-S1625LnYWt-Zm-kXqXlYctyczMqbSNlVE5UJsHRlVK5ggmPwwNlM&usqp=CAU"
          alt=""
        />
      </div>
      <p>Purschase</p>
      <p>Daniel K.</p>
      <p className="text-center">0.12457 </p>
      <p className="text-center"> 2.00</p>
      <p className="text-center">0.12515 ETH</p>
    </div>
  );
};
