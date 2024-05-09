"use client"
import CSVReader from "@/components/csvReader";
import { useEffect, useContext} from "react";
import { AuthContext } from "@/context/appContext";

export default function Home() {
  const { token, updateToken } = useContext(AuthContext);

  useEffect(() => {
    const currentToken = sessionStorage.getItem('MiToken')
        updateToken(currentToken)
}, [token]);



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
