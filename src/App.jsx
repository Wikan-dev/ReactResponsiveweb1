import logo from "./assets/logo.png"
import ilustrasi from "./assets/ilustrasi.png"
import cc from "./assets/check_circle.png"
import ils2 from "./assets/ilustrasi2.png"
import Icon1 from "./assets/Icon-images.png"
import Icon2 from "./assets/Icon-images1.png"
import Icon3 from "./assets/3.png"
import Icon4 from "./assets/1.png"
import photo from "./assets/photo.png"
import ils3 from "./assets/ilustrasi3.png"
import { useState, useRef } from "react"

const Menu = ({ desk , width }) => {
  console.log(width);

  return (
    <div className="bg-white rounded-full h-13 flex p-4" style={{width : width}}>
      <img src={cc} alt="check" />
      <h1 className="font-bold ml-2 text-[15px]">{desk}</h1>
    </div>
  )
}

const Card = ({ num, img, tile, p, bg}) => {
  return (
    <div className="p-10 max-w-180 shrink lg:w-80 rounded-[50px]" style={{backgroundColor : bg}}> 
      <img src={img} alt="icon" />
      <h1 className="font-[400] text-[96px]">{num}</h1>
      <div className="relative -top-4 flex gap-5 flex-col w-60">
        <h1 className="font-[500] text-[30px]">{tile}</h1>
        <p className="text-[20px] w-40">{p}</p>
      </div>
    </div>
  )
} 

const Option = ({ title, desk }) => {
  const container = useRef(null);
  const para = useRef(null);

  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow(!isShow);
  }

  return (
    <div ref={container} className="w-full h-50 bg-white rounded-[50px] px-10 py-10 flex justify-between transition-all duration-2s" style={{height : !isShow ? "100px" : "300px"}}>
      <div className="flex flex-col">
        <h1 className="font-bold mb-5 flex" style={{bottom : isShow ? "20px" : ""}}>{title}</h1>
        <p ref={para} style={{display : isShow ? "block" : "none"}} className="flex">{desk}</p>
      </div>
      <button onClick={handleShow} style={{top: isShow ? "80px" : ""}} className="font-[200] text-[50px] text-[#F9B800] xl:mr-10 h-10 bottom-9 relative transition-all duration-2s xl:w-20 h-15">{!isShow ? "-" : "+"}</button>
    </div>
  )
}

