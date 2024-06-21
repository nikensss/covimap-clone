import Card from "../card/Card"
import "./trackerOne.css"
const TrackerOne = () => {
  return (
    
    <div id="rigthContent" className="overflow-hidden block absolute w-3/5 bg-[#f7f8fc] left-[500px];
  outline: none;">
        <div id="containerSelector" className="items-center justify-between flex mb-[30px] pb-[15px] border-b-[rgba(0,0,0,0.1)] border-b border-solid;"> 
            <div className="countrySelectBox">
                <select>
                 <option value="AL">Albania</option>
                 <option value="AL">Albania</option>
                </select>
                <div className="countryPicker"></div>
            </div>                
            <div id="updapteOn" className="text-black font-medium text-base;">
            Updated: June 5, 2022 
            </div>
        </div>
        <div id="row" className="flex flex-wrap mr-[-15px] ml-[-15px];">
            <div id="rightInfo" className="flex flex-wrap mr-[-15px] ml-[-15px] px-[15px];">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="Mapa"></div>
        </div>
 
    </div>

    

  )}

  export default TrackerOne;