import React, { Component } from "react";
import Slider from "react-slick";
import "./Suggestion.css";

class Suggestion extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <div className="Suggestion">
        <h2 className="suggestion-title">Meal suggestion for this week</h2>
        <p>- Click the image to check out the recipes!</p>
        <Slider
          className="Slider"
          ref={slider => (this.slider = slider)}
          {...settings}
        >
          <div>
            <a className="meal-one" href="">
              <img src="images/meal1.jpeg" alt="meal-one" />
            </a>
          </div>
          <div>
            <a className="meal-two" href="">
              <img src="images/meal2.jpg" alt="meal-two" />
            </a>
          </div>
          <div>
            <a className="meal-three" href="">
              <img src="images/meal3.jpg" alt="meal-three" />
            </a>
          </div>
          <div>
            <a className="meal-four" href="">
              <img src="images/meal4.jpg" alt="meal-four" />
            </a>
          </div>
          <div>
            <a className="meal-five" href="">
              <img src="images/meal5.jpeg" alt="meal-five" />
            </a>
          </div>
          <div>
            <a className="meal-six" href="">
              <img src="images/meal6.jpg" alt="meal-six" />
            </a>
          </div>
          <div>
            <a className="meal-seven" href="">
              <img src="images/meal7.jpg" alt="meal-seven" />
            </a>
          </div>
          <div>
            <a className="meal-eight" href="">
              <img src="images/meal8.jpg" alt="meal-eight" />
            </a>
          </div>
          <div>
            <a className="meal-nine" href="">
              <img src="images/meal9.jpg" alt="meal-nine" />
            </a>
          </div>
          <div>
            <a className="meal-ten" href="">
              <img src="images/meal10.jpg" alt="meal-ten" />
            </a>
          </div>
          <div>
            <a className="meal-eleven" href="">
              <img src="images/meal11.jpg" alt="meal-eleven" />
            </a>
          </div>
          <div>
            <a className="meal-twelve" href="">
              <img src="images/meal12.jpg" alt="meal-twelve" />
            </a>
          </div>
          <div>
            <a className="meal-thirteen" href="">
              <img src="images/meal13.jpeg" alt="meal-thirteen" />
            </a>
          </div>
          <div>
            <a className="meal-fourteen" href="">
              <img src="images/meal14.jpg" alt="meal-fourteen" />
            </a>
          </div>
          <div>
            <a className="meal-fifteen" href="">
              <img src="images/meal15.jpg" alt="meal-fifteen" />
            </a>
          </div>
          <div>
            <a className="meal-sixteen" href="">
              <img src="images/meal16.jpg" alt="meal-sixteen" />
            </a>
          </div>
        </Slider>
        <div style={{ textAlign: "center" }}>
          <button className="button" onClick={this.play}>
            Play
          </button>
          <button className="button" onClick={this.pause}>
            Pause
          </button>
        </div>
      </div>
    );
  }
}

export default Suggestion;
