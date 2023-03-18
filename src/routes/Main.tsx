import "../scss/routes/main.scss";

export default function Main() {
  function scrollDown() {
    const el = document.querySelector(".updates");
    el?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="App">
      <div className="top-info">
        <div className="play-crate-info">
          <div className="brand">
            <span className="brand-text-1">Play</span>
            <span className="brand-text-2">Crate</span>
          </div>

          <p className="main-subtitle">
            Play Crate is a Company that creates fun Roblox games for users.
          </p>
        </div>

        <div className="middle-info">
          <div className="middle-title">
            <span className="middle-1">What are you</span>
            <span className="middle-2">waiting</span>
            <span className="middle-3">for?</span>
          </div>

          <div className="middle-waiting" onClick={scrollDown}>
            <p>Get Started!</p>
          </div>
        </div>
      </div>

      <div className="updates">
        <img
          src="https://tr.rbxcdn.com/3a0df5217c08ed2a64193625d3b7ba6b/150/150/Image/Png"
          alt="React Logo"
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
    </div>
  );
}
