import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import DisplayCoupons from '../Components/DisplayCoupons';
import Pagination from '../Components/Pagination';
import { getData,containsSearchQuery,getIndexes} from '../utils/Constants';


function Home() {
  const [searchParams,setSearchParams] = useSearchParams();
  const [totalCoupons,setTotalCoupons]=useState(0)
  const [coupons, setCoupons] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchCoupons = async () => {
    try {
     // const response = await axios.get(`${Backend_Url}/?pageNo=${searchParams.get('pageNo')?searchParams.get('pageNo'):1}&search=${searchParams.get('search')?searchParams.get('search'):""}`); // Replace with your API URL
      //console.log(response.data);
      let data= await getData();
      //console.log(data)
     
      const pageNo=searchParams.get('pageNo') || 1
      const search=searchParams.get('search') || "";
      //console.log(search)
      if(search!=''){
        data=data.filter(item=>containsSearchQuery(search,item.name))
        //console.log("helo")
        
      }
      
      const [startIndex,endIndex]=getIndexes(pageNo,10)

      setTotalCoupons(data.length || 0);
      data=data.slice(startIndex,endIndex)
      //console.log(data,startIndex,endIndex)
      setCoupons(data);
      
    } catch (err) {
      setError("Failed to load coupons");
      //console.log(err.message)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoupons();
  }, [searchParams.get('pageNo'),searchParams.get('search')]);

  return (
    <>
      <DisplayCoupons loading={loading} coupons={coupons} error={error} />
      <Pagination setSearchParams={setSearchParams} totalCoupons={totalCoupons}/>
    </>
  );
}

export default Home;
