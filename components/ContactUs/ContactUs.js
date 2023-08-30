"use client";
import "components/ContactUs/ContactUsStyles.css";

export const ContactUs = () => {
  return (
    <div id="contact-us-section">
      <div className="contact-us-information-wrapper">
        <div>
          <div className="left">
            <div className="information">
              <p className="contact-me-pitch">
                Need a NYC, Boston, or remote fullstack software engineer?
              </p>
              <p className="contact-me-pitch">
                Let&apos;s build something together.
              </p>
              <a href="mailto:pwkn95@gmail.com" className="email">
                pwkn95@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="right">
          <ul>
            <li className="contact-us-links">
              <a href="https://github.com/pwknam" target="_blank">
                GitHub
              </a>
            </li>
            <li className="contact-us-links">
              <a href="https://www.linkedin.com/in/pwknam/" target="_blank">
                LinkedIn
              </a>
            </li>
            <li className="contact-us-links">
              <a href="https://www.pwknam.com/" target="_blank">
                UX Design Portfolio
              </a>
            </li>
            <li className="contact-us-links">
              <a
                href="https://drive.google.com/file/d/1Mi7cKCtmDdC86TR8brYF36qrF6lyXQOi/view?usp=sharing"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p> &copy; Copyright - 2023</p>
        <p className="copyright-name">Phillip Wesley Kyushik Nam - PWKN</p>
      </div>
    </div>
  );
};
