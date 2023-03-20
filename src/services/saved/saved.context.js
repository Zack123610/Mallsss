import React, { createContext, useState } from "react";

 export const SavedContext = createContext();

 export const SavedContextProvider = ({ children }) => {
   const [saved, setSaved] = useState([]);

   const add = (store) => {
     setSaved([...saved, store]);
   };

   const remove = (store) => {
     const newSaved = saved.filter(
       (x) => x.placeId !== store.placeId
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