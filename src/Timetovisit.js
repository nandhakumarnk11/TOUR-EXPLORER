import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from 'react-bootstrap/Accordion'
import { useState } from "react";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Offcanvas from "react-bootstrap/Offcanvas";
import './App.css';

import Image from "react-bootstrap/Image";
import Chennai1 from "./gallery/chennai1.jpeg"
import Chennai2 from "./gallery/chennai2.jpeg"
import Chennai3 from "./gallery/chennai3.jpeg"

import Carousel1  from './gallery/Climate.jpeg';
import Carousel2  from './gallery/image.jpeg';
import Carousel3  from './gallery/image1.jpeg';
import Carousel4  from './gallery/image2.jpeg';
import Carousel11  from './gallery/rameshwaram1.jpeg';
import Carousel12  from './gallery/rameshwaram2.jpeg';
import Carousel13  from './gallery/rameshwaram3.jpeg';
import Carousel14  from './gallery/kodaikanal1.jpeg';
import Carousel15  from './gallery/kodaikanal2.jpeg';
import Carousel16  from './gallery/kodaikanal3.jpeg';
import Carousel17  from './gallery/ooty1.jpeg';
import Carousel18  from './gallery/ooty2.jpeg';
import Carousel19  from './gallery/ooty3.jpeg';
import Carousel20  from './gallery/kanyakumari1 (1).jpeg';
import Carousel21  from './gallery/kanyakumari1 (2).jpeg';
import Carousel22  from './gallery/kanyakumari1 (3).jpeg';
import Carousel23  from './gallery/kumbakonam1.jpeg';
import Carousel24  from './gallery/kumbakonam2.jpeg';
import Carousel25  from './gallery/kumbakonam3.jpeg';
import Carousel26  from './gallery/madurai1.jpeg';
import Carousel27  from './gallery/madurai2.jpeg';
import Carousel28  from './gallery/madurai3.jpeg';
import Carousel29  from './gallery/yercaud1.jpeg';
import Carousel30  from './gallery/yercaud2.jpeg';
import Carousel31  from './gallery/yercaud3.jpeg';
import Carousel32  from './gallery/theni1.jpeg';
import Carousel33  from './gallery/theni2.jpeg';
import Carousel34  from './gallery/theni3.jpeg';

import Carousel35  from './gallery/hogenakkal1 (1).jpeg';
import Carousel36  from './gallery/hogenakkal1 (2).jpeg';
import Carousel37  from './gallery/hogenakkal1 (3).jpeg';


