import React from 'react'
import { Jumbotron ,Carousel} from 'react-bootstrap'
import Search from './Search'

function Internships() {
    return (
        <div>
      
        <Search />
     
        <Carousel>
  <Carousel.Item>
    <img
      className="w-100 m-30"
      src="img/img1.jpeg"
      alt="First slide"
    />
    <Carousel.Caption>
     
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 m-30"
      src="img/img4.png"
      alt="Second slide"
    />

    <Carousel.Caption>
     
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/img1.jpeg"
      alt="Third slide"
    />

    <Carousel.Caption>
     
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>



<Jumbotron>
  
<h1>Internships</h1>


<p>Apply to 10,000+ internships for free
View all internships

</p>
</Jumbotron>
<h2>
Popular cities
</h2>







        </div>
    )
}

export default Internships
