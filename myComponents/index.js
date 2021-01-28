const getBaseURL = () => {
	return new URL('.', import.meta.url);
};


class MyLogo extends HTMLElement {
  html = `
      <div id="logo" class="">mon logo</div>
      <br><br><br>
      <input type="color" id="colorSelect">
    `;
  style = `
    #logo {
        font-size:300px;
        color:yellow;
        display:inline-block;
        text-shadow: 0 1px 0 #ccc,
                     0 2px 0 #c9c9c9,
                     0 3px 0 #bbb,
                     0 4px 0 #b9b9b9,
                     0 5px 0 #aaa,
                     0 6px 1px rgba(0,0,0,.1),
                     0 0 5px rgba(0,0,0,.1),
                     0 1px 3px rgba(0,0,0,.3),
                     0 3px 5px rgba(0,0,0,.2),
                     0 5px 10px rgba(0,0,0,.25),
                     0 10px 10px rgba(0,0,0,.2),
                     0 20px 20px rgba(0,0,0,.15);
      }   
      .jello-horizontal {
                animation: jello-horizontal 0.9s infinite both;
      }

      @keyframes jello-horizontal {
        0% {
                  transform: scale3d(1, 1, 1);
        }
        30% {
                  transform: scale3d(1.25, 0.75, 1);
        }
        40% {
                  transform: scale3d(0.75, 1.25, 1);
        }
        50% {
                  transform: scale3d(1.15, 0.85, 1);
        }
        65% {
                  transform: scale3d(0.95, 1.05, 1);
        }
        75% {
                  transform: scale3d(1.05, 0.95, 1);
        }
        100% {
                  transform: scale3d(1, 1, 1);
        }
      }
      
      .heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite both;
      } 
      /* ----------------------------------------------
      * Generated by Animista on 2020-12-14 10:19:54
      * Licensed under FreeBSD License.
      * See http://animista.net/license for more info. 
      * w: http://animista.net, t: @cssanimista
      * ---------------------------------------------- */
     
     /**
      * ----------------------------------------
      * animation heartbeat
      * ----------------------------------------
      */
     @keyframes heartbeat {
       from {
                 transform: scale(1);
                 transform-origin: center center;
                 animation-timing-function: ease-out;
       }
       10% {
                 transform: scale(0.91);
                 animation-timing-function: ease-in;
       }
       17% {
                 transform: scale(0.98);
                 animation-timing-function: ease-out;
       }
       33% {
                 transform: scale(0.87);
                 animation-timing-function: ease-in;
       }
       45% {
                 transform: scale(1);
                 animation-timing-function: ease-out;
       }
     }
     
    `;
  constructor() {
    super();
    this.attachShadow({
      mode: "open"
    });
    this.couleur = this.getAttribute("couleur");
    this.text = this.getAttribute("text");
    this.animationClass = this.getAttribute("animation");
  }

  fixRelativeURLs() {
    let images = this.shadowRoot.querySelectorAll('img');
    images.forEach((e) => {
      let imagePath = e.getAttribute('src');
	    e.src = getBaseURL() + '/' + imagePath;
    });
    this.myLogo.style.background = "url(" + getBaseURL() + "images/miaou.gif)";
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `<style>${this.style}</style>` + this.html;
    this.myLogo = this.shadowRoot.querySelector("#logo");
    this.fixRelativeURLs();
    this.myLogo.addEventListener("click", () => {
      console.log("Logo clické");
    });
    this.myLogo.style.color = this.couleur;
    this.myLogo.textContent = this.text;
    if(this.animationClass)
      this.myLogo.classList.add(this.animationClass);
    this.shadowRoot
      .querySelector("#colorSelect")
      .addEventListener("input", (event) => {
        this.myLogo.style.color = event.target.value;
      });
  }
  changeColor(newColor){
    this.myLogo.style.color = newColor;
  }
  changeText(newText) {
    this.myLogo.textContent = newText;
  }
  changeImg(img){
    this.myLogo.style.background = "url(" + getBaseURL() + "images/" + img +")";
  }
  nyan(){
    html = `
      <div id="logo" class="">mon logo</div>
      <br><br><br>
      <input type="color" id="colorSelect">
      <audio
        autoplay
        controls
        src="/audio/nyan.mp3">
            Your browser does not support the
            <code>audio</code> element.
      </audio>
    `;
  }
}

customElements.define("my-logo", MyLogo);