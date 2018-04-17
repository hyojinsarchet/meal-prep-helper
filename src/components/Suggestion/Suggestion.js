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
