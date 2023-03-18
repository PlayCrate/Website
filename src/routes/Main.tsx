import "../scss/routes/main.scss";

export default function Main() {
  function scrollDown() {
    const el = document.querySelector(".our-games");
    el?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="App">
      <div className="middle-info">
        <div className="intro">
          <p className="intro-subtitle">
            Playcrate is a game development studio that creates games for
            Roblox.
          </p>
        </div>

        <div className="middle">
          <div className="middle-text">
            <span className="middle-1">What are you</span>
            <span className="middle-2">waiting</span>
            <span className="middle-3">for?</span>
          </div>

          <div className="middle-waiting" onClick={scrollDown}>
            <p>Get Started!</p>
          </div>
        </div>
      </div>

      <div className="bottom">
        <p className="bottom-title">PlayCrate's Statistics</p>

        <div className="bottom-stats">
          <div className="playing">
            <h2>5,000+</h2>
            <p>peak concurrent players</p>
          </div>

          <div className="visits">
            <h2>10,000,000+</h2>
            <p>total visits</p>
          </div>

          <div className="fans">
            <h2>500,000+</h2>
            <p>group members</p>
          </div>
        </div>
      </div>

      <div className="our-games">
        <p className="our-games-title">Visit Our Games!</p>

        <div className="our-games-list">
          <img
            src="https://tr.rbxcdn.com/b32eca2a43876ff53aaa803c80c1739f/768/432/Image/Png"
            alt="Playcrate Logo"
            className="our-games-logo"
          />

          <p>Bubble Gum Clicker!</p>
        </div>

        <div className="play-button">
          <a href="https://www.roblox.com/games/6240000000/Bubble-Gum-Clicker">
            Play on Roblox!
          </a>
        </div>
      </div>

      <div className="updates">
        <img
          src="https://tr.rbxcdn.com/3a0df5217c08ed2a64193625d3b7ba6b/150/150/Image/Png"
          alt="Playcrate Logo"
          className="new-update-logo"
        />

        <div className="updates-info">
          <p className="updates-title">New Updates</p>

          <header>
            <h2 className="updates-subtitle">
              Bubble Gum Clicker - St.Patrick's Day Update!
            </h2>

            <p className="updates-lowertitle">
              Top o' the mornin' to ya! St. Patrick’s is here with a new world,
              currency, pets, egg, and events!
            </p>
          </header>

          <div className="Round-Button">
            <a href="https://www.roblox.com/games/6240000000/Bubble-Gum-Clicker">
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-info">
          <p className="footer-title">PlayCrate</p>
          <p className="copyright">
            © 2023 PlayCrate LLC. All rights reserved.
          </p>
        </div>

        <div className="footer-links">
          <p className="footer-links-title">Links</p>

          <div className="footer-links-list">
            <a href="https://www.roblox.com/groups/6240000/PlayCrate#!/about">
              Roblox
            </a>
            <a href="https://www.youtube.com/channel/UC4ZQZ1Z1Z1Z1Z1Z1Z1Z1Z1Z1">
              Twitter
            </a>
            <a href="https://www.youtube.com/channel/UC4ZQZ1Z1Z1Z1Z1Z1Z1Z1Z1Z1">
              Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
