const config = document.querySelector(".configurations");

config.addEventListener("click", (event) => {
  const panel = config.querySelector(".configurationPanel");

  if (panel) {
    if (!panel.contains(event.target)) {
      panel.remove();
      document.querySelector(".container").style = `filter: blur(0px);`;
      botRel.style = `filter: blur(0);`;
      document.querySelector(".stars").style = `filter: blur(0em);`;
    }
  } else {
    const cajouConf = document.createElement("div");
    cajouConf.classList = "configurationPanel";

    cajouConf.innerHTML = `
      <div class="configurationPanel">
        <h1>configuracion</h1>
        <p>Beta 2.1</p>
        <div class="fuctionsCOnfi">
          <div class="onecu">
              <span class="textShwich">Keys alternative</span>
              <label class="switch">
              <input type="checkbox" onclick="keysAlternative()">
              <span class="slider"></span>
            </label>
          </div>
          <div class="twocu" id="Starver">
            <span class="textShwich">Star wars Mode</span>
              <label class="switch">
              <input type="checkbox" onclick="starsWarsMode()">
              <span class="slider"></span>
            </label>
          </div>
        </div>
      </div>
    `;
    config.appendChild(cajouConf);
    document.querySelector(".container").style = `filter: blur(2em);`;
    botRel.style = `filter: blur(2em);`;
    document.querySelector(".stars").style = `filter: blur(50em);`;

    cajouConf.addEventListener("click", (stop) => {
      stop.stopPropagation();
    });
  }
});

function starsWarsMode() {
  console.log("activated config");

  const imageUrl = "media/FOLERS/pxfuel.jpg";
  const body = document.body;

  body.style.backgroundImage = "url('" + imageUrl + "')";

  const enem = document.querySelector(".enemy");
  const EnimA = "media/pngwing.com.png";
  enem.style.backgroundImage = "url('" + EnimA + "')";

  const caseS = document.querySelector(".mOSTtuT");
  caseS.style.backgroundColor = "#828282";
}

function keysAlternative(){

  console.log("alterntive");
  const caseA = document.querySelector(".tutKeys")
  Url = "media/flechas.png"
  caseA.style.backgroundImage = "url('" + Url + "')"


  


}