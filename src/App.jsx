import logo from "./assets/logo.png"
import ilustrasi from "./assets/ilustrasi.png"
import cc from "./assets/check_circle.png"
import ils2 from "./assets/ilustrasi2.png"
import Icon1 from "./assets/Icon-images.png"
import Icon2 from "./assets/Icon-images1.png"
import Icon3 from "./assets/3.png"
import Icon4 from "./assets/1.png"
import photo from "./assets/photo.png"


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
    <div className="p-10 w-80 rounded-[50px]" style={{backgroundColor : bg}}>
      <img src={img} alt="icon" />
      <h1 className="font-[400] text-[96px]">{num}</h1>
      <div className="relative -top-4 flex gap-5 flex-col w-60">
        <h1 className="font-[500] text-[30px]">{tile}</h1>
        <p className="text-[20px] w-40">{p}</p>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div className="bg-[#FFF1C9] h-500 px-20 pt-10">
      <div className="w-full bg-white h-15 rounded-full flex">
        <img src={logo} alt="logo" className="bg-red-500 mx-auto h-10 mt-2" />
      </div>
      <div>
        <div className="flex flex-row">
          <div className="flex flex-col m-15">
            <div className="flex flex-col">
              <h1 className="font-bold text-[#F9B800]">RISUS PREASENT VULPUTATE</h1>
              <h1 className="font-bold text-[50px]/15 mb-10">Cursus Integer Consequat Tristique.</h1>
            </div>
            <div className="gap-3 flex flex-col">
              <div className="flex gap-3">
                <Menu width='fit-content' desk="Cursus Integer" />
                <Menu width='fit-content' desk="Integer Consequat" />
              </div>
              <div className="flex gap-3">
                <Menu width='fit-content' desk="Tellus Euismod Pellentesque" />
                <Menu width='fit-content' desk="Cursus Integer" />
              </div>
              <div className="flex gap-3">
                <Menu width='fit-content' desk="Pellentesque Tempus" />
                <Menu width='fit-content' desk="Mauris Fermentum Present" />
              </div>
              <button className="bg-[#F9B800] w-80 text-[20px] h-15 font-bold rounded-full flex flex-end pl-10 pt-4 mt-10">Lorem Ipsum</button>
            </div>
          </div>
          
          <img src={ilustrasi} alt="image" />
        </div>        
      </div>
      <div className="w-full h-220 bg-[#F9B800] absolute left-0 mt-50 -skew-y-10"></div>
      <div className="z-10 relative flex flex-row-reverse top-30 justify-between flex-wrap">
        <img src={ils2} alt="ilustrasi" className="w-150 h-150 mt-50" />
        <div className="mt-90">
          <h1 className="font-bold text-[50px] w-100">Phasellus a vitae iaculis magna eleifend pulvinar velit odio.</h1>
          <p className="w-100">Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis vulputate et vulputate suspendisse natoque id tellus consectetur pulvinar et. </p>
          <button className="bg-black w-80 text-[20px] text-white h-15 font-bold rounded-full flex flex-end pl-10 pt-4 mt-10">Lorem Ipsum</button>
        </div>
      </div>

      <div className="w-full h-450 bg-[#262626] absolute left-0 mt-50 -skew-y-10 z-10"></div>
      <div className="relative top-100 flex justify-between z-20">
        <div className="relative z-20 top-100 w-100 ">
          <h1 className="text-[#F9B800]">Quisque porttitor vitae vel amet neque scelerisque mattis. Consectetur nibh velit magna consectetur leo. </h1>
          <h1 className="font-[400] text-[30px] text-white">Cursus Integer Conseq Aliquam Tristique. </h1>
          <button className="bg-white w-80 text-[20px] text-black h-15 font-bold rounded-full flex flex-end pl-10 pt-4 mt-10">Lorem Ipsum</button>
        </div>
        <div className="flex gap-10">
          <div className="flex gap-10 flex-col">
            <Card num="1" tile="Phasellus Vitae" p="Porttitor vitae vel amet" img={Icon4} bg="white" />
            <Card num="3" tile="Phasellus Vitae" p="Porttitor vitae vel amet" img={Icon1} bg="#F9B800" />
          </div>
          <div className="flex gap-10 flex-col relative top-50">
            <Card num="2" tile="Phasellus Vitae" p="Porttitor vitae vel amet" img={Icon2} bg="#F9B800" />
            <Card num="4" tile="Phasellus Vitae" p="Porttitor vitae vel amet" img={Icon3} bg="white" />
          </div>
        </div>
      </div>
      <div className="w-full h-450 bg-[#F9B800]  absolute left-0 mt-50 -skew-y-10"></div>
      <div className="w-full p-20 bg-white relative z-10 top-200 rounded-[100px] flex ">
        <img src={photo} alt="photo" className="rounded-full w-80" />
        <div className="flex flex-col ml-10 mt-20">
          <h1 className="font-[400] text-[40px]">What Our Customers Thought?</h1>
          <p className="max-w-200 mt-5">Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. </p>
        </div>
      </div>
    </div>
  )
}

export default App