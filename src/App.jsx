import React from 'react';
import Card from './Cards';
function App(){
    return (
        <>
        <h1 className='heading__style'>List of top 5 Netflix Series in 2023</h1>
        <Card imgsrc="https://wallpapercave.com/wp/wp4056410.jpg" 
          title="A Netflix Original Series"
          sname="DARK"
          link="https://www.netflix.com/search?q=Dark&jbv=80100172" />
        <Card imgsrc="https://wallpapercave.com/wp/wp8666655.jpg" 
          title="A Netflix Original Series"
          sname="STRANGER THINGS"
          link="https://www.netflix.com/search?q=STRANGER%20THINGS&jbv=80057281" />
        <Card imgsrc="https://wallpapercave.com/wp/wp9347569.jpg" 
          title="A Netflix Original Series"
          sname="WISH DRAGON"
          link="https://www.netflix.com/search?q=big%20hero%206&jbv=81153694" />
        <Card imgsrc="https://wallpapercave.com/wp/wp10032869.jpg" 
          title="A Netflix Original Series"
          sname="SPIRITED AWAY"
          link="https://www.netflix.com/search?q=CRAZY%20RICH%20&jbv=60023642" />
        <Card imgsrc="https://wallpapercave.com/wp/wp7921116.jpg" 
          title="A Netflix Original Series"
          sname="MY NEIGHBOUR TOTORO"
          link="https://www.netflix.com/search?q=MY%20NEIGHBOUR%20%20TOTORO&jbv=60032294" />
       
      </>
    );
}

export default App;

// import React from 'react';
// // import Sdata from './Sdata';
// import Netflix from './Netflix';
// import Amazon from './Amazon';

// const favSeries="amazon";
// const FavS =()=>{
// if(favSeries==="netflix"){
//   return <Netflix/>; 
// }
// else{
//   return<Amazon/>;
// }
// };

// const App=()=>(
//   <>
//     <h1 className='heading__style'>List of top 5 Netflix Series in 2023</h1>
//     {/* <FavS/>
//     { favSeries==="netflix" ? <Netflix/> : <Amazon/>} */}

//   </>
// );
// export default App;