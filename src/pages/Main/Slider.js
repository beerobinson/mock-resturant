let slides = [
  {
    background: "https://picsum.photos/800/500?image=563",
    text: "Road"
  },
  {
    background: "https://unsplash.it/800/500?image=580",
    text: "America"
  },
  {
    background: "https://unsplash.it/800/500?image=824",
    text: "Pieapple"
  }
];

class Slide extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let slideStyle = { backgroundImage: `url( ${this.props.background})` };
    return (
        <div
          className="slider__slide"
          data-active={this.props.active}
          style={slideStyle}
        >
          <div className="slider__slide__text">{this.props.text}</div>
        </div>
    );
  }
}

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      activeSlide: 0,
      interval: 3,
      autoplay: true
    };
  }
  
  componentDidMount() {
		this.timerId = setInterval(() => {
      console.log(this.state.autoplay);
      if ( this.state.autoplay ) {
        this.nextSlide();
      }
    },this.state.interval * 1000);
	}
  
  componentWillUnmount() {
		clearInterval( this.timerId );
	}
  
  pause() {
    this.setState({ autoplay: false });
  }
  
  resume() {
    this.setState({ autoplay: true });
  }

  prevSlide() {
    let slide = this.state.activeSlide - 1 < 0
      ? slides.length - 1
      : this.state.activeSlide - 1;
    this.setState({
      activeSlide: slide
    });
  }
  
  nextSlide() {
    let slide = this.state.activeSlide + 1 < slides.length
      ? this.state.activeSlide + 1
      : 0;
    this.setState({
      activeSlide: slide
    });
  }
  
  render() {
    var slides = this.props.slides;
    return (
      <div onMouseEnter={this.pause.bind(this)} onMouseLeave={this.resume.bind(this)}>
          {slides.map((slide, index) => {
            return (
              <Slide
                background={slide.background}
                text={slide.text}
                active={index === this.state.activeSlide}
              />
            );
          })}
        <div className="rightArrow" onClick={this.nextSlide.bind(this)}><i className="fa fa-4x fa-arrow-circle-right"></i></div>
        <div className="leftArrow" onClick={this.prevSlide.bind(this)}> <i className="fa fa-4x fa-arrow-circle-left"></i></div>
      </div>
    );
  }
}

ReactDOM.render(<Slider slides={slides} />, document.getElementById("slide"));