import { useState,useEffect } from "react";
import { Resizable } from "re-resizable";

import Editor from "./Editor";

function App() {

  const [HTML,setHTML]=useState('');
  const [CSS,setCSS]=useState('');
  const [JS,setJS]=useState('');

  const screenWidth=window.screen.width;
  const [paneWidth,setPaneWidth]=useState({
    widthA:0.3*screenWidth,
    widthB:0.7*screenWidth
  });

  const [activePane,setActivePane]=useState(0);

  useEffect(()=>{
    if(screenWidth<=639){
      setPaneWidth({
        widthA: screenWidth,
        widthB: screenWidth
      })
    }
  },[])


  const icode=`
    <html>
      <style>${CSS}</style>
      <body>
        <div style="word-wrap: break-word">${HTML}</div>
      </body>
      <script>${JS}</script>
    </html>
  `;

  return(
    <>
      <div className="font-black h-6v bg-gray-800 text-defbg flex flex-col justify-around pl-5">CodeQuill</div>
      <div className="h-94v sm:flex overflow-hidden">
        <Resizable 
          size={{
            width: paneWidth.widthA,
            height: '94vh'
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
          minWidth = { screenWidth>=640 ? "10%" : "100%" }
          maxWidth = { screenWidth>=640 ? "90%" : "100%" }
          maxHeight = { screenWidth>=640 ? "100%" : "33.3%"}
        >
          <div className="sm:hidden h-1.2 bg-green-800 text-white pl-5">
            <div className={"inline-block h-full px-1 mr-3 "+(activePane===0? "bg-green-500" : "")}
            onClick={()=>setActivePane(0)}>
              HTML</div>
            <div className={"inline-block h-full px-1 mr-3 "+(activePane===1? "bg-green-500" : "")}
            onClick={()=>setActivePane(1)}>
              CSS</div>
            <div className={"inline-block h-full px-1 mr-3 "+(activePane===2? "bg-green-500" : "")}
            onClick={()=>setActivePane(2)}>
              JavaScript</div>
          </div>
          <span className={ activePane===0 ? "h-auto" : "hidden sm:inline" }>
            <Editor language="xml" name="HTML" value={HTML} onChange={setHTML} />
          </span>
          <span className={ activePane===1 ? "h-auto" : "hidden sm:inline" }>
            <Editor language="css" name="CSS" value={CSS} onChange={setCSS}/>
          </span>
          <span className={ activePane===2 ? "h-auto" : "hidden sm:inline" }>
            <Editor language="javascript" name="JavaScript" value={JS} onChange={setJS} className={ activePane===2? "block" : "hidden" } />
          </span>
        </Resizable>
        <Resizable 
          size={{
            width:paneWidth.widthB,
            height: '94vh'
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
          minWidth= { screenWidth>=640 ? "10%" : "100%" }
          maxWidth= { screenWidth>=640 ? "90%" : "100%" }
          maxHeight= { screenWidth>=640 ? "100%" : "66.6%"}
        >
          <div className="bg-defbg sm:h-94v h-full">
            <iframe srcDoc={icode} sandbox="allow-scripts" title="output" frameBorder="0" width="100%" height="100%"></iframe>
          </div>
        </Resizable>
      </div>
    </>
  );
}

export default App;
