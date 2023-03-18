import "../scss/comps/Navbar.scss";

export default function Navbar() {
  const links = [
    {
      name: "HOME",
      link: "https://www.google.com",
    },
    {
      name: "BLOG",
      link: "https://www.google.com",
    },
    {
      name: "CONTACT",
      link: "https://www.google.com",
    },
    {
      name: "HELP",
      link: "https://www.google.com",
    },
  ];

  const RenderLinks = ({ start, end }: { start: number; end: number }): any => {
    return links.slice(start, end).map((link, i) => {
      return (
        <li key={i}>
          <a href={link.link}>{link.name}</a>
        </li>
      );
    });
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <input type="checkbox" id="menu-toggle" className="hidden" />
        <label className="hamburger" htmlFor="menu-toggle">
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </label>
        <ul className="left">
          <RenderLinks start={0} end={2} />
        </ul>
        <img
          src="https://media.discordapp.net/attachments/1023739011480686604/1079289884931530822/PlayCrateLogo.png"
          alt="logo"
          className="official-logo"
        />
        <ul className="right">
          <RenderLinks start={2} end={4} />
        </ul>

        <div className="mobile-nav">
          <RenderLinks start={0} end={4} />

          <div className="socials">
            <li className="discord">
              <a href="https://www.google.com">
                <img
                  src="https://media.discordapp.net/attachments/1023739011480686604/1079289884931530822/PlayCrateLogo.png"
                  alt="logo"
                />
              </a>
            </li>
            <li className="twitter">
              <a href="https://www.google.com">
                <img
                  src="https://media.discordapp.net/attachments/1023739011480686604/1079289884931530822/PlayCrateLogo.png"
                  alt="logo"
                />
              </a>
            </li>
            <li className="roblox">
              <a href="https://www.google.com">
                <img
                  src="https://media.discordapp.net/attachments/1023739011480686604/1079289884931530822/PlayCrateLogo.png"
                  alt="logo"
                />
              </a>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
}
