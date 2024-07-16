//    updater-function = A function passed as an argument to setState() usally 
//                       example : setYear( year => year + 1 )
//                       allow for safe updates based on the previous state Used with multiple state , 
//                       updates an asynchronous functions Good practise to use updater functions.


// its means that if we can update the functions like this 
// set(count +1);
// set(count +1);
// set(count +1);

// its doesnot work and when we can call it by arrow function 
// and additional like prevcount parameter in your code.

// like this // setCount(prevCount => prevCount +1 );
// like this // setCount(prevCount => prevCount -1 );
// and not used in reset function beacuse it call zero 
// so their is no need to apply updater function 


// src/MyComponents.jsx
// import { useState } from "react";

// function MyComponents() {
//     const [count, setCount] = useState(0);

//     function increment() {
//         setCount(prevCount => prevCount + 1);
//     }

//     function decrement() {
//         setCount(prevCount => prevCount - 1);
//     }

//     function reset() {
//         setCount(0);
//     }

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//             <div className="p-4 bg-white rounded shadow-md">
//                 <p className="text-2xl font-bold mb-4">Count: {count}</p>
//                 <div className="space-x-2">
//                     <button
//                         onClick={increment}
//                         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
//                     >
//                         Increment
//                     </button>
//                     <button
//                         onClick={decrement}
//                         className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
//                     >
//                         Decrement
//                     </button>
//                     <button
//                         onClick={reset}
//                         className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
//                     >
//                         Reset
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default MyComponents;



// update objects in state 

import { useState } from "react";


function MyComponents(){
   
   const[car, setCar] = useState({
                                year : 2024 ,
                                make : "Ford",
                                model : "Mustang"
                                    });
   
    function handleYear(event){
        setCar(c => ({...c , year: event.target.value}))
    }
    function handleMake(event){
        setCar(c => ({...c , make: event.target.value}))
    }   
    function handleModel(event){
        setCar(c => ({...c , model: event.target.value}))
    }
   
    return(
        <>
        <div>
            <p> the launching date  of the car is : {car.year}</p>
            <p> the brand name of the car is : {car.make}</p>
            <p> the the model name of the car is : {car.model}</p>
        </div>


        <input type="number" value={car.year} onChange={handleYear} />
        <input type="text" value={car.make} onChange={handleMake} />
        <input type="text" value={car.model} onChange={handleModel} />
        </>
    );
}

export default MyComponents;