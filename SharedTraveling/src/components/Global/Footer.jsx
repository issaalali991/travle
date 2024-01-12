import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-dark text-light text-white">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
              <ul className="list-inline mb-2 flex flex-wrap justify-between ">
                <li className="list-inline-item  font-serif font-semibold">
                  <h3 className="mb-4 ">Legal</h3>
                  <h3 className="mb-4">Legal Notices</h3>
                  <h3>Disclaimer</h3>
                </li>
                <li className="list-inline-item">
                  <h3 className="mb-4 font-bold">Follow us</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    <div className="flex gap-4">
                      <SocialIcon url="www.youtube.com" />
                      <SocialIcon url="www.facebook.com" />
                      <SocialIcon url="www.instagram.com" />
                      <SocialIcon url="www.twitter.com" />
                    </div>
                  </div>
                </li>
                <li className="list-inline-item font-serif font-semibold">
                  <h3 className="mb-4">Contact</h3>
                  <h3 className="mb-4">+491234567</h3>
                  <h3>info@sharedtraveling.com</h3>
                </li>
              </ul>
              <div
                className="flex justify-center mt-4
              "
              >
                <p>&copy; Website 2024. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
