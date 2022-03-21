import React, { useEffect, useState } from "react";
import api from "./services/api";

export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get("/users/romulo27")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);


  useEffect(() => {
    api
      .post("https://minhaapi/novo-usuario",{
            nome: "Romulo",
            sobrenome: "Sousa"
 })
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);



 // Verbo GET
  //api.get(endpoint)

 // Verbo POST
  //api.post(endpoint, dados)
 
 
 // Verbo DELETE
  //api.delete(endpoint, dados)
 
 // Verbo PUT
  //api.put(endpoint, dados)


  return (
    <div className="App">
      <p>Usuário: {user?.login}</p>
      <p>Biografia: {user?.bio}</p>
    </div>
  );
}