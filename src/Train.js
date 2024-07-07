//Interactive Process: The interactive process shown on this page is absorb information & divergent/convergent exploration (through faceted search)
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import littleLeagueImage from './images/little-league.jpg';
import houseLeagueImage from './images/house-league.jpg';
import representativeLeagueImage from './images/representative-league.jpg';

import soccerLessonImage from './images/soccer-lesson.webp';
import swimmingLessonImage from './images/swimming-lesson.jpg';
import basketballLessonImage from './images/basketball-lesson.jpg';
import golfLessonImage from './images/golf-lesson.jpg';
import rockclimbingLessonImage from './images/rockclimbing-lesson.jpg';
import tennisLessonImage from './images/tennis-lesson.jpg';

import soccerCoachImage from './images/soccer-coach.jpg';
import swimmingCoachImage from './images/swimming-coach.jpg';
import basketballCoachImage from './images/basketball-coach.jpg';
import golfCoachImage from './images/golf-coach.webp';
import rockclimbingCoachImage from './images/rockclimbing-coach.webp';
import tennisCoachImage from './images/tennis-coach.webp';

import soccerFieldIndoorImage from './images/soccer-field-indoor.jpg';
import soccerFieldOutdoorImage from './images/soccer-field-outdoor.avif';
import basketballCourtIndoorImage from './images/basketball-court-indoor.webp';
import basketballCourtOutdoorImage from './images/basketball-court-outdoor.png';
import tennisCourtIndoorImage from './images/tennis-indoor-court.webp';
import tennisCourtOutdoorImage from './images/tennis-outdoor-court.jpg';

import searchIcon from './images/search-icon.png';

