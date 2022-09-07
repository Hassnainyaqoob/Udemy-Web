import './App.css';
import Logo from './images/logo.png'
import image from './images/second.jpg'
import Form from 'react-bootstrap/Form'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import { DashboardOutlined } from '@mui/icons-material';
import Cards from './components/card';
import StarIcon from '@mui/icons-material/Star';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';


function App() {


  const hotelRooms = [
    {
      img: 'https://images.ctfassets.net/mrop88jh71hl/55rrbZfwMaURHZKAUc5oOW/9e5fe805eb03135b82e962e92169ce6d/python-programming-language.png',
      name: 'Learn Python:The Complete Complte Programming Course',
      price: "Avanash Jain , The Codex",
      rooms: "4.4(899876,987)",
      services: '$89.99',
    },
    {
      img: 'data:image/jpeg;base64,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',
      name: 'Learning Pyhthon For Data Analysis and Visulation',
      price: "Josh Portileya",
      rooms: "4(8998789096,987)",
      services: '$84.99',
    },
    {
      img: 'data:image/png;base64,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',
      name: 'Learn Phython Phython For Beginners',
      price: "Abrar Hussnain",
      rooms: " 879(7680987789) ",
      services: '$87.99',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbr1Q-U1AXMZxdtiYr2N45VRTjX9_dn6kFww&usqp=CAU',
      name: 'Python Beyond Thr Basic Object-Oriented',
      price: "Hassnain Yaqoob",
      rooms: "935(8979898)",
      services: '$74.99',
    },


  ]


  return (

    <div className="container-fluid" style={{ textAlign: "center" }}>

      <div className="row " style={{ height: 74 }}>

        <div className="col-sm-1  " style={{ backgroundColor: "" }}>
          <img src={Logo} alt='logo' style={{ marginLeft: 6, marginTop: "12px" }} width={92} />
        </div>
        <div className="col-sm-1 " style={{ backgroundColor: "" }}>
          <p style={{ fontSize: 14, marginTop: "26px" }}>Categories</p>
        </div>
        <div className="col-sm-5  " style={{ backgroundColor: "" }}>
          <form id='input-header' >
            <SearchIcon id="icon" />
            <Form.Control id='input-first' type="text" placeholder="Search For Anything" />

          </form>
        </div>
        <div className="col-sm-1  p-1" style={{ backgroundColor: "" }}>
          <p style={{ fontSize: 13, marginTop: "22px" }}>Udemy Business</p>
        </div>

        <div className="col-sm-1" style={{ backgroundColor: "white" }}>
          <CheckBoxOutlineBlankOutlinedIcon id="shop-box" />
          <ShoppingCartOutlinedIcon id="shoping-logo" />
        </div>
        <div className="col-sm-1 mt-2"  >
          <button style={{ backgroundColor: "white", color: "black", padding: "8px", fontSize: 15, fontWeight: "bold", width: "100px", height: "45px", marginTop: "7px" }}>Log in</button>
        </div>
        <div className="col-sm-1 mt-2" style={{ backgroundColor: "" }}>
          <button style={{ backgroundColor: "black", color: "white", padding: "8px", fontSize: 15, fontWeight: "bold", width: "100px", height: "45px", marginTop: "7px" }}>Sign up</button>
        </div>
        <div className="col-sm-1" style={{ borderColor: "black" }}>
          <CheckBoxOutlineBlankOutlinedIcon id="counstry-box" />
          <LanguageOutlinedIcon id="country-logo" />
        </div>


      </div>




      <div className='row'>
        <div className='col-12'>
          <img src={image} width="100%" alt='motivateImages' />
        </div>
      </div>



      <div className='row'>
        <div className='col-12'>
          <h2 style={{ color: "black", marginRight: "795px", fontSize: "35px", marginTop: "20px" }}>A Broad Selection of Courses</h2>
        </div>
      </div>


      <div className='row'>
        <div className='col-12'>
          <p style={{ color: "black", marginRight: "650px" }}>Choose from 204,000 online video courses with new additions published every month</p>
        </div>
      </div>




      <div className='row' style={{}}>
        <div className='col-sm-1'>
          <p style={{ fontFamily: "monospace", fontWeight: "bold" }}>Python</p>
        </div>
        <div className='col-sm-1'>
          <p style={{ fontFamily: " monospace" }} >Excel</p>
        </div>
        <div className='col-sm-1'>
          <p style={{ fontFamily: " monospace" }} >Web </p>
        </div>
        <div className='col-sm-1'>
          <p style={{ fontFamily: " monospace" }}>javaScript</p>
        </div>
        <div className='col-sm-1'>
          <p style={{ fontFamily: " monospace" }}>Data</p>
        </div>
        <div className='col-sm-1 p-'>
          <p style={{ fontFamily: " monospace" }}>AWS</p>
        </div>
        <div className='col-sm-1'>
          <p style={{ fontFamily: " monospace" }}>Drawing</p>
        </div>
      </div>




      <div className='container-fluid' style={{ backgroundColor: "", marginRight: "119px", width: "1250px", marginLeft: "13px", border: "1px solid black", marginBottom: "20px" }} >
        <div className='row'>
          <div className='col-sm-12'>
            <p style={{ color: "black", marginRight: "650px", fontFamily: "sans-serif", fontWeight: "bold", fontSize: "23px", marginRight: "695px", marginTop: "25px" }}>Expand your career opportunities with Python</p>

          </div>
        </div>
        <div className='row'>
          <div className='col-8'>
            <p style={{ textJustify: "justify" }}>
              Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Itsss simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to...
            </p>
          </div>
        </div>

        <div className='row'>
          <div className='col-4'>
            <button style={{ backgroundColor: "white", color: "black", padding: "8px", fontSize: 15, fontWeight: "bold", width: "130px", height: "44px", marginTop: "7px", marginRight: "234px" }}>Explore Python</button>

          </div>
        </div>
        <div className='row'>

          {hotelRooms.map((v, i) => (
            <div className='col-3 mt-5'>
              <Cards data={v} key={i} />
            </div>
          ))}
        </div>
      </div>

      <div className='row' style={{ marginTop: "110px", marginBottom: "100px" }}>
        <div className='col-4' >
          <PlayArrowIcon id="star-logo" /> Learn in-demand skills with over 204,000 video courses
        </div>
        <div className='col-4'>
          <StarIcon id="star-logo" />Choose courses taught by In Work real-world experts
        </div>
        <div className='col-4'>
          <AllInclusiveIcon id="star-logo" />Learn at your own pace, with lifetime access on mobile and desktop
        </div>
      </div>

      <div className='row'>
        <div className='col-12'>
          <p style={{ fontWeight: "bold", fontSize: "28px" }}>Top Categories</p>
        </div>
      </div>
      <div className='row' style={{ marginBottom: "35px" }}>
        <div className='col-sm-3' >
          <img src='https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg' alt='' />
          <p style={{ fontWeight: "bold" }}>Design</p>
        </div>
        <div className='col-sm-3'>
          <img src='https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg' alt='' />
          <p style={{ fontWeight: "bold" }}>Development</p>

        </div>
        <div className='col-sm-3'>
          <img src='https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg' alt='' />
          <p style={{ fontWeight: "bold" }}>Marketing</p>


        </div>
        <div className='col-sm-3'>
          <img src='https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg' alt='' />
          <p style={{ fontWeight: "bold" }}>IT And Software</p>

        </div>
      </div>
      <div className='row'>
        <div className='col-sm-3' >
          <img src='https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg' alt='' />
          <p style={{ fontWeight: "bold" }}>Personal Development</p>
        </div>
        <div className='col-sm-3'>

          <img src='https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg' alt='' />
          <p style={{ fontWeight: "bold" }}>Business</p>

        </div>
        <div className='col-sm-3'>
          <img src='https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg' alt='' />
          <p style={{ fontWeight: "bold" }}>Photography</p>


        </div>
        <div className='col-sm-3'>
          <img src='https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg' alt='' />
          <p style={{ fontWeight: "bold" }}>Music</p>

        </div>
      </div>


      <div className='row' style={{backgroundColor:"black",marginTop:"48px"}}>
        <div className='col-2 ' style={{marginRight:"30px"}}>
          <p style={{color:"white",marginTop:"30px"}}>Udemy Business</p>
          <p style={{color:"white" ,marginLeft:"5px"}}>Teach On Udemy</p>
          <p style={{color:"white",marginRight:"21px"}}>Get The App</p>
          <p style={{color:"white",marginRight:"40px"}}>About Us</p>
          <p style={{marginBottom:"70px" ,color:"white",marginRight:"28px"}}>Contact Us</p>
          <img src="data:image/png;base64,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" alt='' width="97px" style={{marginBottom:"30px"}} />
        </div>
        <div className='col-2' style={{marginRight:"30px"}}>
        <p style={{color:"white",marginTop:"30px",marginRight:"10px"}}>Careers</p>
          <p style={{color:"white",marginRight:"22px"}}>Blogs</p>
          <p style={{color:"white",marginLeft:"64px"}}>Help And Support</p>
          <p style={{color:"white",marginRight:"16px"}}>Afiliate</p>
          <p style={{marginBottom:"70px" ,color:"white"}}>Investors</p>
        </div>
        <div className='col-2'>
        <p style={{color:"white",marginTop:"30px",marginRight:"14px"}}>Terms</p>
          <p style={{color:"white",marginLeft:"40px"}}>Privacy Policy</p>
          <p style={{color:"white",marginLeft:"50px"}}>Cookie settings</p>
          <p style={{color:"white"}}>Sitemap</p>
          <p style={{marginBottom:"70px" ,color:"white",marginLeft:"30px"}}>Accessibility </p>
        </div>
        <div className='col-2'></div>
        <div className='col-3' >
            <button style={{ backgroundColor: "black", color: "white", padding: "8px", fontSize: 15, fontWeight: "bold", width: "130px", height: "44px"  ,border: "1px solid white"}} id="explore-button">Explore Python</button>

        </div>

      </div>

    </div>

  );
}

export default App;
