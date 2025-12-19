import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
import { Link } from 'react-router-dom'
import Section from './components/section3/Section'
import Section4 from './components/section4/Section4'
const App = () => {

  const users = [
    {
      img: 'https://images.unsplash.com/photo-1630348933330-ba0a6ea16262?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
      intro: '',
      color:'black',
      tag: 'BMW M5',
      car: <Link to='https://www.bmw.in/en/all-models/m-series/m5-series/2024/bmw-m5-sedan.html' > </Link>
    },
    {
      img: 'https://images.unsplash.com/photo-1627561635792-37bc1f08f5ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
      color:'black',
      intro: '',
      tag: 'ROLLS ROYCE PHANTOM',
      car: <Link to='https://www.rolls-roycemotorcars.com/en_GB/showroom/phantom.html'>
     </Link>
    },
    {
      img: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D',
      color:'black',
      intro: '',
      tag: 'Mercedes',
      car: <Link to='https://www.mercedes-benz.co.in/passengercars/mercedes-amg.html'> </Link>
    },
    {
      img: 'https://images.unsplash.com/photo-1736746419802-b608fa1ea070?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVmZW5kZXIlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D',
      color:'black',
      intro: '',
      tag: 'DEFENDER ',
      car:<Link to='https://www.landrover.in/defender/index.html'> </Link>
    },
    {
      img:'https://images.unsplash.com/photo-1627140290942-7c8f9f56e870?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXJ1c3xlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      color:'black',
      tag:'LAEMBORGINI URUS',
      car: <Link to='https://www.lamborghini.com/en-en/models/urus#val-ht'> </Link>

    }
  ]

const details=[
  {
    img:'https://thumbs.dreamstime.com/b/bmw-logo-editorial-illustrative-white-background-logo-icon-vector-logos-icons-set-social-media-flat-banner-vectors-svg-eps-jpg-210442341.jpg',
    company:'BMW',
    url: 'https://www.bmw.com'
  },
  {
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXotP5Q1D4WBEsoZ0xhScJ9Lg0kckuqEjDEg&s',
    company:'AUDI',
    url: 'https://www.audi.com'
  },
  {
    img:'https://cdn.vectorstock.com/i/500p/04/18/mercedes-benz-logo-symbol-vector-46100418.jpg',
    company:'MERCEDES',
    url: 'https://www.mercedes-benz.com'
  },
  {
    img:'https://thumbs.dreamstime.com/b/mulhouse-france-september-closeup-rolls-royce-logo-car-closeup-rolls-royce-logo-car-99816485.jpg',
    company:'ROLLS ROYCE',
    url: 'https://www.rolls-roycemotorcars.com'
  },
  {
    img:'https://img.edvido.com/lamborghini-logo-61f5d.png',
    company:'LAMBORGHINI',
    url: 'https://www.lamborghini.com/en-en/models/urus#val-ht'
  },
  {
    img:'https://thumbs.dreamstime.com/b/logo-jaguar-logo-jaguar-car-color-vector-format-aviable-ai-124808872.jpg',
    company:'JAGUAR',
    url: 'https://www.jaguar.com'
  },
  {
    img:'https://1000logos.net/wp-content/uploads/2020/04/Mahindra-Logo.jpg',
    company:'MAHINDRA',
    url: 'https://www.mahindra.com'
  },
  {
    img:'https://market-resized.envatousercontent.com/previews/files/65276857/TATA%28590x590%29.jpeg?w=590&h=590&cf_fit=crop&crop=top&format=auto&q=85&s=5d7c5319e92ad15e40248f73705635015c7576da2a6a40f040f274ef2aa9ace4',
    company:'TATA',
    url: 'https://www.tatamotors.com'
  },
  {
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRMp83COMkOw05zlNZ1xF602rs6Z2fhvzhew&s',
    company:'VOLKSWAGON',
    url: 'https://www.vw.com'
  },
  {
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7HwZxw7dKbRmfvkOw4xge6eDbsciZgbUzvQ&s',
    company:'MARUTI SUZUKI',
    url: 'https://www.marutisuzuki.com'
  },
  {
    img:'https://cdn.mos.cms.futurecdn.net/b4VFMLdjLx3TudR9xCMeDT.jpg',
    company:'HYUNDAI',
    url: 'https://www.hyundai.com'
  },
  {
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgnxZOgnKPbdkKrx8X5orZEWdG2BpJEKJeIQ&s',
    company:'FORD',
    url: 'https://www.ford.com'
  },
  {
    img:'https://cdn.vectorstock.com/i/1000v/88/66/range-rover-logo-black-emblem-vector-46088866.jpg',
    company:'Range Rover',
    url: 'https://www.landrover.com'
  },
  {
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeOYMZSDhz39dpbAFO_D1BdzJVfCI2F2iy9Q&s',
    company:'VOLVO',
    url: 'https://www.volvocars.com'
  },
  {
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStgJHULPX0UcGprzQt1q84nasyyNFhjXKZXg&s',
    company:'NISAAN',
    url: 'https://www.nissan-global.com'
  },
  {
    img:'https://logos-world.net/wp-content/uploads/2021/09/MG-Motor-Logo-2021-present.png',
    company:'MORRIS GARAGES',
    url: 'https://www.mg.com'
  },
  {
    img:'https://i.pinimg.com/736x/da/9c/a5/da9ca5610b6a94b59294e9cc37657cb1.jpg',
    company:'HONDA',
    url: 'https://www.honda.com'
  },
  {
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnG49Ht9722p0eCdIwm0YoZj0IGBzmI5D49Q&s',
    company:'TOYOTA',
    url: 'https://www.toyota.com'
  },
  {
    img:'https://www.shutterstock.com/image-vector/kia-art-symbol-south-korean-260nw-2269894917.jpg',
    company:'KIA',
    url: 'https://www.kia.com' 
  },
  {
    img:'https://cdn.prod.website-files.com/666d73652dd00cac579627ec/674e8a247db69f17aabf250a_674e88d607d93a82351c6465_relationship%2520between%2520different%2520colors%2520(13).webp',
    company:'CHEVROLET',
    url: 'https://www.chevrolet.com' 
  },
  {
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXreA4VTTttFqXRDsWv9n1HnJv_OiFuAxDLw&s',
    company:'FIAT',
    url: 'https://www.fiat.com'
  },
  {
    img:'https://i.pinimg.com/736x/df/76/c2/df76c22503b4fc2137eaa1814bfc5b13.jpg',
    company:'BYD',
    url: 'https://www.byd.com'
  },
  {
    img:'https://i.pinimg.com/564x/5a/11/54/5a115434d3b85e0bf745c25cf6b99056.jpg',
    company:'ASTON MARTIN',
    url: 'https://www.astonmartin.com'
  },
  {
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiumqkjDEZnI6QwmIFo4dRIAZQJRYqcd4Bvg&s',
    company:'FERRARI',
    url: 'https://www.ferrari.com'
  },
  {
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZP0SfA6JRZjjSXi8Harw5mTFBG6CXFoirNA&s',
    company:'PORSCHE',
    url: 'https://www.porsche.com'
  },
  {
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1xJ-ymqeSx1b7ClV_NC7wYtkiUbwjGw4YHg&s',
    company:'JEEP',
    url: 'https://www.jeep.com'
  },
  {
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Le0sw1CkTQjGZd6KquAm6hn79_oVkPNkuQ&s',
    company:'RENAULT',
    url: 'https://www.renault.com'
  },
  {
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUq9CJ8s2cfiE3WpUZZdLvi3QnhPUUSd6_gA&s',
    company:'HUMMER',
    url: 'https://www.gmc.com/hummer-ev'
  },
  {
    img:'https://cdn.skoda-storyboard.com/2020/11/SKODA-3D-Standard-Logo_sRGB-e1478246875778.png',
    company:'SKODA',
    url: 'https://www.skoda-auto.com'
  },
  {
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgsvueF9dqlJNkDwYe17FNPvx09DckyS_XZg&s',
    company:'LEXUS',
    url: 'https://www.lexus.com'
  },
  {
    img:'https://images-cdn.ubuy.co.in/671099dd55394a09202a4688-mini-cooper-logo-auto-silver-car-bumper.jpg',
    company:'MINI COOPER',
    url: 'https://www.mini.in'
  }
]

  return (
    <div>
      <Section1 users={users} />
      <Section2 />
      <Section details={details} />
      <Section4/>
    </div>
  )
}

export default App