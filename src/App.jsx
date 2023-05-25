import { useContext } from 'react'
import { useState } from "react";
import CustomInput from "./components/CustomInput";
import MyButton from "./components/MyButton";
import { LocalStorageContext } from './provider/LocalStorageContainer';


function App() {
  const { getUserNameFromLocalStorage, setNameInLocalStorage } = useContext(LocalStorageContext);
  const [username, setUsername] = useState("");
  const handleUsernameInput = (event) => {
    setUsername(event.target.value)
  }
  const saveUserName = () => {
    setNameInLocalStorage(username)
    setUsername("");
  }


  return (
    <>
      <CustomInput name='buttonType' label="Enter Username" onChange={handleUsernameInput} placeholder='Please enter Username' />
      <MyButton label="Save" handleClick={saveUserName} />
      {/* <CustomInput name='buttonType' label="Enter Type" onChange={handleOnInput} placeholder='Please enter Button Type' />
      <CustomInput name='buttonLabel' label="Enter Label" onChange={handleOnInput} placeholder='Please enter Button Label' />
      <MyButton label="Create Button" handleClick={handleCreateButtonClick} /> */}
      <div className="mt-3" >
        {
          <>
            {getUserNameFromLocalStorage()}
          </>
        }
        {/* <div className="row" >
          {
            buttonList.length > 0 && (
              buttonList.map((_button, _index) => {
                return (
                  <div key={_index} className="col-md-2" >
                    <MyButton key={_index} label={_button.label} type={_button.type} />
                  </div>
                )
              })
            )
          }
        </div> */}
      </div>
    </>
  );
}

export default App;

