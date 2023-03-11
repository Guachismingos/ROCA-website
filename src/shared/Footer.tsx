const Footer = () => {
  return (
    <footer className="grid grid-cols-4 grid-rows-2 gap-4 border-[black] border bg-base-dark lg:px-[6rem] xl:px-40 lg:py-6 md:px-20 px-10 py-4 text-[gray]">
      <div className="col-span-1">
        <h2 className="text-xl text-base-light">Menú</h2>
        <hr className="h-px my-2 bg-[gray] border-0" />
        <p>s</p>
      </div>
      <div className="col-span-2">
        <h2 className="text-xl text-base-light">Acerca de</h2>
        <hr className="h-px my-2 bg-[gray] border-0" />
        <p>s</p>
      </div>
      <div className="col-span-1">
        <h2 className="text-xl text-base-light">Redes sociales</h2>
        <hr className="h-px my-2 bg-[gray] border-0" />
        <p>s</p>
      </div>
      <div className="col-span-4 row-span-1">
        <hr className="h-px my-2 bg-[gray] border-0" />
        <div className="flex w-100">
        <span className="flex-1">&copy; 2023</span>
        <span className="flex-1 text-end">ROCA, <small>Consultoría arquitectonica y civil</small></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
