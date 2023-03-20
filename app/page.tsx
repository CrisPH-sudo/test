import { GiPalmTree } from "react-icons/gi";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="pt-2 px-4 w-64">
            <img src="img/vercel.svg" alt="" />
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="/pricing" className="hover:text-gray-500">
              Pricing
            </a>
            <a href="/product" className="hover:text-gray-500">
              Product
            </a>
            <a href="#" className="hover:text-gray-500">
              About Us
            </a>
            <a href="#" className="hover:text-gray-500">
              Careers
            </a>
            <a href="#" className="hover:text-gray-500">
              Community
            </a>
          </div>

          {/* button */}
          <a
            href="#"
            className="hidden md:block p-3 px-6 pt-2 text-white bg-red-500 rounded-full baseline hover:bg-blue-500"
          >
            Get Started
          </a>
          {/* hamburger icon */}

          <button
            id="menu-btn"
            className="block hamburger md:hidden focus:outline-none"
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        {/* !-- Mobile Menu --> */}
        <div className="md:hidden">
          <div
            id="menu"
            className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <a href="#">Pricing</a>
            <a href="#">Product</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Solutions</a>
          </div>
        </div>
      </nav>

      <section id="hero">
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-by-0 md:space-y-0">
          {/* left item */}
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
              Bring Everyone Together to build better Products
            </h1>

            <p className="max-w-sm text-center text-gray-500 md:text-left">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>

            <div className="flex justify-center md:justify-start">
              <a
                href=""
                className="p-3 px-6 pt-2 text-white bg-red-500 rounded-full baseline hover:bg-blue-500"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <img
              className=" w-96 rounded-full"
              src="https://media4.giphy.com/media/qgQUggAC3Pfv687qPC/200.webp?cid=ecf05e47q7nwy427919p1g06dxhkod85a5v2ctwznfouruqk&rid=200.webp&ct=g"
              alt="illustration"
            />
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section id="features">
        {/* Flex container */}
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
          <div className="flex-col space-y-12 md:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
              What's Diffrent about Manage?
            </h2>

            <p className="max-w-sm text-center text-dark-500 md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              What's Different About Manage?
            </p>
          </div>
          {/* Numbered List */}
          <div className="flex flex-col space-y-8 md:w-1/2">
            {/* List Item no.1 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* Heading */}
              <div className="rounded-full bg-red-200 md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-red-500">
                    01
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Track company-wide progress
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Track company-wide progress
                </h3>
                <p className="text-dark-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
            {/* List Item no.2 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* Heading */}
              <div className="rounded-full bg-red-200 md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-red-500">
                    02
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Advanced Built-in Reports
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Everything you need in one place
                </h3>
                <p className="text-dark-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
            {/* List Item no.3 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* Heading */}
              <div className="rounded-full bg-red-200 md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-red-500">
                    03
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Track company-wide progress
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Track company-wide progress
                </h3>
                <p className="text-dark-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}

      <section id="testimonials">
        {/* Container for the Heading and testimonial box */}
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
          {/* Heading  */}
          <h2 className=" text-4xl font-bold text-center">
            What's Different About Manage?
          </h2>
          {/* Testiomonials Container */}
          <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
            {/* Testiomonial 1 */}
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 md:w-1/3">
              <img src="img/avatar-anisha.png" className="w-16 -mt-14" alt="" />
              <h5 className="text-lg font-bold">Anisha Li</h5>
              <p className=" text-sm text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            {/* Testiomonial 2 */}
            <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 md:flex md:w-1/3">
              <img
                src="img/avatar-richard.png"
                className="w-16 -mt-14"
                alt=""
              />
              <h5 className="text-lg font-bold">Kyle Vincent</h5>
              <p className=" text-sm text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            {/* Testiomonial 3 */}
            <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 md:flex md:w-1/3">
              <img src="img/avatar-ali.png" className="w-16 -mt-14" alt="" />
              <h5 className="text-lg font-bold">Ali Jakul</h5>
              <p className=" text-sm text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          {/* Button */}
          <div className="my-16">
            {/* button */}
            <a
              href=""
              className="p-3 px-6 pt-2 text-white bg-red-500 rounded-full baseline hover:bg-blue-500"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
      {/* CTA Section */}

      <section className="bg-red-700" id="cta">
        {/* flex container */}
        <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:flex-row md:space-y-0">
          {/* Heading */}
          <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
            Simplify how your team works
          </h2>

          <div>
            {/* button */}
            <a
              href="#"
              className="p-3 px-6 pt-2 text-black font-bold bg-white rounded-full shadow-2xl baseline hover:bg-blue-500"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      <footer className=" bg-black">
        {/* <!-- Flex Container --> */}
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          {/* <!-- Logo and social links container --> */}
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div className="mx-auto my-6 text-center text-white md:hidden">
              Copyright &copy; 2022, All Rights Reserved
            </div>
            {/* <!-- Logo --> */}
            <div>
              <h1 className=" text-4xl text-white">
                {" "}
                Follow us on Social Media
              </h1>
              {/* <img src="img/logo-white.svg" className="h-" alt="" /> */}
            </div>
            {/* <!-- Social Links Container --> */}
            <div className="flex justify-center space-x-4">
              {/* <!-- Link 1 --> */}
              <a href="xhttps://www.facebook.com/">
                <img src="img/icon-facebook.svg" alt="" className="h-8" />
              </a>
              {/* <!-- Link 2 --> */}
              <a href="#">
                <img src="img/icon-youtube.svg" alt="" className="h-8" />
              </a>
              {/* <!-- Link 3 --> */}
              <a href="#">
                <img src="img/icon-twitter.svg" alt="" className="h-8" />
              </a>
              {/* <!-- Link 4 --> */}
              <a href="#">
                <img src="img/icon-pinterest.svg" alt="" className="h-8" />
              </a>
              {/* <!-- Link 5 --> */}
              <a href="#">
                <img src="img/icon-instagram.svg" alt="" className="h-8" />
              </a>
            </div>
          </div>
          {/* <!-- List Container --> */}
          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-brightRed">
                Home
              </a>
              <a href="/pricing" className="hover:text-brightRed">
                Pricing
              </a>
              <a href="/product" className="hover:text-brightRed">
                Products
              </a>
              <a href="#" className="hover:text-brightRed">
                About
              </a>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-brightRed">
                Careers
              </a>
              <a href="#" className="hover:text-brightRed">
                Community
              </a>
              <a href="#" className="hover:text-brightRed">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* <!-- Input Container --> */}
          <div className="flex flex-col justify-between">
            <form>
              <div className="flex space-x-3">
                <input
                  type="text"
                  className="flex-1 px-4 rounded-full focus:outline-none"
                  placeholder="Updated in your inbox"
                />
                <button className="px-6 py-2 text-white rounded-full bg-red-500 hover:bg-blue-500 focus:outline-none">
                  Go
                </button>
              </div>
            </form>
            <div className="hidden text-white md:block">
              Copyright &copy; {currentYear}, All Rights Reserved<br></br>
              Developed by: Cris Reyes
            </div>
          </div>
        </div>
      </footer>
      <script src="js/script.js"></script>
    </div>
  );
}

// https://www.youtube.com/watch?v=dFgzHOX84xQ
