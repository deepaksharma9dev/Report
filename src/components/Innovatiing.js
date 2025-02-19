import React, { useEffect, useRef, useState } from "react";
import ElasticCarousel from "react-elastic-carousel";
import { CarrrouselArraows } from "../Data/CarrrouselArraows";
import { Para } from "../Data/Para";

// import Item from "./Item";
// import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 }
];

export const Innovatiing = () => {

  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [currentclass, setcurrentclass] = useState("carousel-wrapper_innovate_other");

  const handleOnChange = (currentItem, pageIndex) => {
    setCurrentPageIndex(pageIndex);
  };
  // const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  // const addItem = () => {
  //   const nextItem = Math.max(1, items.length + 1);
  //   setItems([...items, nextItem]);
  // };

  const carouselRef = useRef(null);
  // const removeItem = () => {
  //   const endRange = Math.max(0, items.length - 1);
  //   setItems(items.slice(0, endRange));
  // };
  const jumpto = () => {
    carouselRef.current.goTo(0);
  };

  function handlePrevClick() {
    console.log("Left");
    carouselRef.current.slidePrev();
  }

  function handleNextClick() {
    console.log("right");
    carouselRef.current.slideNext();
  }
  useEffect(() => {
    if (currentPageIndex == 0) {
      setcurrentclass("carousel-wrapper_innovate")
    }
    else if (currentPageIndex == 2 || currentPageIndex == 4 || currentPageIndex == 6) {
      setcurrentclass("carousel-wrapper_innovate_slide3")
    }
    else {
      setcurrentclass("carousel-wrapper_innovate_other")
    }
    console.log(currentPageIndex, currentclass);
  }, [currentPageIndex])


  return (
    <>

      <div className="carousel-wrapper" id="innovate_slide">
        <ElasticCarousel  className={currentclass} breakPoints={breakPoints} ref={carouselRef} onChange={handleOnChange}>
          <div className="Inovate_slide Inovate_slide_1 rec-item d-flex flex-column align-item-start">
            <div className="col-12">
              <div className="row d-flex align-item-center justify-content-center">
                <div className="col-9">
                  <p className="INNOVATE_SLIDE1_heading_text">And innovating in our direct programs and activities with students to remain quality-driven</p>
                </div>
                <div className="col-10 mt-5" >
                  <p className="INNOVATE_SLIDE1_para_text">
                    There’s no point getting aggressive about scale if it adversely impacts the quality <br /> of your direct student engagement. That’s why we’re always keeping students <br />and their changing aspirations first.

                    Last year:
                  </p>
                </div>
              </div>
            </div>

            <CarrrouselArraows className="arrowbuttons" handlenext={handleNextClick} handleprev={handlePrevClick} />

          </div>
          <div className="">
            <div className='d-flex  '>
              <div className='col-12 '>
                <div className='row mt-5  d-flex flex-start'>
                  <div className={currentPageIndex == 1 ? "col-5 " : ""} >
                    <p className={currentPageIndex == 1 ? "col-10 uppercontent-head w3-animate-top" : ""}>Our alumni community became independent!</p>
                  </div>
                  <div className='col-6 '>
                    <p className={currentPageIndex == 1 ? "uppercontent-text w3-animate-top" : ""}>Registered as the Medhavi Association, they represent the spirit of young people pursuing varied interests and charting offbeat career paths with passion.</p>
                  </div>
                </div>


                <div className="row mt-5">
                  <div className="col-12 mt-5">
                    <div className="mt-5 row d-flex justify-content-between">
                      <div className="col-6 mt-5 ">
                        <div className="d-flex mt-5 ">
                          <span className="dot mx-5"></span>
                          <p className={currentPageIndex == 1 ? "innovative_slide2_para_text col-6   w3-animate-top" : ""}>X young community leaders came together on a changemaking journey</p>
                        </div>
                      </div>
                      <div className="col-6 mt-5 ">
                        <div className="d-flex mt-5">
                          <span className="dot mx-5"></span>
                          <p className={currentPageIndex == 1 ? "innovative_slide2_para_text col-6 w3-animate-top" : ""}>Women alumni launched Simmer, a community for all the strong women speaking their truth</p>
                        </div>
                      </div>
                    </div>


                    <div className="mt-5 row d-flex justify-content-between">
                      <div className="col-6 mt-5 ">
                        <div className="d-flex mt-5 ">
                          <span className="dot mx-5"></span>
                          <p className={currentPageIndex == 1 ? "innovative_slide2_para_text col-6   w3-animate-top" : ""}>5 alumni in UP got elected as Alumni Chapter Heads to lead volunteerism efforts in their cities</p>
                        </div>
                      </div>
                      <div className="col-6 mt-5 ">
                        <div className="d-flex mt-5">
                          <span className="dot mx-5"></span>
                          <p className={currentPageIndex == 1 ? "innovative_slide2_para_text col-6 w3-animate-top" : ""}>6000 alumni shared the pandemic’s effect on their career and life</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>



              </div>
            </div>
            <CarrrouselArraows className="arrowbuttons" handlenext={handleNextClick} handleprev={handlePrevClick} />

          </div>
          <div className={currentPageIndex == 2 ? "innovative_slide3 rec-item" : "rec-item"}>
            <div className={currentPageIndex === 2 ? "typed-out" : ""}>

              <Para index={currentPageIndex == 2 ? "cursor" : ""} subject="The Chapter Head election was a great learning space where I experimented with all my skills — communicating to get votes, using my problem-solving and critical thinking abilities to make a phenomenal campaign, and leading a successful chapter in Gorakhpur after winning the election.I have a keen interest in community mobilization. I want to focus on my Chapter head position, do well for my community, and finish my graduation well.”" />
            </div>

            <CarrrouselArraows className="arrowbuttons" handlenext={handleNextClick} handleprev={handlePrevClick} />





          </div>
          <div>4


          <CarrrouselArraows className="arrowbuttons" handlenext={handleNextClick} handleprev={handlePrevClick} />

          </div>
          <div className={currentPageIndex == 4 ? "innovative_slide3 " : ""}>
            <div className={currentPageIndex === 4 ? "typed-out" : ""}>

              <Para className="cursor1" index={currentPageIndex === 4 ? "cursor1" : ""} subject="I am a first-year MA Home Science student. Since I was 16, I knew my calling was photography. My father is a wedding photographer, and I always saw him lugging the camera around daily for work. He sometimes clicked our photos, too: precious moments captured as memories for a lifetime. I wanted to do something as remarkable as him.
His questions were genuine when I told him I was passionate about photography as a career. They arose from his struggles, society's point of view, my safety, and the reality of my ambition." />
            </div>
            <CarrrouselArraows className="arrowbuttons" handlenext={handleNextClick} handleprev={handlePrevClick} />

          </div>
          <div>6

          <CarrrouselArraows className="arrowbuttons" handlenext={handleNextClick} handleprev={handlePrevClick} />

          </div>

          <div className={currentPageIndex == 6 ? "innovative_slide3 " : ""}>
            <div className={currentPageIndex === 6 ? "typed-out" : ""}>

              <Para className="cursor2" index={currentPageIndex === 6 ? "cursor2" : ""} subject="Having spent just 6 months at Medha, the conclave was a learning experience for me. I met several people from different positions, understood our vision to scale with quality, and felt a wave of new energy and thinking. Sessions on habit-building and mindfulness also helped me pause and improve my sense of well-being. 

On top of all that, getting the 'Students' Choice' award was a memorable moment. It shot up my enthusiasm and dedication to work!”" />
            </div>
            <CarrrouselArraows className="arrowbuttons" handlenext={handleNextClick} handleprev={handlePrevClick} />

          </div>







          {/* <div>
            <button className="rec-arrow rec-arrow-left" onClick={handlePrevClick}>L</button>
            <button className="rec-arrow rec-arrow-right" onClick={handleNextClick}>R</button>
          </div> */}
        </ElasticCarousel>

      </div>
    </>
  );
}



