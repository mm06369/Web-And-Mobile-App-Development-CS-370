import './Homepage.css';
import { useEffect, useState } from 'react';

export default function DataFormulate(){
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [opencageData, setOpencageData] = useState({})
  
    useEffect(() => {
      fetch("https://ipinfo.io/json?token=c2aec1583cf4d1")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setIsLoading(false);
      });
    }, []);
  
    const renderTableData = () => {
      return (
        <tbody>
          {Object.entries(data).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      );
    };
  
    const handleOpencageClick = () => {
      setIsLoading(true);
      fetch(
        `https://api.opencagedata.com/geocode/v1/json?key=a02f38298198484c92e1343a5f1ee8fa&q=${data.loc}&pretty=1&no_annotations=1`
      )
        .then((response) => response.json())
        .then((data) => {
          setOpencageData(data);
          setIsLoading(false);
        });
    };
  
    const renderOpencageData = () => {
      return (
           
          <div>
          <h1>OpenCage API data</h1>
          <table data={data} />
          </div>
      );
    };
    return (
        <div className = 'company-data'>
        <h1>Company Information</h1>
        <table>
          <thead>
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
          </thead>
          {renderTableData()}
        </table>
      
      {data.hasOwnProperty("loc") && (
          <button onClick={handleOpencageClick} disabled={isLoading}  className = 'btn btn-secondary' id = 'info-btn'>Reverse GeoCode Location</button>
        )}
  
        </div>
    );
}