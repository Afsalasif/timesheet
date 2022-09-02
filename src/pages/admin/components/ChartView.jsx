import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { db } from '../../../firebase'

const ChartView = () => {

    const [viewChart,setViewChart]=React.useState({})
    const [chartData,setChartData]=React.useState({})
    const [keyrr,setKeyrr]=React.useState()

    React.useEffect(()=>{
        chartviewgetdata()
    },[])
   

    const chartviewgetdata = async () => {
        const querySnapshot = await getDocs(collection(db, "todos"));

        querySnapshot.forEach((doc) => {
            setViewChart((prevstate) => ({
                ...prevstate, 
                [doc.id] : doc.data()
            }))
            // console.log(doc.id, " => ", doc.data());
        });
        // setSnap(querySnapshot)

    }
     

    useEffect(()=>{
    setKeyrr(Object.keys(viewChart))
    console.log(keyrr)
   

    },[])
    console.log(viewChart)
    console.log(keyrr)
    
    // setChartData((prevstate)=>({
    //     ...prevstate,
    //     [viewChart[keyrr[0]].userdataid]:viewChart[keyrr[0]].userdataid+1
    // }))
    // console.log(chartData)







  return (
    <div>ChartView</div>
  )
}

export default ChartView