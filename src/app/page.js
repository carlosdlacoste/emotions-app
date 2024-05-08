"use client"
import CSVReader from "@/components/csvReader";
import { useEffect } from "react";

export default function Home({token, handleTokenChange}) {

//   useEffect(() => {
//     const currentToken = sessionStorage.getItem('MiToken')
//         handleTokenChange(currentToken)
// }, [token]);

console.log(token); // Para depuración, verifica que el token se reciba correctamente
  console.log(handleTokenChange); // Para depuración, verifica que handleTokenChange sea una función

  // Intenta llamar a handleTokenChange aquí para ver si el error persiste
  if (typeof handleTokenChange === 'function') {
    handleTokenChange('test'); // Llamada de prueba
  }

  useEffect(() => {
    const currentToken = sessionStorage.getItem('MiToken');
    if (typeof handleTokenChange === 'function') {
      handleTokenChange(currentToken);
      console.log(typeof handleTokenChange)
    }
  }, [handleTokenChange]);

  return (
      <>
          {token ?
            <>
              <CSVReader/>
            </>
            :
            <>
              <div>
                <p>No estas autenticado</p>
              </div>
            </>
        }
      </>
  );
}
