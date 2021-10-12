import { useState } from "react";
import { Resizable } from "re-resizable";

import Editor from "./Editor";

function App() {

  const screenWidth=window.screen.width;
  const [paneWidth,setPaneWidth]=useState({
    widthA:0.3*screenWidth,
    widthB:0.7*screenWidth
  });

  //on device screen resize 

  return(
    <div className="flex overflow-hidden">
      <Resizable 
        size={{
          width: paneWidth.widthA,
          height: "100vh"
        }}
        onResizeStop={(e,direction,ref,d)=>{
          setPaneWidth({
            widthA: paneWidth.widthA+d.width,
            widthB: paneWidth.widthB-d.width
          });  
        }}
        enable={{
          right:true,
          top:false,
          bottom:false,
          left:false,
          topRight:false,
          bottomRight:false,
          bottomLeft:false,
          topLeft:false,
        }}
        minWidth="10%"
        maxWidth="90%"
      >
        <Editor language="xml" name="HTML" />
        <Editor language="css" name="CSS"/>
        <Editor language="javascript" name="JavaScript" />
      </Resizable>
      <Resizable 
        size={{
          width:paneWidth.widthB,
          height:"100vh"
        }}
        enable={{
          right:false,
          top:false,
          bottom:false,
          left:false,
          topRight:false,
          bottomRight:false,
          bottomLeft:false,
          topLeft:false,
        }}
        minWidth="10%"
        maxWidth="90%"
      >
         <div className="bg-defbg h-screen">
           <div className="h-2/3"></div>
           <div className="h-1/3">
             <div className="h-1.2 bg-blue-800 text-white flex flex-col justify-around pl-5">Console</div>
             <div className="h-8.8 bg-gray-800"></div>
           </div>
         </div>
      </Resizable>
    </div>
  );
}

export default App;