function Train() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Refine Search
    </Tooltip>
  );

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const [checkboxStates, setCheckboxStates] = useState({
    littleLeague: true,
    houseLeague: true,
    representativeLeague: true,
    soccerLesson: true,
    swimmingLesson: true,
    basketballLesson: true,
    golfLesson: true,
    rockclimbingLesson: true,
    tennisLesson: true,
    soccerCoach: true,
    swimmingCoach: true,
    basketballCoach: true,
    golfCoach: true,
    rockclimbingCoach: true,
    tennisCoach: true,
    indoorPlayArea: true,
    outdoorPlayArea: true,
    cheapestPrice: true,
    averagePrice: true,
    highestPrice: true,
  });


  const handleToggleAll = (keys) => {
    const allChecked = keys.every(key => checkboxStates[key]);
    const newStates = {};
    keys.forEach(key => {
      newStates[key] = !allChecked;
    });
    setCheckboxStates(prevStates => ({
      ...prevStates,
      ...newStates
    }));
  };

  const handleToggleAllLeagues = () => {
    handleToggleAll(['littleLeague', 'houseLeague', 'representativeLeague']);
  };

  const handleToggleAllLessons = () => {
    handleToggleAll(['soccerLesson', 'swimmingLesson', 'basketballLesson', 'golfLesson', 'rockclimbingLesson', 'tennisLesson']);
  };

  const handleToggleAllCoaches = () => {
    handleToggleAll(['soccerCoach', 'swimmingCoach', 'basketballCoach', 'golfCoach', 'rockclimbingCoach', 'tennisCoach']);
  };

  const handleToggleAllFieldsAndCourts = () => {
    handleToggleAll(['indoorPlayArea', 'outdoorPlayArea']);
  };

  const handleToggleAllPrices = () => {
    handleToggleAll(['cheapestPrice', 'averagePrice', 'highestPrice']);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxStates(prevStates => ({
      ...prevStates,
      [name]: checked,
    }));
  };

  return (
    <div className="train-page">

      <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
        <img className="toggle-search-menu" src = {searchIcon} onClick={toggleSidebar} />
      </OverlayTrigger>

      {isSidebarVisible && (
        <div className="sidebar">
          <div>
            <h3 className="sidebar-titles"><span className="search-filter-underline" onClick={handleToggleAllLeagues}>Leagues</span></h3>
            <div>
              <label className="faceted-search-label" htmlFor="littleLeague"> ↪ Little League </label>
              <input className="faceted-search-checkbox" type="checkbox" id="littleLeague" name="littleLeague" value="Little League" checked={checkboxStates.littleLeague} onChange={handleCheckboxChange}/>

              <br/>

              <label className="faceted-search-label" htmlFor="houseLeague"> ↪ House League </label>
              <input className="faceted-search-checkbox" type="checkbox" id="houseLeague" name="houseLeague" checked={checkboxStates.houseLeague} onChange={handleCheckboxChange}/> 

              <br/>

              <label className="faceted-search-label" htmlFor="representativeLeague"> ↪ Representative League </label>
              <input className="faceted-search-checkbox" type="checkbox" id="representativeLeague" name="representativeLeague" value="Representative League" checked={checkboxStates.representativeLeague} onChange={handleCheckboxChange}/>
            </div>
          </div>

          <div>
            <h3 className="sidebar-titles"><span className="search-filter-underline" onClick={handleToggleAllLessons}>Lessons</span></h3>
            <div>
              <label className="faceted-search-label" htmlFor="soccerLesson"> ↪ Soccer </label>
              <input className="faceted-search-checkbox" type="checkbox" id="soccerLesson" name="soccerLesson" value="Soccer" checked={checkboxStates.soccerLesson} onChange={handleCheckboxChange}/>
              
              <br/>

              <label className="faceted-search-label" htmlFor="swimmingLesson"> ↪ Swimming </label>
              <input className="faceted-search-checkbox" type="checkbox" id="swimmingLesson" name="swimmingLesson" value="Swimming" checked={checkboxStates.swimmingLesson} onChange={handleCheckboxChange}/>
              
              <br/>

              <label className="faceted-search-label" htmlFor="basketballLesson"> ↪ Basketball </label>
              <input className="faceted-search-checkbox" type="checkbox" id="basketballLesson" name="basketballLesson" value="Basketball" checked={checkboxStates.basketballLesson} onChange={handleCheckboxChange}/>
              
              <br/>

              <label className="faceted-search-label" htmlFor="golfLesson"> ↪ Golf </label>
              <input className="faceted-search-checkbox" type="checkbox" id="golfLesson" name="golfLesson" value="Golf" checked={checkboxStates.golfLesson} onChange={handleCheckboxChange}/>
              
              <br/>

              <label className="faceted-search-label" htmlFor="rockclimbingLesson"> ↪ Rock Climbing </label>
              <input className="faceted-search-checkbox" type="checkbox" id="rockclimbingLesson" name="rockclimbingLesson" value="Rock Climbing" checked={checkboxStates.rockclimbingLesson} onChange={handleCheckboxChange}/>
              
              <br/>

              <label className="faceted-search-label" htmlFor="tennisLesson"> ↪ Tennis </label>
              <input className="faceted-search-checkbox" type="checkbox" id="tennisLesson" name="tennisLesson" value="Tennis" checked={checkboxStates.tennisLesson} onChange={handleCheckboxChange}/>
            </div>
          </div>

          <div>
            <h3 className="sidebar-titles"><span className="search-filter-underline" onClick={handleToggleAllCoaches}>Coaches</span></h3>
            <div>
              <label className="faceted-search-label" htmlFor="soccerCoach"> ↪ Lionel Messi </label>
              <input className="faceted-search-checkbox" type="checkbox" id="soccerCoach" name="soccerCoach" value="Lionel Messi" checked={checkboxStates.soccerCoach} onChange={handleCheckboxChange}/>
              
              <br/>

              <label className="faceted-search-label" htmlFor="swimmingCoach"> ↪ Michael Phelps </label>
              <input className="faceted-search-checkbox" type="checkbox" id="swimmingCoach" name="swimmingCoach" value="Michael Phelps" checked={checkboxStates.swimmingCoach} onChange={handleCheckboxChange}/>
              
              <br/>

              <label className="faceted-search-label" htmlFor="basketballCoach"> ↪ Stephen Curry </label>
              <input className="faceted-search-checkbox" type="checkbox" id="basketballCoach" name="basketballCoach" value="Stephen Curry" checked={checkboxStates.basketballCoach} onChange={handleCheckboxChange}/>
              
              <br/>

              <label className="faceted-search-label" htmlFor="golfCoach"> ↪ Tiger Woods </label>
              <input className="faceted-search-checkbox" type="checkbox" id="golfCoach" name="golfCoach" value="Tiger Woods" checked={checkboxStates.golfCoach} onChange={handleCheckboxChange}/>
              
              <br/>

              <label className="faceted-search-label" htmlFor="rockclimbingCoach"> ↪ Chris Sharma </label>
              <input className="faceted-search-checkbox" type="checkbox" id="rockclimbingCoach" name="rockclimbingCoach" value="Chris Sharma" checked={checkboxStates.rockclimbingCoach} onChange={handleCheckboxChange}/>
              
              <br/>

              <label className="faceted-search-label" htmlFor="tennisCoach"> ↪ Roger Federer </label>
              <input className="faceted-search-checkbox" type="checkbox" id="tennisCoach" name="tennisCoach" value="Roger Federer" checked={checkboxStates.tennisCoach} onChange={handleCheckboxChange}/>
            </div>
          </div>

          <div>
            <h3 className="sidebar-titles"><span className="search-filter-underline" onClick={handleToggleAllFieldsAndCourts}>Fields/Courts</span></h3>
            <div>
              <label className="faceted-search-label" htmlFor="indoorPlayArea"> ↪ Indoor </label>
              <input className="faceted-search-checkbox" type="checkbox" id="indoorPlayArea" name="indoorPlayArea" value="Indoor" checked={checkboxStates.indoorPlayArea} onChange={handleCheckboxChange}/>
              
              <br/>

              <label className="faceted-search-label" htmlFor="outdoorPlayArea"> ↪ Outdoor </label>
              <input className="faceted-search-checkbox" type="checkbox" id="outdoorPlayArea" name="outdoorPlayArea" value="Outdoor" checked={checkboxStates.outdoorPlayArea} onChange={handleCheckboxChange}/>
            </div>
          </div>

          <div>
            <h3 className="sidebar-titles"><span className="search-filter-underline" onClick={handleToggleAllPrices}>Prices</span></h3>
            <div>
              <label className="faceted-search-label" htmlFor="cheapestPrice"> ↪ $0 - $25 </label>
              <input className="faceted-search-checkbox" type="checkbox" id="cheapestPrice" name="cheapestPrice" value="Less Than/Equal To $25" checked={checkboxStates.cheapestPrice} onChange={handleCheckboxChange}/>
              
              <br/>

              <label className="faceted-search-label" htmlFor="averagePrice"> ↪ $25 - $50 </label>
              <input className="faceted-search-checkbox" type="checkbox" id="averagePrice" name="averagePrice" value="Less Than $50" checked={checkboxStates.averagePrice} onChange={handleCheckboxChange}/>
              
              <br/>

              <label className="faceted-search-label" htmlFor="highestPrice"> ↪ $50+ </label>
              <input className="faceted-search-checkbox" type="checkbox" id="highestPrice" name="highestPrice" value="Over/Equal To $50" checked={checkboxStates.highestPrice} onChange={handleCheckboxChange}/>
            </div>
          </div>
        </div>
      )}

      <h1 className="train-page-titles"> <span className="train-page-titles-special">LEAGUES</span> </h1>

      <div className="leagues-content">
        <Container className="cards-container">
          <Row>
            <Col>
            {/* style = {{display: 'none'}} -> apply this styling to the col (above) when user clicks a checkbox in the faceted search - then simply hide the col or show the col */}
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={littleLeagueImage} />
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Little League</span> </Card.Title>
                  <Card.Text className="card-body-text"> The Little League, for ages 6-12, provides a nurturing environment for young athletes. Focused on basic skill development and fun, it introduces children to sports, teamwork, and fair play. This league fosters a lifelong love of the game while ensuring a positive and supportive experience for all participants. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> AGES: 6 YEARS - 12 YEARS </li>
                    <br />
                    <li className="card-list-element"> PRICE: $10.00 TO ENROLL </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={houseLeagueImage} />
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">House League</span> </Card.Title>
                  <Card.Text className="card-body-text"> The House League, for ages 12-18, offers a fun and inclusive environment for players of all skill levels. It promotes sportsmanship and teamwork, providing ample playtime and opportunities to develop skills in a less competitive atmosphere. This league is ideal for staying active and making friends. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> AGES: 12 YEARS - 18 YEARS </li>
                    <br />
                    <li className="card-list-element"> PRICE: $40.00 TO ENROLL </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={representativeLeagueImage} />
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Representative League</span> </Card.Title>
                  <Card.Text className="card-body-text"> The Representative League, for ages 14-18, caters to athletes seeking higher competition and skill advancement. With intensive training, advanced coaching, and regional tournaments, it prepares players for collegiate or professional levels. This league emphasizes performance & strategy. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> AGES: 14 YEARS - 18 YEARS </li>
                    <br />
                    <li className="card-list-element"> PRICE: $70.00 TO ENROLL </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <h1 className="train-page-titles"> <span className="train-page-titles-special">LESSONS</span> </h1>

      <div className="lessons-content">
        <Container className="cards-container">
          <Row>
            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={soccerLessonImage} />
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Soccer</span> </Card.Title>
                  <Card.Text className="card-body-text"> Kick-start your soccer journey with our dynamic training programs designed for enthusiasts of all ages and skill levels. From learning the fundamentals of dribbling and passing to mastering advanced tactics and game strategies, our experienced coaches provide personalized guidance in a supportive environment. Join our passionate soccer community and sharpen your skills while enjoying the thrill of the game, all while fostering teamwork and sportsmanship. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> PRICE: $20.00 PER LESSON </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={swimmingLessonImage} />
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Swimming</span> </Card.Title>
                  <Card.Text className="card-body-text"> Dive into the world of aquatic skills with our comprehensive swimming lessons tailored for all ages and skill levels. Whether you're a beginner looking to conquer water basics or an advanced swimmer aiming to refine strokes, our certified instructors offer personalized coaching in a safe and supportive environment. Join us and discover the joy of swimming while building confidence and mastering essential water safety techniques. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> PRICE: $40.00 PER LESSON </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={basketballLessonImage} />
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Basketball</span> </Card.Title>
                  <Card.Text className="card-body-text"> Shoot for success with our engaging basketball training programs designed for all ages and skill levels. Whether you're perfecting your layups or mastering three-pointers, our dedicated coaches provide expert guidance in a supportive and competitive environment. Join our basketball community to enhance your skills, build teamwork, experience the excitement of the game, and forge friendships that last beyond the court. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> PRICE: $60.00 PER LESSON </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className = "second-row-spacing">
            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={golfLessonImage} />
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Golf</span> </Card.Title>
                  <Card.Text className="card-body-text"> Tee off into the world of golf with our comprehensive lessons tailored for beginners and seasoned players alike. Whether you're learning to grip the clubs for the first time or honing your swing technique, our skilled instructors offer personalized coaching in a relaxed and scenic setting. Join us to improve your game, refine your skills, and experience the timeless joy of golfing. Whether you're aiming for the green or perfecting your putt, we're here to help you. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> PRICE: $20.00 PER LESSON </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={rockclimbingLessonImage} />
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Rockclimbing</span> </Card.Title>
                  <Card.Text className="card-body-text"> Embark on thrilling rock climbing adventures with our expert-led programs catering to beginners and experienced climbers alike. Whether you're scaling indoor walls or conquering outdoor crags, our certified guides offer safe and exhilarating experiences in breathtaking natural settings. Join our climbing community to challenge yourself, improve technique, and forge lasting connections with fellow climbers. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> PRICE: $40.00 PER LESSON </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={tennisLessonImage} />
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Tennis</span> </Card.Title>
                  <Card.Text className="card-body-text"> Serve up your passion for tennis with our dynamic coaching programs suited for all skill levels and ages. Whether you're picking up a racquet for the first time or aiming to fine-tune your backhand, our experienced coaches provide personalized instruction in a supportive and energetic atmosphere. Join our tennis community to enhance your technique, master game strategies, and enjoy the exhilaration of the court. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> PRICE: $60.00 PER LESSON </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <h1 className="train-page-titles"> <span className="train-page-titles-special">COACHES</span> </h1>

      <div className="coaches-content">
        <Container className="cards-container">
          <Row>
            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={soccerCoachImage} />
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Lionel Messi</span> </Card.Title>
                  <Card.Text className="card-body-text"> Lionel Messi, known for his unmatched skill and strategic brilliance in soccer, now brings his expertise to coaching. His approach emphasizes precision, creativity, and a relentless pursuit of excellence. Messi's coaching sessions focus on refining technical abilities, developing tactical understanding, and instilling a winning mindset, empowering players to excel on the field. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> PRICE: $150.00 PER SESSION </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={swimmingCoachImage} />
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Michael Phelps</span> </Card.Title>
                  <Card.Text className="card-body-text"> Michael Phelps, celebrated for his record-breaking achievements in swimming, now shares his expertise as a coach. His coaching philosophy emphasizes dedication, mental toughness, and technical precision. Phelps' sessions focus on refining strokes, building endurance, and developing a champion's mindset, empowering swimmers to achieve their personal best in the pool. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> PRICE: $150.00 PER SESSION </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={basketballCoachImage} />
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Stephen Curry</span> </Card.Title>
                  <Card.Text className="card-body-text"> Stephen Curry, renowned for his exceptional skills in basketball, now brings his expertise to coaching. His coaching philosophy emphasizes precision, teamwork, and relentless determination. Curry's sessions focus on refining shooting techniques, mastering game strategies, and fostering a winning mentality, empowering players to excel on the court, while having a commitment to sportmanship. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> PRICE: $150.00 PER SESSION </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className = "second-row-spacing">
            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={golfCoachImage} />
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Tiger Woods</span> </Card.Title>
                  <Card.Text className="card-body-text"> Tiger Woods, celebrated for his mastery in golf, now shares his expertise as a coach. His coaching philosophy emphasizes technique, mental fortitude, and strategic play. Woods' sessions focus on refining swings, mastering course management, and cultivating a champion's mindset, empowering golfers to elevate their game on the course. Through his guidance, Woods inspires a new generation of golfers to embrace the challenge of the game with confidence and resilience. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> PRICE: $150.00 PER SESSION </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={rockclimbingCoachImage} />
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Chris Sharma</span> </Card.Title>
                  <Card.Text className="card-body-text"> Chris Sharma, a legendary figure in rock climbing, now imparts his expertise as a coach. His coaching philosophy emphasizes technique, strength, and a deep connection with the natural environment. Sharma's sessions focus on refining climbing skills, mastering difficult routes, and fostering a resilient mindset, empowering climbers to conquer new heights on challenging terrains. With a passion for adventure and exploration, Sharma inspires climbers to push their limits. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> PRICE: $150.00 PER SESSION </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={tennisCoachImage} />
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Roger Federer</span> </Card.Title>
                  <Card.Text className="card-body-text"> Roger Federer, revered for his extraordinary tennis career, now shares his expertise as a coach. His coaching philosophy emphasizes finesse, strategy, and mental resilience. Federer's sessions focus on refining strokes, mastering court awareness, and instilling a champion's mentality, empowering players to excel on the tennis court. Federer's timeless approach to the game inspires his students to embrace elegance and precision in their tennis journey, aiming for greatness with every match. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> PRICE: $150.00 PER SESSION </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <h1 className="train-page-titles"> <span className="train-page-titles-special">FIELDS/COURTS</span> </h1>

      <div className="fields-courts-content">
        <Container className="cards-container">
          <Row>
            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={soccerFieldIndoorImage} style = {{objectPosition: '50% 50%'}}/>
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Soccer - Indoor</span> </Card.Title>
                  <Card.Text className="card-body-text"> Experience soccer like never before on our top-quality, climate-controlled indoor soccer field. Featuring premium artificial turf and advanced lighting, our facility provides the perfect environment for training, casual play, and competitive matches year-round. Enjoy professional-grade goals and equipment to enhance your game. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> PRICE: $55.00 PER HOUR </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={soccerFieldOutdoorImage} style = {{objectPosition: '50% 50%'}}/>
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Soccer - Outdoor</span> </Card.Title>
                  <Card.Text className="card-body-text"> Experience the unique challenge of our outdoor sand soccer field at Champions Den. Perfect for both practice and casual play, the sand surface enhances agility and endurance, offering a fun and engaging environment. Enjoy the natural feel and open sky as you play soccer like never before. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> PRICE: $35.00 PER HOUR </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className = "second-row-spacing">
            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={basketballCourtIndoorImage} style = {{objectPosition: '50% 50%'}}/>
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Basketball - Indoor</span> </Card.Title>
                  <Card.Text className="card-body-text"> Play basketball year-round on our professional-grade indoor court. With a top-quality hardwood surface, advanced lighting, and climate control, our facility provides the perfect environment for training, casual games, and competitive matches. Elevate your basketball experience in our premium indoor court. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> PRICE: $300.00 PER HOUR </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={basketballCourtOutdoorImage} style = {{objectPosition: '50% 45%'}}/>
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Basketball - Outdoor</span> </Card.Title>
                  <Card.Text className="card-body-text"> Experience basketball under the open sky on our outdoor court. Featuring a durable asphalt surface and adjustable hoops, our court is perfect for pickup games, shooting practice, and friendly competitions. Enjoy the fresh air and spacious layout as you elevate your game on our outdoor basketball court. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> PRICE: $150.00 PER HOUR </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className = "third-row-spacing">
            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={tennisCourtIndoorImage} />
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Tennis - Indoor</span> </Card.Title>
                  <Card.Text className="card-body-text"> Step onto our indoor tennis courts for a premium playing experience. Featuring a cushioned surface and climate-controlled environment, our courts provide optimal conditions for honing your skills or playing competitively year-round. Enjoy the comfort and precision of indoor tennis at its best. </Card.Text>
                    <ul className="card-details">
                    <li className="card-list-element"> PRICE: $60.00 PER HOUR </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={tennisCourtOutdoorImage} />
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Tennis - Outdoor</span> </Card.Title>
                  <Card.Text className="card-body-text"> Immerse yourself in the outdoor tennis experience on our meticulously maintained hard courts. Surrounded by natural beauty and equipped with durable surfaces, our outdoor courts are perfect for enjoying the game in a relaxed or competitive setting. Embrace the freedom and fresh air of outdoor tennis at our facility. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> PRICE: $20.00 PER HOUR </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <br />
      <br />
      <br />

    </div>
  );
}
  
export default Train;