import React from 'react'
import { useParams,useNavigate,useSearchParams } from 'react-router-dom'
import {useState,useEffect} from 'react'
import DisplayCoupons from '../Components/DisplayCoupons';
import Pagination from '../Components/Pagination';

import { getData,getIndexes,Categories } from './../utils/Constants';


function CategoryCoupons() {
  const {category}=useParams();
  const [searchParams,setSearchParams]=useSearchParams();
  const [totalCoupons,setTotalCoupons]=useState(0)
  const navigate = useNavigate();
  const [coupons, setCoupons] = useState([]);
  const [error,setError]=useState("")
  const [loading,setLoading]=useState(true)

  const fetchCoupons = async () => {
    try {
      //console.log(category)
      
//const response = await axios.get(`${Backend_Url}/category/${category}/?pageNo=${searchParams.get('pageNo') ||  1}`); // Replace with your API URL
let data= await getData(); 
data=data.filter(coupon=>coupon.category==category)
console.log(data)
const pageNo=searchParams.pageNo || 1
setTotalCoupons(data.length || 0);  
const [startIndex,endIndex]=getIndexes(pageNo,10)


setCoupons(data.slice(startIndex,endIndex));
      
      //console.log(response.data)
    } catch (err) {
      setError("Failed to load coupons");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoupons()
  }, [category,searchParams]);

  return (
    <>
    <DisplayCoupons loading={loading} coupons={coupons} error={error} />
    <Pagination totalCoupons={totalCoupons} />
    </>
  )
}

export default CategoryCoupons