const App = () => {
  return (
    <div className="bg-[#FFF1C9] px-5 lg:px-20 pt-10 ">
      <div className="w-full bg-white h-15 rounded-full flex">
        <img src={logo} alt="logo" className="bg-red-500 mx-auto h-10 mt-2" />
      </div>
      {/* header */}
      <div>
        <div className="flex flex-col-reverse 2xl:flex-row flex-wrap justify-center">
          <div className="flex flex-col xl:m-15">
            <div className="flex flex-col">
              <h1 className="font-bold text-[#F9B800]">RISUS PREASENT VULPUTATE</h1>
              <h1 className="font-bold text-[50px]/15 mb-10">Cursus Integer Consequat Tristique.</h1>
            </div>
            <div className="gap-3 flex flex-col">
              <div className="flex gap-3 flex-col md:flex-row">
                <Menu width='fit-content' desk="Cursus Integer" />
                <Menu width='fit-content' desk="Integer Consequat" />
              </div>
              <div className="flex gap-3 flex-col md:flex-row">
                <Menu width='fit-content' desk="Tellus Euismod Pellentesque" />
                <Menu width='fit-content' desk="Cursus Integer" />
              </div>
              <div className="flex gap-3 flex-col md:flex-row">
                <Menu width='fit-content' desk="Pellentesque Tempus" />
                <Menu width='fit-content' desk="Mauris Fermentum Present" />
              </div>
              <button className="bg-[#F9B800] w-auto max-w-80 text-[20px] h-15 font-bold rounded-full flex flex-end pl-10 pt-4 mt-10">Lorem Ipsum</button>
            </div>
          </div>
          
          <img src={ilustrasi} alt="image" className="w-100 h-100 2xl:mt-20"/>
        </div>        
      </div>
      <div className="w-full min-[1110px]:h-220 h-520 bg-[#F9B800] absolute left-0 mt-50 -skew-y-10"></div>
      <div className="z-10 relative flex flex-row-reverse top-30 xl:justify-between flex-wrap justify-center">
        <img src={ils2} alt="ilustrasi" className="w-150 h-150 mt-30 md:mt-50" />
        <div className="min-[1110px]:mt-90 ">
          <h1 className="font-bold text-[30px] text-center sm:text-left md:text-[50px] w-auto md:max-w-100">Phasellus a vitae iaculis magna eleifend pulvinar velit odio.</h1>
          <p className="w-auto max-w-100 text-center xl:text-left">Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis vulputate et vulputate suspendisse natoque id tellus consectetur pulvinar et. </p>
          <button className="bg-black w-80 text-[20px] text-white h-15 font-bold rounded-full flex flex-end pl-10 pt-4 mt-10">Lorem Ipsum</button>
        </div>
      </div>

      <div className="w-full h-450 bg-[#262626] absolute left-0 mt-50 -skew-y-10 z-10"></div>
      <div className="relative top-100 flex justify-between z-20 flex-wrap  justify-center">
        <div className="relative z-20 -top-20 xl:top-100 w-100 ">
          <h1 className="text-[#F9B800] text-[10px] xl:text-[30px]">Quisque porttitor vitae vel amet neque scelerisque mattis. Consectetur nibh velit magna consectetur leo. </h1>
          <h1 className="font-[400] text-[30px] text-white">Cursus Integer Conseq Aliquam Tristique. </h1>
          <button className="bg-white w-80 text-[20px] text-black h-15 font-bold rounded-full flex flex-end pl-10 pt-4 mt-10">Lorem Ipsum</button>
        </div>
        <div className="flex gap-10 flex-wrap justify-center">
          <div className="flex gap-10 flex-col">
            <Card num="1" tile="Phasellus Vitae" p="Porttitor vitae vel amet" img={Icon4} bg="white" />
            <Card num="3" tile="Phasellus Vitae" p="Porttitor vitae vel amet" img={Icon1} bg="#F9B800" />
          </div>
          <div className="flex gap-10 flex-col relative xl:top-50">
            <Card num="2" tile="Phasellus Vitae" p="Porttitor vitae vel amet" img={Icon2} bg="#F9B800" />
            <Card num="4" tile="Phasellus Vitae" p="Porttitor vitae vel amet" img={Icon3} bg="white" />
          </div>
        </div>
      </div>
      <div className="w-full h-800 min-[1600px]:h-520 bg-[#F9B800]  absolute left-0 mt-50 -skew-y-10"></div>
      <div className="w-full p-20 bg-white relative z-10 top-200 rounded-[100px] flex flex-row flex-wrap md:flex-row justify-center">
        <img src={photo} alt="photo" className="rounded-full w-80" />
        <div className="flex flex-col ml-10 mt-20">
          <h1 className="font-[400] text-[40px]">What Our Customers Thought?</h1>
          <p className="max-w-200 mt-5">Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. </p>
        </div>
      </div>

        <div className="flex flex-col-reverse xl:flex-row relative z-10 mt-220 xl:px-15 xl:justify-between flex-wrap justify-center">
          <div className="flex flex-col  xl:m-15">
            <div className="flex flex-col">
              <h1 className="font-[300] max-w-120 text-[50px]/15 mb-10">Cursus Integer Consequat Tristique.</h1>
            </div>
            <div className="gap-3 flex flex-col">
              <div className="flex gap-3 flex-col md:flex-row">
                <Menu width='fit-content' desk="Cursus Integer" />
                <Menu width='fit-content' desk="Integer Consequat" />
              </div>
              <div className="flex gap-3 flex-col md:flex-row">
                <Menu width='fit-content' desk="Tellus Euismod Pellentesque" />
                <Menu width='fit-content' desk="Cursus Integer" />
              </div>
              <div className="flex gap-3 flex-col md:flex-row">
                <Menu width='fit-content' desk="Pellentesque Tempus" />
                <Menu width='fit-content' desk="Mauris Fermentum Present" />
              </div>
              <button className="bg-[#262626] w-auto text-[20px] text-white h-15 font-bold rounded-full flex flex-end pl-10 pt-4 mt-10">Lorem Ipsum</button>
            </div>
          </div>
          <img src={ils3} alt="image" className="w-100 h-100 mt-20"/>
        </div>
        {/* option menu */}
        <div className="relative z-20 flex gap-10 flex-col top-120" >
          <div>
            <h1 className="relative z-30 text-white font-[300] text-[90px] text-center">
              this is the main title
            </h1>
            <p className="relative z-30 text-white text-[20px] text-center mb-30 max-w-150 mx-auto">
              this is the main paragraph of this website nothing special here, but you can put something here if you want
            </p>
          </div>
          <Option title="lorem ipsum bla ble blu" desk="Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod." />
          <Option title="lorem ipsum bla ble blu" desk="Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod." />
          <Option title="lorem ipsum bla ble blu" desk="Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod." />
          <Option title="lorem ipsum bla ble blu" desk="Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod." />
          <Option title="lorem ipsum bla ble blu" desk="Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod." />
          <Option title="lorem ipsum bla ble blu" desk="Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod." />
          <Option title="lorem ipsum bla ble blu" desk="Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod." />
        </div>

        <div className="w-full h-420 30 bg-[#262626] absolute left-0 -mt-280 -skew-y-10"></div>
      
        <div className="w-full h-260 bg-[#FFF1C9]"></div>

        <div className="relative z-10 bottom-70 flex flex-wrap">
          <h1 className="font-[300] text-[50px] max-w-200">
            Vulputate et pulvinar ethre Suspendisse tellus consecteur
          </h1>
          <button className="bg-[#262626] flex top-5 relative xl:ml-auto w-80 text-[20px] text-white h-15 font-bold rounded-full flex flex-end pl-10 pt-4 mt-10">Lorem Ipsum</button>
          
          <div className="h-70 w-full flex flex-wrap">
            <h1 className="mt-20 md:mt-40 mr-10 auto">
              Copyright © 2022 Lorem Ipsum.
            </h1>
            <h1 className="-mt-20 md:mt-40 md:ml-auto max-md:mr-50 ">
              Copyright © 2022 Lorem Ipsum dasd.
            </h1>
          </div>
        </div>
    </div>
  )
}

export default App