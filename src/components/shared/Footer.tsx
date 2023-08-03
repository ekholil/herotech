import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer>
      <div className="py-[60px] lg:py-[120px]">
        <div className="container">
          <div className="grid grid-cols-12 gap-6  px-3 xl:px-0">
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <Link href="/" className="inline-block  mb-6 text-3xl font-bold">
                HeroTech
              </Link>
              <p className="clr-neutral-30 mb-6">
                Welcome to our booking website, where you can easily book all of
                your travel needs in one place. We offer a comprehensive
                selection of flights, hotels, and rental cars to help you plan
                the perfect trip.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <h4 className="text-2xl font-semibold mb-6"> Quick Link </h4>
              <ul className="flex flex-col gap-2 pl-0">
                <li>
                  <Link
                    href="/about-us"
                    className="hover:text-green-400  duration-300"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/property-list"
                    className="hover:text-green-400  duration-300"
                  >
                    Properties
                  </Link>
                </li>
                <li>
                  <Link
                    href="/agent"
                    className="hover:text-green-400  duration-300"
                  >
                    Agents
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="hover:text-green-400  duration-300"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="blog-grid"
                    className="hover:text-green-400  duration-300"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <h4 className="text-2xl font-semibold mb-6"> Contact </h4>
              <ul className="flex flex-col gap-4 pl-0">
                <li>
                  <div className="flex items-center gap-4">
                    <Link href="tel:3165550116" className="mb-0 clr-neutral-30">
                      (316) 555-0116
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-4">
                    <Link
                      href="mailto:example@mail.com"
                      className="mb-0 clr-neutral-30"
                    >
                      example@mail.com
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-4">
                    <p className="mb-0 clr-neutral-30">
                      31 Brandy Way, Sutton, SM2 6SE
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <h4 className="text-2xl font-semibold mb-6"> Newsletter </h4>
              <p className="mb-6 clr-neutral-30">
                Subscribe our newsletter to get our latest update & news
              </p>
              <div
                className="p-2 rounded-full"
                style={{ border: "1px solid gray" }}
              >
                <form action="#" className="flex items-center">
                  <input
                    type="text"
                    placeholder="Email address"
                    className="w-full border-0 bg-transparent clr-neutral-30 px-3 py-2 ::placeholder-neutral-30 focus:outline-none"
                  />
                  <button
                    type="button"
                    className="grid place-content-center px-6 py-3 rounded-full bg-[var(--tertiary)]  border-0"
                  ></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-span-12">
            <div className="py-8 border-t border-[#3638bd] ">
              <div className="grid grid-cols-12 gap-4 ">
                <div className="col-span-12 lg:col-span-6">
                  <p className="m-0 text-center lg:text-start">
                    Copyright &copy; {new Date().getFullYear()}
                    <span className="text-[var(--tertiary)]"> Herotech </span>.
                    Designed By
                    <Link href="#" className="text-[var(--secondary)]">
                      {" "}
                      Ekholil
                    </Link>
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <ul className="flex items-center flex-wrap gap-6 justify-center lg:justify-end">
                    <li>
                      <Link
                        href="/help-center"
                        className="hover:text-green-400  duration-300"
                      >
                        Help Center
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/privacy-policy"
                        className="hover:text-green-400  duration-300"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/terms"
                        className="hover:text-green-400  duration-300"
                      >
                        Terms of Service
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
