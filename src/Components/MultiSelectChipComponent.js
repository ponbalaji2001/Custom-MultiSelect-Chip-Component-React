import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";

const MultiSelectChip = () => {
  const [options, setOptions] = useState([
    { id:'1', name: 'Tony Stark', mail: 'stark064@example.com', img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Robert_Downey%2C_Jr._2012.jpg/1200px-Robert_Downey%2C_Jr._2012.jpg' },
    { id:'2', name: 'Loki Laufeyson',  mail:'loki167@example.com', img_url: 'https://pbs.twimg.com/media/EfZ7KofWkAQzzWH.jpg' },
    { id:'3', name: 'Steve Roger', mail: 'steveroger479@example.com', img_url: 'https://storage.ning.com/topology/rest/1.0/file/get/437470695?profile=RESIZE_710x&width=288&height=288&crop=1%3A1' },
    { id:'4', name: 'Natasha Romanoff', mail: 'natasha876@example.com', img_url: 'https://i.pinimg.com/474x/04/cb/9a/04cb9aad78281ce940c558a1974aa371.jpg' },
    { id:'5', name: 'Stephen Vincent Strange', mail: 'stephen852@example.com', img_url: 'https://www.denofgeek.com/wp-content/uploads/2021/12/WebStory-Benedict-Cumberbatch.jpg' },
    { id:'6', name: 'Bruce Banner', mail: 'bruce234@example.com', img_url: 'https://d2rbybg5ibx87t.cloudfront.net/images/25690/original.jpg?1384581321' },
    { id:'7', name: 'Clint Barton', mail: 'clint678@example.com', img_url: 'https://i.pinimg.com/originals/1b/77/19/1b77198759f5ac095b8046f028ca6c85.jpg' },
    { id:'8', name: 'Chris Hemsworth', mail: 'chris453@example.com', img_url: 'https://parade.com/.image/t_share/MTk4MTc5MTg4OTYyNzYzODQ4/screen-shot-2023-05-24-at-42317-pm.png' },
    { id:'9', name: 'Tom Holland ', mail: 'tom578@example.com', img_url: 'https://i.pinimg.com/originals/58/bd/f7/58bdf7879d8aa4461df776279df981fa.jpg' },
    { id:'10', name: 'Brie Larson', mail: 'brie473@example.com', img_url: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Captain_Marvel_trailer_at_the_National_Air_and_Space_Museum_4_%28cropped%29.jpg' },
  ]);

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  const handleInputChange = (event) => {
    setFilterText(event.target.value);
    setShowOptions(true);
  };

  const handleOptionClick = (option) => {
    setSelectedOptions([...selectedOptions, option]);
    setOptions(options.filter((item) => item.name !== option.name));
    setFilterText('');
    setShowOptions(false);
  };

  const handleChipRemove = (option) => {
    setSelectedOptions(selectedOptions.filter((item) => item.name !== option.name));
    setOptions([...options, option]);
  };

  return (
    <div>
      <h1 style={{textAlign:"center", color:'blue'}}>Pick Users</h1>
      <div style={{ display:'flex', flexWrap:'wrap', width:'1000px', alignItems:'center', borderBottom: '3px solid blue'  }}>
        {selectedOptions.map((option) => (
          <div key={option.id} style={{ margin:'8px', border:'1px solid #ccc', borderRadius:'50px', height:'35px', display:'flex', alignItems:'center', backgroundColor:"#D4D4D4" }}>
            {option.img_url && <img src={option.img_url} alt="profile" style={{ width: '35px', height: '35px', borderRadius: '50%', marginRight: '8px' }} />}
            <p style={{marginRight:'8px', fontWeight:'500'}}>{option.name}  </p>
            <span style={{ cursor: 'pointer',  paddingTop:'5px', marginRight:'8px'}} onClick={() => handleChipRemove(option)}>
            <AiOutlineClose />
            </span>
          </div>
        ))}
        <div>
         <input type="text" placeholder="Add new user..." value={filterText} onChange={handleInputChange} onClick={()=>setShowOptions(true)}
          style={{border: 'none', outline: 'none', width: 'auto', height:'30px', fontSize:'16px', padding:'10px', position: 'relative', flex: 1 }}
        />
        {showOptions && (
       <div style={{backgroundColor:'white', width:'max-content', height:'auto', maxHeight:'340px', overflowY:'auto', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', position:'absolute'}}>
        {options
          .filter((option) => option.name.toLowerCase().includes(filterText.toLowerCase()))
          .map((option) => (
            <div key={option.id} onClick={() => handleOptionClick(option)} class='user-options' style={{ display:'flex', alignItems:'center', justifyContent:'flex-start', flexDirection:'row', padding:'10px 20px 10px 20px'}}>
              {option.img_url && <img src={option.img_url} alt="profile"  style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight:'30px' }} />}
              <h4 style={{ marginRight:'30px', width:'190px', overflow: 'hidden', textOverflow: 'ellipsis'}}>{option.name}</h4>
              <p style={{  maxWidth:'250px',  overflow: 'hidden', textOverflow: 'ellipsis' }}>{option.mail}</p>
            </div>
          ))}
      </div>)}
      </div>
      </div>
    </div>
  );
};

export default MultiSelectChip;
