import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";

// core components

const items = [
  {
    src: "https://carbon-media.accelerator.net/0000000j9py/ckMkvZ7pNbncg8yeoiJNyi;2048x1536.png",
    altText: "The Last of US Part II sketch- Joe",
    caption: "The Last of US Part II- Joe"
  }, 
  {
    src: "https://carbon-media.accelerator.net/0000000j9py/73EFRjBj1WqcoLVIWNhXhy;1920x1440.jpeg",
    altText: "The Last of US Part II sketch- Joe & Ellie",
    caption: "The Last of US Part II- Joe & Ellie"
  },
  {
    src: "https://carbon-media.accelerator.net/0000000j9py/btUIexKXhePdrxEy73LHoJ;2048x1536.jpeg",
    altText: "Spider-man sketch",
    caption: "Spider-man"
  },
  {
    src: "https://carbonmade-media.accelerator.net/37544254;2048x1536.png",
    altText: "Arkham Knight sketch",
    caption: "Arkham Knight"
  },
  {
    src: "https://carbon-media.accelerator.net/0000000j9py/bHQneDmwMBedEE9VVdywh3;2048x1536.png",
    altText: "God of War sketch",
    caption: "God of War"
  },
  {
    src: "https://carbonmade-media.accelerator.net/37544275;2048x1536.png",
    altText: "The Greatest Showman sketch",
    caption: "The Greatest Showman"
  },
  {
    src: "https://carbonmade-media.accelerator.net/36048055;2048x1536.png",
    altText: "Assassin's Creed Rogue sketch",
    caption: "Assassin's Creed: Rogue"
  },
  {
    src: "https://carbonmade-media.accelerator.net/35681756;2881x2160.png",
    altText: "Dishonored 2 sketch",
    caption: "Dishonored 2"
  },
  {
    src: "https://carbonmade-media.accelerator.net/35681753;1280x960.jpeg",
    altText: "Assassin's Creed Black Flag sketch",
    caption: "Assassin's Creed: Black Flag"
  },
  {
    src: "https://carbonmade-media.accelerator.net/35681752;1024x768.jpeg",
    altText: "Watchdogs 2 sketch",
    caption: "Watchdogs 2"
  },
];

function CarouselSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section section-tabs" id="artwork">
        <Container>
          <h2 className="title">Digital Art</h2>
          <Row className="justify-content-center">
            <Col lg="8" md="12">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map(item => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
                      <img src={item.src} alt={item.altText} />
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-left text-black"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-right text-black"></i>
                </a>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CarouselSection;