const Timetovist = () => {
    const [show1, setShow] = useState(false)
    const handleShow = () => { setShow(true) }
    const handleClose = () => { setShow(false) }

   
    const [show2, setShow2] = useState(false)
    const handleShow2 = () => { setShow2(true) }
    const handleClose2 = () => { setShow2(false) }

    const [show3, setShow3] = useState(false)
    const handleShow3 = () => { setShow3(true) }
    const handleClose3 = () => { setShow3(false) }
   
    
    const [show4, setShow4] = useState(false)
    const handleShow4 = () => { setShow4(true) }
    const handleClose4 = () => { setShow4(false) }

    
    const [show5, setShow5] = useState(false)
    const handleShow5 = () => { setShow5(true) }
    const handleClose5 = () => { setShow5(false) }

    
    const [show6, setShow6] = useState(false)
    const handleShow6 = () => { setShow6(true) }
    const handleClose6 = () => { setShow6(false) }
    
    const [show7, setShow7] = useState(false)
    const handleShow7 = () => { setShow7(true) }
    const handleClose7 = () => { setShow7(false) }

    
    const [show8, setShow8] = useState(false)
    const handleShow8 = () => { setShow8(true) }
    const handleClose8 = () => { setShow8(false) }

    
    const [show9, setShow9] = useState(false)
    const handleShow9 = () => { setShow9(true) }
    const handleClose9 = () => { setShow9(false) }

    
    const [show10, setShow10] = useState(false)
    const handleShow10 = () => { setShow10(true) }
    const handleClose10 = () => { setShow10(false) }



    

  return (
    <div className='container-fluid col-10'> <br></br>
    <div>
     
        <div className='RRRH'>
        <h3> TAMILNADU TOURISM</h3>
        <h1>Best Time To Visit</h1><br></br><br></br>
        <img src={Carousel1}  alt=''/>
    </div>

      

       <div className='time1'>
       <h4 >More About Best Time To Travel to Tamilnadu</h4><br></br><br></br>
      <Accordion >
      <Accordion.Item >
        <Accordion.Header>Tamil nadu in Summer (March-May) </Accordion.Header>
        <Accordion.Body>
        <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>
        This season begins in March and lasts until May. The temperatures are high, ranging between 35°C and 40°C and so is the humidity especially in the coastal regions. Sightseeing during this time is not very convenient because of the improper temperature. The season, however, is visited to witness the festival of Chithirai held in the Madurai temple in the month of March-April. Puthandu, another important festival that marks the Tamil New year falls in mid-April and Mahamahan Festival is celebrated in March (celebrated once in 12 years). If visiting during summer, it is a good idea to visit the attractions on higher attitudes. Hill stations like Ooty, Kodaikanal and Yelagiri hills are the best where the temperature is pleasant and has scenic views that tourists can witness.</p>
        <img src={Carousel2} alt='' />
        <p className='ppp1'>Pillar Rocks of KodaikanalSource</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion></div>

     <div className='time1'>
    <Accordion >
      <Accordion.Item >
        <Accordion.Header>Tamil nadu in Monsoon (June-September)</Accordion.Header>
        <Accordion.Body>
        <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>
        This southern state sees monsoon two times a year - once between June to September and the retreating monsoon in November and December. The temperature is slightly less than what it is in the summer season. It ranges between 25°C and 30°C. The rains often occur in long spells and the humidity during this time is high especially in coastal regions. Some of the hilly areas see massive rainfall and venturing out during this time around is not a great idea. The Eastern seaboard of Tamil Nadu sometimes experiences cyclones during the late monsoon, making it an unsafe
place
to visit.</p>
        <img src={Carousel3} alt='' />
        <p className='ppp1'>A Rainy Day in Chennai Source</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion></div>



     <div className='time1'>
    <Accordion >
      <Accordion.Item >
        <Accordion.Header>Tamil nadu in Winter (October-February)</Accordion.Header>
        <Accordion.Body>
      
        <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>
        Winter in Tamil Nadu begins in October and lasts until February. November and December have intermittent rainfall because of the retreating monsoon, but otherwise, the temperature remains between 10°C and 15°C. The humidity is low, and it is the best climate for sightseeing and touring the cities. Most of the tourist attractions are bustling with activities during this season. The beaches call the beach lovers, and adventure seekers for bathing in the sun, swimming and water sports as the temperature remains moderate all through the day.</p>
        <img src={Carousel4} alt='' />
        <p className='ppp2'>Pechiparai Reservoir in Kanyakumari District Source</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion><br></br><br></br><br></br><br></br><br></br>
    </div>

    <p className='hhh1'>Best Time To Visit</p>
    <p className='fi' style={{textIndent:'4rem', textAlign:'justify'}}>
The best time to visit Tamil Nadu is during the winter season, i.e. from November to February when the temperature is relatively low, and pleasant to explore the attractions in the state. Monsoons bring torrential downpour which makes it an inappropriate time to travel through Tamil Nadu. Summer, however, is perfect for exploring the hills stations. Tourists can pick the region they wish to see according to the season because offseason visits could be extremely inconvenient for some.</p><br></br><br></br><br></br><br></br>
  
<div className='TV3'>
    <h2>TAMILNADU TOURISM</h2>
    <h5>Best Time To Visit</h5>
</div><br></br><br></br><br></br><br></br><br></br>



</div>
        <Container>
            <Row>
                <Col className="text-start">
                <h2 style={{fontWeight : "600"}}>01. Chennai</h2><br></br><br></br>
                    <h5 className="para-heading">What is the best time to visit:</h5>
                    <p className='py-2' style={{textIndent:'15rem', textAlign:'justify'}}>October to February during the winters and the pre-monsoons season is the best time to visit Chennai. This time of the year is considered as the best time to explore the metropolitan city as summers are scorching and monsoons bring torrential downpours and cyclones. Its geographical location on the beautiful coastline mostly keeps the city's weather hot and humid.</p>
                    <p className='py-2' style={{textIndent:'15rem', textAlign:'justify'}}>Chennai is one of the cities that has successfully blended the modern, traditional and sides with ease. The city welcomes everyone who wants to seek a soulful and spiritual connection but also those who love shopping for sarees and enjoy good food. There is no conundrum in Chennai when you visit. It's all about the moment, whether you decide to take a stroll down Marina Beach.</p>
                </Col>
                
                <Col>
                <div className="modal show" show={true} style={{ display:'block', position: 'relative', width:'550px',height:'550px' }} >
                    <Modal.Dialog >
                        <Modal.Header closeButton>
                            <Modal.Title className="bolder-text">More About Best Time to Travel To Chennai</Modal.Title>
                        </Modal.Header>
                            
                        <Modal.Body >
                            <Container>
                                <Row>
                                    <Col><Image className="modal-image" src={Chennai1}></Image><p className="text-center">Chennai,<br></br> India<br></br> Source</p></Col>
                                    <Col><Image className="modal-image" src={Chennai2}></Image><p className="text-center">Chennai,<br></br> Kathipara<br></br> Source</p></Col>
                                    <Col><Image className="modal-image" src={Chennai3}></Image><p className="text-center">Chennai,<br></br> Beach<br></br> Source</p></Col>
                                </Row>
                            </Container>
                            </Modal.Body>

                        <Modal.Footer >
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                            <Button variant="primary" onClick={handleShow}>Save changes</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                    
                    
                    <Offcanvas show={show1} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className="text-center"><h5 className="offcanvas-heading">&emsp;&emsp;&emsp;&emsp;Best Time To Visit In <br></br>&emsp;&emsp;&emsp;&emsp;Chennai</h5>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                            <Offcanvas.Body>
                                <h6 >Chennai in Winters (November - February)</h6>
                                <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>Winters, the best time to visit Chennai, begin in November and last till February. Even the transitional month of October is quite good for exploring the city. The weather is quite pleasant with the maximum temperature hovering around 30°C and the minimum around 22°C. Its proximity to the coastline also results in occasional rains, but it will not be something that will hamper travel plans to a great extent. Kapaleeshwarar temple, Government Museum, Fort St George, St. Andrews Church, Fort Museum, Nalli Silks, Kalakshetra Foundation, Vivekananda House etc. are some of the attractions that can be seen when in Chennai. The season is also famous for the array of festivals organised in the city like the Dance and Music Festival in December, Travel & Tourism Fair and Pongal in January and the Natyanjali Dance Festival held in February/ March. These events are traditional and important celebrations of Chennai and its culture and must not be missed when there.</p><br></br><br></br>

                                <h6>Chennai in Summers (March - June)</h6>
                                <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>March marks the onset of the summer season in Chennai. It lasts till June and visiting the city during this time is not for the faint- hearted, some say. The days are blazing hot with the temperatures soaring as high as 39°C and the nights are equally warm with the minimum hovering around 27°C. Exploring the cityscape during this time of the year is an extremely exhausting affair and is, therefore, not advised to tourists.</p><br></br><br></br>

                                <h6>Chennai in Monsoons (July-September)</h6>
                                <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>Chennai is susceptible to heavy downpours and cyclones between the months of July and September. These months mark the monsoon season in the region and is considered off-season as tourism does not really thrive here. The extreme rainfalls and strong winds could prove to be a hindrance to sightseeing and, therefore, the monsoon season is not recommended to tourists. The hotel tariffs, however, drop drastically during the season, making it a decent option for budget travellers. In case one has to visit Chennai, they may want to plan a trip at the onset of the season when the showers are moderate and allow travelling through the city.</p><br></br>
                            </Offcanvas.Body>
                    </Offcanvas>
                    </div>
                </Col>
            </Row>
        </Container><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        
        
        


        

        
      
        
        <Container className="text-start1"><h2 style={{fontWeight : "600"}}>02. Rameshwaram</h2> 
            <Row>
                <Col>
                <div className="modal show" style={{ display: 'block', position: 'initial' }}>
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title className="bolder-text">More About Best Time to Travel To Rameshwaram</Modal.Title>
                        </Modal.Header>
                            
                        <Modal.Body>
                        <Container>
                                <Row>
                                    <Col><Image className="modal-image" src={Carousel11}></Image><p className="text-center">Railway<br></br>Bridge<br></br> Source</p></Col>
                                    <Col><Image className="modal-image" src={Carousel12}></Image><p className="text-center">Lighthouse<br></br>Source</p></Col>
                                    <Col><Image className="modal-image" src={Carousel13}></Image><p className="text-center">Pilgrims<br></br>Temple<br></br>Source</p></Col>
                                </Row>
                            </Container>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose2}>Close</Button>
                            <Button variant="primary" onClick={handleShow2}>Save changes</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                    
                    <Offcanvas show={show2} onHide={handleClose2} placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className="text-center"><h5 className="offcanvas-heading">&emsp;&emsp;&emsp;&emsp;Best Time To Visit In <br></br>&emsp;&emsp;&emsp;&emsp;Rameshwaram</h5>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                            <Offcanvas.Body>
                                <h6>Rameshwaram in Winters (November - February)</h6>
                                <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>Winters in Rameshwaram, which last from October all the way to March, is said to be the peak season for visiting Rameshwaram if you are visiting the place as a tourist and not a pilgrim. The temperature during these months drops considerably than the other two seasons, with it ranging from 20 degree Celsius to 30 degree Celsius. The town is also blessed with chilly winds which make the atmosphere even more amicable. This season, therefore, makes for the best time for tourists to take part in a plethora of outdoor activities and enjoy their stay. During December, Rameshwaram also hosts the festival of Arudhra Darshanam which is essentially a festival that celebrates an aspect of Lord Shiva. This is said to be one of the most celebrated festivals amongst all the ones celebrated in Rameshwaram.</p><br></br><br></br>

                                <h6>Rameshwaram in Summers (March - June)</h6>
                                <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>March marks the onset of the summer season in Chennai. It lasts till June and visiting the city during this time is not for the faint- hearted, some say. The days are blazing hot with the temperatures soaring as high as 39°C and the nights are equally warm with the minimum hovering around 27°C. Exploring the cityscape during this time of the year is an extremely exhausting affair and is, therefore, not advised to tourists.</p><br></br><br></br>

                                <h6>Rameshwaram in Monsoons (July-September)</h6>
                                <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>Chennai is susceptible to heavy downpours and cyclones between the months of July and September. These months mark the monsoon season in the region and is considered off-season as tourism does not really thrive here. The extreme rainfalls and strong winds could prove to be a hindrance to sightseeing and, therefore, the monsoon season is not recommended to tourists. The hotel tariffs, however, drop drastically during the season, making it a decent option for budget travellers. In case one has to visit Chennai, they may want to plan a trip at the onset of the season when the showers are moderate and allow travelling through the city.</p><br></br>
                            </Offcanvas.Body>
                    </Offcanvas>
                </div>
                </Col>
                <Col><br></br>
                <h6 className="text-start para-heading">What is the best time to visit:</h6>
                <p className='py-2' style={{textIndent:'15rem', textAlign:'justify'}}>The best time to visit Rameshwaram is from October to April. However, as far as the weather goes, Rameshwaram experiences tropical climate which means the though the seasons greatly vary, the temperatures may not. This makes Rameshwaram a destination which can be visited all year round. Winters (November to February) are cool and temperature comes down to 17 degrees Celcius. This is the most pleasant season for sightseeing and visiting neighbourhoods. The Monsoons (July to September) are humid with average rainfalls, but, the scenic view of the coastal region during these months is enjoyable.</p>
                <p className='py-2' style={{textIndent:'15rem', textAlign:'justify'}}>Dotted with temples along the seashore and located on a beautiful island, rumour has it that this is where Lord Rama built the bridge across the ocean to reach Sri Lanka. One of the holiest places in the country, pilgrims flocks to this town to pay their respects and worship Lord Shiva. With a tropical climate throughout the year, this hamlet can pretty much be visited at any time.</p>
                </Col>
            </Row>
        </Container><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        
        
       
        
        
       

        <Container>
            <Row>
                <Col className="text-start">
                <h2 style={{fontWeight : "600"}}>03. Kodaikanal</h2><br></br><br></br>
                    <h6 className="para-heading">What is the best time to visit:</h6>
                    <p className='py-2' style={{textIndent:'14rem', textAlign:'justify'}}>The best time to visit Kodaikanal is from October to June, however, the weather remains a bit chilly during December and January. Ideal for a vacation in each season, Kodaikanal is the most colourful in summers and most picturesque in monsoons. If your trip consists of an itinerary that includes a lot of sights to see, then summer is the best time to visit this place and those who wish to go for trekking, plan your trip to Kodaikanal between October and February.</p>
                    <p className='py-2' style={{textIndent:'14rem', textAlign:'justify'}}>Kodaikanal is lovingly referred to as The Princess of Hill stations. And boy, does it take this title seriously! Built around an exotic star shaped lake, the region exudes ethereal charm like that of fairy-tales. The best time to visit Kodaikanal is from October - June, however, the weather remains a bit chilly during December and January.</p>
                </Col>
                
                <Col>
                <div className="modal show" style={{ display: 'block', position: 'relative' }}>
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title className="bolder-text">More About Best Time to Travel To Kodaikanal</Modal.Title>
                        </Modal.Header>
                            
                        <Modal.Body>
                        <Container>
                                <Row>
                                    <Col><Image className="modal-image" src={Carousel14}></Image><p className="text-center">Upper Lake<br></br> Source</p></Col>
                                    <Col><Image className="modal-image" src={Carousel15}></Image><p className="text-center">Kodaikanal<br></br>Lake<br></br> Source</p></Col>
                                    <Col><Image className="modal-image" src={Carousel16}></Image><p className="text-center">Pillar<br></br>Rocks<br></br>Source</p></Col>
                                </Row>
                            </Container>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose3}>Close</Button>
                            <Button variant="primary" onClick={handleShow3}>Save changes</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                    
                    <Offcanvas show={show3} onHide={handleClose3}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className="text-center"><h5 className="offcanvas-heading">&emsp;&emsp;&emsp;&emsp;Best Time To Visit In <br></br>&emsp;&emsp;&emsp;&emsp;Kodaikanal</h5>
                           
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                            <Offcanvas.Body>
                                <h6>Kodaikanal in Summer (March-June)</h6>
                                <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>Summers (March to June) in Kodaikanal is ideal with comfortable 20 degree Celsius to 32 degree Celsius temperature and flowers in full bloom. The ten days long Grand Annual Summer Festival, which takes place in May, attracts many tourists. From elegant fruit exhibitions to enthralling boat races, flower art- works, classical dance performances and melodious musicals, the Summer Festival is a platter of different shows. Kodaikanal also holds fantastic festivals like Panguni Uthiram in March and the Annual Horticulture Show in May.</p><br></br><br></br>

                                <h6>Kodaikanal in Winter (December-February)</h6>
                                <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>Summers (March to June) in Kodaikanal is ideal with comfortable 20 degree Celsius to 32 degree Celsius temperature and flowers in full bloom. The ten days long Grand Annual Summer Festival, which takes place in May, attracts many tourists. From elegant fruit exhibitions to enthralling boat races, flower art- works, classical dance performances and melodious musicals, the Summer Festival is a platter of different shows. Kodaikanal also holds fantastic festivals like Panguni Uthiram in March and the Annual Horticulture Show in May.</p><br></br>

                                <h6>Kodaikanal in Monsoon (June-September)</h6>
                                <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>With a temperature that rarely falls below 8 degree Celsius, winter in Kodaikanal (between December and February) is the best time to enjoy various treks, and attend the famous Pongal festival celebrated during January.</p><br></br>
                            </Offcanvas.Body>
                    </Offcanvas>
                </div>
                </Col>
            </Row>
        </Container><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>








        <Container className="text-start"><h2 style={{fontWeight : "600"}}>04. Ooty</h2></Container>
        <Container>
            <Row>
                <Col>
                <div className="modal show" style={{ display: 'block', position: 'initial' }}>
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title className="bolder-text">More About Best Time to Travel To Ooty</Modal.Title>
                        </Modal.Header>
                            
                        <Modal.Body>
                        <Container>
                                <Row>
                                    <Col><Image className="modal-image" src={Carousel17}></Image><p className="text-center">Mountain<br></br>Railway<br></br> Source</p></Col>
                                    <Col><Image className="modal-image" src={Carousel18}></Image><p className="text-center">Ooty Lake<br></br> Source</p></Col>
                                    <Col><Image className="modal-image" src={Carousel19}></Image><p className="text-center">Trekking Ooty<br></br> Source</p></Col>
                                </Row>
                            </Container>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose4}>Close</Button>
                            <Button variant="primary" onClick={handleShow4}>Save changes</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                    
                    <Offcanvas show={show4} onHide={handleClose4} placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className="text-center"><h5 className="offcanvas-heading">&emsp;&emsp;&emsp;&emsp;Best Time To Visit In <br></br>&emsp;&emsp;&emsp;&emsp; Ooty</h5>
                          
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                            <Offcanvas.Body>
                                <h6>Ooty in Summer (March - June)</h6>
                                <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>Ooty experiences an average temperature that ranges between 23 degree Celsius and 31 degree Celsius, which is perfect for you to explore the sheer beauty of this place in full swing.</p><br></br><br></br>

                                <h6>Ooty in Winter (October - March)</h6>
                                <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>With temperatures that stay below 15 degree Celsius, winters in Ooty are perfect to have a gala time. Each year, during January or February, Department of Tourism in Tamil Nadu hosts The Tea and Tourism Festival for three days. A vast range of tea leaves are displayed, and rows of tea stalls are put up for tasting and buying a wide variety of tea. In addition to this, these three days are packed with cultural shows and performances, which reverberate with the heritage of the Nilgiris.</p><br></br><br></br>

                                <h6>Ooty in Monsoon (July-September)</h6>
                                <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>People who love rainfall and green grass beds laid over mountains can pack their bags and head straight to Ooty during the monsoon months, which lasts between June and September. Even though you are unlikely to experience the bright, warm sunshine, you will have a great time nevertheless</p><br></br>
                            </Offcanvas.Body>
                    </Offcanvas>
                </div>
                </Col>
                <Col><br></br>
                <h6 className="text-start para-heading">What is the best time to visit:</h6>
                <p className='py-2' style={{textIndent:'15rem', textAlign:'justify'}}>The best time to visit Ooty is throughout the year as the weather is pleasant and great for sightseeing. The temperature usually ranges from 5-15 degrees throughout the year with colder nights. However, the peak season is from October to June when the weather is pleasant and you can get involved in outdoor activities. Ooty can be visited during monsoons (if you don't mind the rain) when the freshly washed surroundings give Ooty an ethereal charm. The annual Tea and Tourism Festival attracts crowds in huge numbers to visit the place and have a great time in this wonderful place.</p>
                <p className='py-2' style={{textIndent:'15rem', textAlign:'justify'}}>The poised and elegant 'Queen of Hill Stations welcomes you to the kingdom in the clouds. Individuals travel far and wide to partake in the awe-inspiring wonders of one of India's most beloved hill stations - Ootacamund or Ooty. Here, history and culture form a sweet medley, while nature sings to its own symphony. Colonial churches, Hindu temples, tribal museums and libraries brand the plains with stories.</p>
                </Col>
            </Row>
        </Container>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>



        <Container>
            <Row>
                <Col className="text-start">
                <h2 style={{fontWeight : "600"}}>05. Kanyakumari</h2><br></br><br></br>
                    <h6 className="para-heading">What is the best time to visit:</h6>
                    <p className='py-2' style={{textIndent:'15rem', textAlign:'justify'}}>The months from October until February are considered the best time to visit Kanyakumari, as the weather remains calm and pleasant. Although this coastal region is a bit humid, this is the best time to try out some adventurous water sports, going on sightseeing and outings, undertaking beach activities and savouring the spectacular sunset views. With the beginning of winters in November, Kanyakumari also hosts many festivals during this month, for instance the Cape Festival.</p>
                    <p className='py-2' style={{textIndent:'15rem', textAlign:'justify'}}>Kanyakumari is the southernmost tip of India. As Kanyakumari is close to the seas, the expanse experiences a tropical coastal climate. There are not many variations in the seasons, as there is an overall humidity and seasonal rain during the year.</p>
                </Col>
                
                <Col>
                <div className="modal show" style={{ display: 'block', position: 'relative' }}>
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title className="bolder-text">More About Best Time to Travel To Kanyakumari</Modal.Title>
                        </Modal.Header>
                            
                        <Modal.Body>
                        <Container>
                                <Row>
                                    <Col><Image className="modal-image" src={Carousel20}></Image><p className="text-center">Landscape<br></br> Source</p></Col>
                                    <Col><Image className="modal-image" src={Carousel21}></Image><p className="text-center">Sea<br></br> Source</p></Col>
                                    <Col><Image className="modal-image" src={Carousel22}></Image><p className="text-center">Coast<br></br> Source</p></Col>
                                </Row>
                            </Container>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose5}>Close</Button>
                            <Button variant="primary" onClick={handleShow5}>Save changes</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                    
                    <Offcanvas show={show5} onHide={handleClose5}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className="text-center"><h5 className="offcanvas-heading">&emsp;&emsp;&emsp;&emsp;Best Time To Visit In <br></br>&emsp;&emsp;&emsp; Kanyakumari</h5>
                           
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                            <Offcanvas.Body>
                                <h6>Kanyakumari in Winters (October to March)</h6>
                                <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>Winters in Kanyakumari are the best time for sightseeing and travelling around the place. Attractions such as Vavathurai, Chitharal Hill Temple and Thiruvalluvar Statue are popular among the tourists. November is a very favourable month for visiting Kanyakumari as the weather is pleasant with clear skies and less humidity. Temperatures vary from 15 degree celcius to 35 degree celcius. It is also the perfect time for indulging in beach activities like sunbathing, swimming and surfing. December to February are the peak seasons; hence the tourism sector gets maximum revenue during this time.</p><br></br><br></br>

                                <h6>Kanyakumari in Summers (April to June)</h6>
                                <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>Kanyakumari experiences moderate weather during summers, with temperatures ranging from 22 degrees to 35 degrees Celcius. During this period the weather is humid; however, the climatic conditions are apt for visiting the various attractions of the place including Vivekananda Rock, Vattakottai Fort and Gandhi Museum. Apart from this, the various beach activities are open throughout summer, so tourists can indulge in outdoor visits, sea bathing and surfing. Although early summers are an ideal time to visit Kanyakumari, the month of April gets considerably hot which is why this month is not preferred for travel. However, the place gets vacant with crowd and cheaper accomodation - a perfect time for budget travellers</p><br></br><br></br>

                                <h6>Kanyakumari in Monsoons (July to September)</h6>
                                <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>Monsoons in Kanyakumari starts in June which helps in tremendously lowering the temperature. However, the level of humidity keeps rising making it difficult to travel around. If you're a pluviophile, then the month of August is best recommended as the atmosphere is pleasant with a slight drizzle that enhances the beauty of this coast. Apart from its humidity, this is a good time to visit during monsoons. The frequent showers put a hold on which affects the footfall in Kanyakumari in September, however, the Cape Festival takes place in October, and by this time tourists from around India visit Kanyakumari.</p><br></br>
                            </Offcanvas.Body>
                    </Offcanvas>
                </div>
                </Col>
            </Row>
        </Container><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>



        <Container className="text-start"><h2 style={{fontWeight : "600"}}>06. Kumbakonam</h2></Container><br></br>
        <Container>
            <Row>
                <Col>
                <div className="modal show" style={{ display: 'block', position: 'initial' }}>
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title className="bolder-text">More About Best Time to Travel To Kumbakonam</Modal.Title>
                        </Modal.Header>
                            
                        <Modal.Body>
                        <Container>
                                <Row>
                                    <Col><Image className="modal-image" src={Carousel23}></Image><p className="text-center">Dawn<br></br> Source</p></Col>
                                    <Col><Image className="modal-image" src={Carousel24}></Image><p className="text-center">Steemit<br></br> Source</p></Col>
                                    <Col><Image className="modal-image" src={Carousel25}></Image><p className="text-center">Holydham<br></br> Source</p></Col>
                                </Row>
                            </Container>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose6}>Close</Button>
                            <Button variant="primary" onClick={handleShow6}>Save changes</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                    
                    <Offcanvas show={show6} onHide={handleClose6} placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className="text-center"><h5 className="offcanvas-heading">&emsp;&emsp;&emsp;&emsp;Best Time To Visit In <br></br>&emsp;&emsp;&emsp;&emsp;&emsp;Kumbakonam</h5>
                        
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                            <Offcanvas.Body>
                                <h6>Kumbakonam in Winter (October - February)</h6>
                                <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>The winters in Kumbakonam are pleasantly cold, with light sweaters helping you to survive the cold. The temperature ranges from 15 to 25 degrees Celcius, and the diurnal range of temperature isn't more than a maximum of 10 degrees Celcius. This season is most preferred by tourists to visit Kumbakonam, as exploring the city in this weather becomes comfortable and the temperature is pleasing most of the time during winter months.</p><br></br>

                                <h6>Kumbakonam in Monsoon (June-August)</h6>
                                <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>The monsoon is associated with frequent and untimely shower spells in the region. The temperature drops down considerably after the scorching summers and the place witness a waste stretch of greenery as the rains give life to the flora of the region. The rains can though be problematic at times and can interfere with your exploration plans, but overall this season can also be preferred by tourists to pay a visit to Kumbakonam.</p><br></br>

                                <h6>Kumbakonam in Summer (March-May)</h6>
                                <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>Summers in the Deccan region of the country is undeniable hot, and the scorching sun might be an unpleasant experience. The summers are usually arid and heated up, and the temperature goes up to 40 degrees Celcius during the day. The season is majorly avoided by tourists to plan a visit to Kumbakonam because of the overall weather conditions.</p><br></br>
                            </Offcanvas.Body>
                    </Offcanvas>
                </div>
                </Col>
                <Col><br></br><br></br>
                <h6 className="text-start para-heading">What is the best time to visit:</h6>
                <p className='py-2' style={{textIndent:'15rem', textAlign:'justify'}}>Located in the tropical area and the Deccan region of the country, Kumbakonam has the typical tropical climate, with pleasant winters and hot and dry summers. The monsoons are accompanied with moderate rains and erratic shower spells, thus making the time one of the suitable time to pay a visit. The summers are hot and largely uncomfortable for one to visit the place.</p>
                <p className='py-2' style={{textIndent:'15rem', textAlign:'justify'}}>Kumbakonam has a typical tropical climate. Regions around the Cauvery Delta are rather hot, but Kumbakonam has moderate weather throughout the year and summers are said to be far better than in hot coastal cities like Chennai. All said, there are numerous places to visit in Kumbakonam and it were better you choose the most ideal time for a visit. The monsoons are accompanied with moderate rains and erratic shower spells, thus making the time one of the suitable time to pay a visit.</p>
                </Col>
            </Row>
        </Container><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

        


        
        <Container>
            <Row>
                <Col className="text-start"><br></br><br></br>
                <h2 style={{fontWeight : "600"}}>07. Madurai</h2><br></br><br></br>
                    <h6 className="para-heading">What is the best time to visit:</h6>
                    <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>October to March is the best time to visit Madurai. With a hot and dry climate for most of the year, Madurai is best visited during the winter season. The town is known for its ancient temples and other architectural and religious masterpieces and receives a generous crowd of people throughout the year. Madurai is the most fascinating and welcoming during the months between October and March which coincides with its winter season.</p>
                    <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>Madurai is one of the oldest culturally vibrant cities of India. Its historical places and temples have a steady flow of tourists from all around the world.</p>
                </Col>
                
           
        <Col>
                <div className="modal show" style={{ display: 'block', position: 'relative' }}><br></br><br></br>
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title className="bolder-text">More About Best Time to Travel To Madurai</Modal.Title>
                        </Modal.Header>
                            
                        <Modal.Body>
                        <Container>
                                <Row>
                                    <Col><Image className="modal-image" src={Carousel26}></Image></Col>
                                    <Col><Image className="modal-image" src={Carousel27}></Image></Col>
                                    <Col><Image className="modal-image" src={Carousel28}></Image></Col>
                                </Row>
                            </Container>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose7}>Close</Button>
                            <Button variant="primary" onClick={handleShow7}>Save changes</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                    
                    <Offcanvas show={show7} onHide={handleClose7}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className="text-center"><h5 className="offcanvas-heading">&emsp;&emsp;&emsp;&emsp;Best Time To Visit In <br></br>&emsp;&emsp;&emsp;&emsp;Madurai</h5>
                          
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                            <Offcanvas.Body>
                                <h6>Madurai in Winter (December-February)</h6>
                                <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>Many locals look forward to the winter season in Madurai due to the relief it brings from the summers. The season lasts from December to February. The temperature during the winter months ranges from 20 degree Celsius to 29 degree Celsius. The season is characterised by moderately cool temperatures which make travelling around the city a pleasant experience for all individuals. Pongal, a widely celebrated festival is regarded as extremely special in Madurai. The festival lasts for three days and comprises of praying for a good harvest by locals and farmers alike. Other religious festivals are also celebrated with great vigour. However, hotel prices may climb up as this is the peak tourist season.</p><br></br><br></br>

                                <h6>Madurai in Monsoon (June-August)</h6>
                                <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>Monsoon season in Madurai lasts from June to August. Although the monsoon season continues for a smaller amount of time, the south-west monsoon winds bring in a large amount of rainfall which is extremely heavy. This rainfall also makes the weather gloomy but still makes the city beautiful as the nature around Madurai mainly benefits from this rain. This is the perfect time to visit Madurai for people who love greenery surroundings.</p><br></br><br></br>

                                <h6>Madurai in Summer (March-July)</h6>
                                <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>The summer season in Madurai lasts from March to May. The temperatures during this season range from 24 degree Celsius to 34 degree Celsius. This means that the weather in Madurai during these months is uncharacteristically hot. It is also really dry which makes the heat more noticeable and discourages travellers to visit. The summer season is, therefore, an offseason for Madurai, and the crowds are comparatively less as well.</p><br></br>
                            </Offcanvas.Body>
                    </Offcanvas>
                </div>
                </Col>
            </Row>
        </Container><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>






        <Container className="text-start"><h2 style={{fontWeight : "600"}}>08. Yercaud</h2></Container><br></br>
        <Container>
            <Row>
                <Col>
                <div className="modal show" style={{ display: 'block', position: 'initial' }}>
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title className="bolder-text">More About Best Time to Travel To Yercaud</Modal.Title>
                        </Modal.Header>
                            
                        <Modal.Body>
                        <Container>
                                <Row>
                                    <Col><Image className="modal-image" src={Carousel29}></Image><p className="text-center">Easemytrip<br></br> Source</p></Col>
                                    <Col><Image className="modal-image" src={Carousel30}></Image><p className="text-center">Oyorooms<br></br> Source</p></Col>
                                    <Col><Image className="modal-image" src={Carousel31}></Image><p className="text-center">Hiveminer<br></br> Source</p></Col>
                                </Row>
                            </Container>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose8}>Close</Button>
                            <Button variant="primary" onClick={handleShow8}>Save changes</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                    
                    <Offcanvas show={show8} onHide={handleClose8} placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className="text-center"><h5 className="offcanvas-heading">&emsp;&emsp;&emsp;&emsp;Best Time To Visit In <br></br>&emsp;&emsp;&emsp;&emsp;Yercaud</h5>
                    
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                            <Offcanvas.Body>
                                <h6>Yercaud in Summer (March - June)</h6>
                                <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>With temperatures that hardly move out of the range between 24 degree Celsius and 28 degree Celsius, Yercaud experiences mild summers during March to June. The best places to visit during this season are the enchanting Emerald Lake, Killiyur Falls, Silk Farm, and Lady?s Seat. Apart from these attractions, one particular festival which allures tourists from every nook of the world is the Yercaud Summer Festival. Held in May, it is an annual festival which keeps everyone on their toes until its arrival. Usually taking place for five days, the enrapturing summer event is as grand as it gets! From sophisticated folk dances to bewitching musical concerts, from captivating cultural competitions to horse riding tournaments, this event is a treasure trove of a smorgasbord of wonderful activities.</p><br></br><br></br>

                                <h6>Yercaud in Winter (November - February)</h6>
                                <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>Yercaud experiences delightful a climate from October to February. The average temperature which stays between a pleasant 10 degree Celsius and 15 degree Celsius is ideal for leisurely nature walks as well as adventure activities. Do not miss out on the Bear?s Cave, Pagoda Point, Shevaroy Temple, and Anna Park, if you plan to visit this beautiful place during winter.</p><br></br><br></br>

                                <h6>Yercaud in Monsoon (July-September)</h6>
                                <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>Yercaud experiences a hot and humid monsoon with temperatures that range between 20 degree Celsius and 25 degree Celsius from June to September. At this time, the coffee plantations look ethereal after being washed by the rain. The Botanical Garden, Raja Rajeshwari Temple, and the Sri Chakra Mahameru Temple are some of the places you should visit during this time.</p><br></br>
                            </Offcanvas.Body>
                    </Offcanvas>
                </div>
                </Col>
                <Col><br></br><br></br>
                <h6 className="text-start para-heading">What is the best time to visit:</h6>
                <p className='py-2' style={{textIndent:'15rem', textAlign:'justify'}}>October to June is the best time to visit Yercaud because the weather is dry and cool. However, Yercaud offers breathtaking views and a tranquil ambience throughout the year. During the month of May, a seven-day Summer Festival is conducted which includes flower shows, dog shows, boating races and village fairs. Monsoons (July- September) could be avoided as rains might hamper your sightseeing plans, but the rains make this place extra beautiful and you might not want to miss that either.</p>
                <p className='py-2' style={{textIndent:'15rem', textAlign:'justify'}}>Yercaud celebrates seasonal festivals that are in tune with the changing climatic conditions and showcase the nativity and culture of the hill town. If you are planning a weekend getaway or a long vacation, choose the best of the seasons so you can enjoy your trip to the finest. The best period to visit Yercaud is from October to June, when the weather is at its best.</p>
                </Col>
            </Row>
        </Container><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>




           
        <Container>
            <Row>
                <Col className="text-start">
                <h2 style={{fontWeight : "600"}}>09. Theni</h2><br></br>
                    <h6 className="para-heading">What is the best time to visit:</h6>
                    <p className='py-2' style={{textIndent:'15rem', textAlign:'justify'}}>In order to spend your vacation in the lap of nature in south India, no place would be better than the town of Cardamom - Theni. The best season to visit Theni is winter when the weather remains all pleasant and favourable for tourism. On the other hand, summer remains hot and monsoon receives a heavy rainfall which makes the two seasons not suitable for touring.</p>
                    <p className='py-2' style={{textIndent:'15rem', textAlign:'justify'}}>Theni is known for having a salubrious climate throughout the year. The average temperature ranges between 15 degrees Celsius to 40 degrees Celsius. The best months to visit are from the month of December to February since the weather is pleasant and allows you to indulge in a number of outdoor activities.</p>
                </Col>
                
                <Col>
                <div className="modal show" style={{ display: 'block', position: 'relative' }}>
                    <Modal.Dialog>
                        <Modal.Header closeButton><br></br>
                            <Modal.Title className="bolder-text">More About Best Time to Travel To Theni</Modal.Title>
                        </Modal.Header>
                            
                        <Modal.Body>
                        <Container>
                                <Row>
                                    <Col><Image className="modal-image" src={Carousel32}></Image></Col>
                                    <Col><Image className="modal-image" src={Carousel33}></Image></Col>
                                    <Col><Image className="modal-image" src={Carousel34}></Image></Col>
                                </Row>
                            </Container>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose9}>Close</Button>
                            <Button variant="primary" onClick={handleShow9}>Save changes</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                    
                    <Offcanvas show={show9} onHide={handleClose9}>
                        <Offcanvas.Header closeButton><br></br><br></br>
                            <Offcanvas.Title className="text-center"><h5 className="offcanvas-heading">&emsp;Best Time To Visit In <br></br>Theni</h5>
                           
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                            <Offcanvas.Body>
                                <h6>Theni in Summer</h6>
                                <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>The summer season in Theni starts from the month of March and continues till May. The months are generally hot and not favourable to visit Theni. Temperature during these months ranges between 24°C and 42°C.</p><br></br><br></br>

                                <h6>Theni in Winter</h6>
                                <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>Monsoon in Theni strikes in the month of June and lasts until September. The town experiences a heavy rainfall during this time that fills the town with zest. Despite being at peak of its beauty, the town of Theni is not best to visit during monsoon.</p><br></br><br></br>

                                <h6>Theni in Monsoon</h6>
                                <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>December marks the beginning of winter season in Theni which ends in the month of February. The temperature during these months varies from 22°C to 32°C, and thus, the town witnesses a pleasant weather and make the season best to visit Theni.</p><br></br>
                            </Offcanvas.Body>
                    </Offcanvas>
                </div>
                </Col>
            </Row>
        </Container><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br>    
       
       






        <Container className="text-start"><h2 style={{fontWeight : "600"}}>10. Hogenakkal</h2></Container><br></br>
        <Container>
            <Row>
                <Col>
                <div className="modal show" style={{ display: 'block', position: 'initial' }}>
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title className="bolder-text">More About Best Time to Travel To Hogenakkal</Modal.Title>
                        </Modal.Header>
                            
                        <Modal.Body>
                        <Container>
                                <Row>
                                    <Col><Image className="modal-image" src={Carousel35}></Image><p className="text-center">Winter<br></br> Source</p></Col>
                                    <Col><Image className="modal-image" src={Carousel36}></Image><p className="text-center">Monsoon<br></br> Source</p></Col>
                                    <Col><Image className="modal-image" src={Carousel37}></Image><p className="text-center">Dry<br></br> Source</p></Col>
                                </Row>
                            </Container>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose10}>Close</Button>
                            <Button variant="primary" onClick={handleShow10}>Save changes</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                    
                    <Offcanvas show={show10} onHide={handleClose10} placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className="text-center"><h5 className="offcanvas-heading">&emsp;&emsp;&emsp;&emsp;Best Time To Visit In <br></br> &emsp;&emsp;&emsp;&emsp;&emsp;Hogenakkal</h5>
                   
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                            <Offcanvas.Body>
                                <h6>Hogenakkal in Winter (November - February)</h6>
                                <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>Watch the glory of nature take over Hogenakkal, as the south-west monsoon showers the region with about 150 mm of rainfall between these months. Hogenakkal is a sight to behold in the rain, as the Kaveri comes alive and usually floods her banks. While adventure enthusiasts and adrenaline junkies throng Hogenakkal in the monsoon, it is not recommended for tourists as the currents are too strong to swim in. Boating is not allowed either, and there is no standard means of transportation to reach the waterfalls. It is best to avoid the river, as the water flow may be too heavy. Further downhill, you can go rafting if you prefer, although discretion is advised. The waterfalls are a sight to behold, as they live up to their name of the 'Smoking Rocks' - the sultry mist as the water strikes the rocks covers the base in a myriad of colours. Rainbows adorn the falls and the scene is postcard-perfect.</p><br></br><br></br>

                                <h6>Hogenakkal in Monsoon (July-September)</h6>
                                <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>Hogenakkal Waterfall is a popular destination attraction among nature lovers, adventure seekers, trekkers and shutterbugs. If you are planning a trip to this waterfall, here is some information about Hogenakkal Falls timings, location, activities, parking fee and more.</p><br></br><br></br>

                                <h6>Hogenakkal in Summer (March - June)</h6>
                                <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>The Indian Peninsula lies in the tropics, and is known for its sweltering summer heat. Temperatures soar to a maximum of 35°C in April, which is the hottest month of the year here. The water flow is minimal, and there are few waterfalls to reckon during these summer months. Most small waterfalls dry up. The rock facades are magnificent, though. The jagged rocks and steep gorges make for picture-perfect views, and have been featured in many films as well.</p><br></br>
                            </Offcanvas.Body>
                    </Offcanvas>
                </div>
                </Col>
                <Col><br></br>
                <h6 className="text-start para-heading">What is the best time to visit:</h6>
                <p className='py-2' style={{textIndent:'15rem', textAlign:'justify'}}>The best time to visit Hogenakkal is during the winter from October - February to relax and unwind near the waterfalls. Winters in Hogenekkal is pleasant with moderate weather throughout the day. Whereas the summers are warm and sunny with temperatures ranging from 23 - 34 degree celcius. Despite summers being an off season, a dip in the hogenekkal lake is rejuvenating for all. Monsoon on the other hand has a pleasant weather with temperatures ranging from 13 to 20 degree celcius, making it an ideal time to enjoy its spectacular beauty.</p>
                <p className='py-2' style={{textIndent:'15rem', textAlign:'justify'}}>Hogenakkal Falls, located on the border of Tamil Nadu and Karnataka, is one of the most scenic places to visit in the region. The waterfall is known as Hogenakkal, or "Smoky Rocks". because of the unique arrangement of the gigantic carbonated rocks that surround it. The sight of River Kaveri splitting into multiple small streams and cascading from different heights ranging from 15 feet to 66 feet will leave you mesmerised! Hogenakkal Waterfall is similar to the popular.</p>
                </Col>
            </Row>
        </Container><br></br><br></br>


















</div>


 

























    
    
  )
}

export default Timetovist