import { useEffect } from "react";
import { createContext, useState } from "react";
const classic = [
    {
      id: 1,
      color: "#f7f2f8",
      name: "Chocolate Brownie Sundae",
     
      delay:0.4
    },
    {
      id: 2,
      color: "#ffeeee",
      name: "Chocolate Brownie Sundae",
      delay:0.5
    },
    {
      id: 3,
      color: "#f6f8e2",
      name: "Chocolate Brownie Sundae",
      delay:0.6
    },
    {
      id: 4,
      color: "#fffaf4",
      name: "Chocolate Brownie Sundae",
      delay:0.7
    },
    {
      id: 4,
      color: "#fffaf4",
      name: "Chocolate Brownie Sundae",
      delay:0.8
    },
  
     {
      id: 4,
      color: "#fffaf4",
     
      name: "Chocolate Brownie Sundae",
      delay:0.9
    },
  ];

export const GblobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setsearchParam] = useState("")
  const [product , setProduct] =useState(classic)
  const [error , setError] =useState(null)
  console.log(product)

  async function handleSubmite(e) {
    e.preventDefault();
    // console.log("Form submitted with:", searchParam);
    try {
      const rest =  await fetch(product)
      const data = await rest.json()
      console.log(data);

      if(data && data.product && data.product.lenght) {
        setProduct
      }
      
      // console.log(rest)
    } catch (error) {
      console.log(error)
      setError(error)
    }
  }
  useEffect(() => {
    handleSubmite()
  }, [])
  return  <GblobalContext.Provider value={{ searchParam, setsearchParam, handleSubmite}}>
      {children}
    </GblobalContext.Provider>;
  ;
}
