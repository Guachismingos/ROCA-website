import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import routes from "@/data/routes.static";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  faInstagramSquare,
  faWhatsappSquare,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="flex flex-col gap-4 border-t-[black] border-t bg-base-dark lg:px-[6rem] xl:px-40 lg:py-6 md:px-20 px-10 py-4 text-[gray] bottom-0 ">
      <div className="grid grid-cols-2 grid-rows-1 gap-4 md:grid-cols-4">
        <div className="flex flex-col md:col-span-1 md:row-span-1">
          <h2 className="text-xl text-base-light">Menú</h2>
          <hr className="h-px my-2 bg-[gray] border-0" />
          <ul className="flex-row items-center">
            {routes.map(({ title, path, scroll }, idx) => (
              <li key={idx}>
                {router.pathname != "/" ? (
                  <Link
                    href={path || ""}
                    className="p-0 text-xl antialiased lg:bg-transparent hover:text-primary-light hover:font-bold"
                  >
                    {title}
                  </Link>
                ) : (
                  <a href={scroll}>{title}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col md:col-span-1 md:row-span-1">
          <h2 className="text-xl text-base-light">Acerca de</h2>
          <hr className="h-px my-2 bg-[gray] border-0" />
          <p>s</p>
        </div>
        <div className="flex flex-col col-span-2 md:col-span-1 md:row-span-1">
          <h2 className="text-xl text-base-light">Redes sociales</h2>
          <hr className="h-px my-2 bg-[gray] border-0" />
          <ul className="flex flex-row flex-1">
            <li className="flex justify-center flex-1 hover:text-primary-light">
              <a
                className="text-5xl"
                href="https://www.instagram.com/roca_ingenieriacivil/"
              >
                <FontAwesomeIcon icon={faInstagramSquare} />
              </a>
            </li>
            <li className="flex justify-center flex-1 hover:text-primary-light">
              <a
                className="text-5xl"
                href="https://www.facebook.com/ingenierocivillesterrojas?mibextid=ZbWKwL"
              >
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
            </li>
            <li className="flex justify-center flex-1 hover:text-primary-light">
              <a className="text-5xl" href="https://wa.me/50685073374">
                <FontAwesomeIcon icon={faWhatsappSquare} />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col col-span-2 md:col-span-1 md:row-span-1">
          <h2 className="text-xl text-base-light">ROCA</h2>
          <hr className="h-px my-2 bg-[gray] border-0" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            nostrum non fugit perferendis.
          </p>
        </div>
      </div>
      <div className="flex-1">
        <hr className="h-px my-2 bg-[gray] border-0" />
        <div className="flex w-100">
          <span className="flex-1">
            <span className="text-primary-light">&copy;</span> 2023
          </span>
          <span className="flex-1 text-end">
            <span className="text-primary-light">ROCA</span>, Ingeniería civil
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
