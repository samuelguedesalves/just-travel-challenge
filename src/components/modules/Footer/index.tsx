import Image from "next/image";
import { constants } from "../../../constants/footer";
import { FooterContainer } from "./styles";

const { footerDetails, copyright } = constants;

export function Footer() {
  return (
    <FooterContainer>
      <section className="footer-details">
        <div className="content">
          <div className="left-content">
            <Image
              src={footerDetails.logo.url}
              alt={footerDetails.logo.alt}
              width={footerDetails.logo.width}
              height={footerDetails.logo.height}
            />
            <p className="short-description-about">
              {footerDetails.shortDescriptionAbount}
            </p>
            <div className="social-networks-links">
              {footerDetails.socialNetworks.map((socialNetwork, index) => (
                <a href={socialNetwork.link} key={index}>
                  <Image
                    src={socialNetwork.figure.url}
                    alt={socialNetwork.figure.alt}
                    width={socialNetwork.figure.width}
                    height={socialNetwork.figure.height}
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="right-content">
            <nav className="footer-navbar">
              {footerDetails.navigationColumns.map((section, index) => (
                <div className="navigation-column" key={index}>
                  <span className="navigation-column-title">
                    {section.title}
                  </span>

                  {section.links.map((link, linkIndex) => (
                    <a
                      className="navigation-column-link"
                      href={link.url}
                      key={linkIndex}
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <section className="footer-copyright">
        <div className="content">
          <span className="copyright-details">{copyright.details}</span>

          <div className="madein-details">
            <span>{copyright.madein.text}</span>
            <Image
              src={copyright.madein.figure.url}
              alt={copyright.madein.figure.alt}
              width={copyright.madein.figure.width}
              height={copyright.madein.figure.height}
            />
          </div>
        </div>
      </section>
    </FooterContainer>
  );
}
