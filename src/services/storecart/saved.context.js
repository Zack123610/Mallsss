import React, { createContext, useState } from "react";

 export const SavedContext = createContext();

 export const SavedContextProvider = ({ children }) => {
   const [saved, setSaved] = useState([]);

   const add = (savedDetails) => {
     setSaved([...saved, savedDetails]);
   };

   const remove = (savedDetails) => {
     const newSaved = saved.filter(
       (x) => x.placeId !== savedDetails.placeId
     );

     setSaved(newSaved);
   };
   return (
     <SavedContext.Provider
       value={{
         saved,
         addToSaved: add,
         removeFromSaved: remove,
       }}
     >
       {children}
     </SavedContext.Provider>
   );
 };