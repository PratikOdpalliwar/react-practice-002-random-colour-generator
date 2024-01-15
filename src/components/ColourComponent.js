import { useState } from "react";

const ColourComponent = () => {
  const [typeOfColour, setTypeOfColour] = useState('hex');
  const [colour,setColour]= useState('#0000000'); 

  return (
    <div style={{
        height:'100vh',
        width:'100vw',
        background :'colour'
    }}>
      <button>Create HEX Colour</button>
      <button>Create RGB Colour</button>
      <button>Create RAndom Colour</button>
    </div>
  );
};

export default ColourComponent;
