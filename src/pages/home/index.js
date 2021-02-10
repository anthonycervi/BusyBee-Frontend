import React, {useRef, useState, useEffect} from 'react';
import axios from 'axios';
import Button1 from '../../comps/Button1';
import Button2 from '../../comps/Button2';
import DateDropdown from '../../comps/Date';
import TimeDropdown from '../../comps/Time'
import DeleteTaskCard from '../../comps/DeleteTaskCard';
import TaskCard from '../../comps/TaskCard';
import Header from '../../comps/Header';
import FilterBy from '../../comps/FilterBy'
import FadeIn from 'react-fade-in';
import AddTaskCard from '../../comps/AddTaskCard'

//This page emulates a mobile interface

const Home = () =>{
// Preview / Updates Practices
//Fake Database with Information on the Title, Driver, Vehicle, etc.
const fakedb = [
    {
        TitleText:"Take Susie to School",
        DriverText:"Sarah",
        VehicleText:"Honda Civic",
        TimeText:"9:45AM",
        namecolor:"#0000FF",
        vehiclecolour:"tomato"
    },
    {
        TitleText:"Take Tim to School",
        DriverText:"Dad",
        VehicleText:"Tesla",
          namecolor:"#0000FF",
        vehiclecolour:"tomato"
    },
    {
        TitleText:"Take Jimmy himmy to School",
        DriverText:"Henry",
        VehicleText:"Lambo"
        ,
          namecolor:"#0000FF",
        vehiclecolour:"tomato"
    },
    {
        TitleText:"Take Tom to School",
        DriverText:"Dave",
        VehicleText:"Buggy"
        ,
          namecolor:"#0000FF",
        vehiclecolour:"tomato"
    },
    {
        TitleText:"Take Barry B Benson to the Hive",
        DriverText:"Dad",
        VehicleText:"Plane"
        ,
          namecolor:"#0000FF",
        vehiclecolour:"tomato"
    },
    {
        TitleText:"Take Bon. Eless Pizza to School",
        DriverText:"Dave",
        VehicleText:"Honda Civic"
        ,
          namecolor:"#0000FF",
        vehiclecolour:"tomato"
    },
    {
        TitleText:"Pick up Rob",
        DriverText:"Sally",
        VehicleText:"Ferrari"
        ,
          namecolor:"#0000FF",
        vehiclecolour:"tomato"
    },
    {
        TitleText:"Take Tom to Practice",
        DriverText:"Dave",
        VehicleText:"Porsche"
        ,
          namecolor:"magenta",
        vehiclecolour:"green"
    }
]    
//Preview Components on Page; Title, Time, Driver Name, Vehicle Name, Hour,Minute,Meridian: [WORKING]
    const [TitleText,setTitle] = useState([]);
    const [HourTime,setHourTime] = useState([]);
    const [MinuteTime,setMinuteTime] = useState([]);
    const [MeridianTime,setMeridianTime] = useState([]);
    const [DriverText,setDriver] = useState([]);
    const [VehicleText,setVehicle] = useState([]);
    const [DateText,setDateText] = useState([]);
    const [alldb, setAllDb] = useState([]);
    const [namecolor, setnamecolor] = useState([]);
    const [vehiclecolour, setvehiclecolour] = useState([]);
   
    var ShowTask = false;
  
//Async get DB [WILL BE REPLACED WITH REAL DATABASE LINK]
    const GetDB = async() => {
        var arr = fakedb.slice(0,8);
        setAllDb(arr)
    }

    //Handles information from the form to update preview. [ADD TO DB FROM SAM]
    const HandleFormComplete = async ({TitleText, HourTime, MinuteTime, MeridianTime, DriverText,VehicleText,compDate, ColourValue, VehicleNameColour}) => {
    setTitle(TitleText);
    setHourTime(HourTime);
    setMinuteTime(MinuteTime);
    setMeridianTime(MeridianTime)
    setDriver(DriverText);
    setVehicle(VehicleText);
    setDateText(compDate);
    console.log(ColourValue)
    setnamecolor(ColourValue)
    setvehiclecolour(VehicleNameColour)
    }

    //Filter 1 Vehicle, needs to be integrated into real database.
    const OnFilterVehicle = (text) => {
        //console.log(text, alldb);
        setAllDb(fakedb.filter((o)=>{
            //console.log(o.VehicleText);
          return o.VehicleText.includes(text);
        })
        )
      }

    //Filter 1 Name, needs to be integrated into real database.
    const OnFilterName = (text) => {
        setAllDb(fakedb.filter((o)=>{
          return o.DriverText.includes(text);
        })
        )
      }
     
    //Will be replaced with real DB async
      useEffect(()=>{
        GetDB()
      },[]);

    var left = 0 + 'px';
    var top = 0 + 'px';
    var padding = 0 + 'px';
    return <FadeIn><div>
    <div className="main">
                <Header></Header>
               
                <FilterBy onFilterVehicle={OnFilterVehicle} onFilterName={OnFilterName}></FilterBy>
                
              <div className="ScrollDiv">
               
                  {/* Maps out the fake database and assigns those values directly to the comps */}

                {alldb.map(o=>{
                    return <TaskCard namecolor={o.namecolor} vehiclecolor={o.vehiclecolour} DateText={o.DateText}HourText={o.HourTime} MinuteText={o.MinuteTime} MeridianText={o.MeridianTime} TitleText={o.TitleText} DriverText={o.DriverText} VehicleText={o.VehicleText}>
                        {o.TitleText} - {o.VehicleText} - {o.DriverText} - {o.HourText} - {o.MinuteText} - {o.MeridianText} - {o.DateText}
                    </TaskCard>
                })}
                </div > 
                <div className="Button1">
                    <Button2  onClick={()=>{
                    ShowTask(true)
                }}></Button2>
           
                </div>           
                </div>

                    {/* Controls / Fade in animation on the form */}

            <FadeIn delay={150} transitionDuration={1600}>
            <div className="card" style={{padding, left, top,position:'relative'}}>
       
            </div>
            <AddTaskCard onPreview={HandleFormComplete} onPress={console.log(TitleText)}></AddTaskCard>
            </FadeIn>
            </div>
            </FadeIn>
}

export default Home;