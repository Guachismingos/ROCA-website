import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/logo.png";
import routes from "@/data/routes.static";
import { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";



const Header = () => {

  const router = useRouter();

  return (
    <header className="relative z-50 drop-shadow-xl">
      <div className="header absolute top-0 flex w-full px-10 py-4 h-36 lg:px-[6rem] xl:px-40 lg:py-6 md:px-20 bg-base-light">
        <div className="flex items-center flex-1 h-5/6">
          <nav className="flex items-center justify-between flex-1 h-full bg-base-light">
            <img className="xl:h-full h-3/6" src={logo.src} alt="ROCA" />
            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-light dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"

            >
              <FontAwesomeIcon icon={faBars} height="2rem" />
            </button>
            <div className="flex-row items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-4 xl:space-x-8 lg:mt-0">
                {routes.map(({ title, path, scroll }, idx) => (
                  <Fragment key={idx}>
                    <li>
                      {router.pathname != "/" ? (
                        <Link
                          href={path || ""}
                          className="p-0 text-xl antialiased lg:bg-transparent hover:text-primary-light"
                        >
                          {title}
                        </Link>
                      ) : (
                        <a
                          className="p-0 text-xl antialiased lg:bg-transparent hover:text-primary-light"
                          href={scroll}
                        >
                          {title}
                        </a>
                      )}
                    </li>
                    {idx < routes.length - 1 ? (
                      <span className="divider" />
                    ) : null}
                  </Fragment>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
