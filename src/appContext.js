import React from "react";

const AuthContext = React.createContext({
  state: {},
  reducer: () => {},
});
const AdminAuthContext = React.createContext({
  state: {},
  reducer: () => {},
});

export{
    AuthContext,
    AdminAuthContext
}