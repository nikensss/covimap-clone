import Card from "../card/Card"
import "./trackerOne.css"
const TrackerOne = () => {
  return (
    
    <div className="rigthContent">
        <div className="containerSelector">
            <div className="countrySelectBox">
                <select>
                 <option value="AL">Albania</option>
                 <option value="AL">Albania</option>
                </select>
                <div className="countryPicker"></div>
            </div>                
            <div className="updapteOn">
            Updated: June 5, 2022 
            </div>
        </div>
        <div className="row">
            <div className="rightInfo">
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