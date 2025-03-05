import axios from "axios";

export const Backend_Url="http://127.0.0.1:3030";

export const Categories=[
    "Business",
    "Design",
    "Development",
    "Finance & Accounting",
    "Health & Fitness",
    "IT & Software",
    "Lifestyle",
    "Marketing",
    "Music",
    "Office Productivity",
    "Personal Development",
    "Photography & Video",
    "Teaching & Academics"
  ]




 export  function isValidMongoId(id) {
    return /^[a-f\d]{24}$/i.test(id);
}




export async function getData(){
  try{
      const response = await axios.get('https://raw.githubusercontent.com/saihariprasad1246/coupons/refs/heads/main/courses.json');
      const data = response.data

      console.log(data);
      return data;
  }catch(err){
      console.log(err);
  }
}


export function containsSearchQuery(searchQuery, text) {
  if (!searchQuery || !text) return false;
  const status= text.toLowerCase().includes(searchQuery.toLowerCase());
  console.log(status)
  return status
}



export function getIndexes(pageNo,limit){
  const endIndex=(pageNo*limit)
  const startIndex = (pageNo-1)*limit
  return [startIndex,endIndex]
  }
// Example usage:
//console.log(containsSearchQuery("hello", "Hello World!")); // true
//console.log(containsSearchQuery("test", "This is a sample string")); // false
