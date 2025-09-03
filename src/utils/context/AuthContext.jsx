import React, { useEffect, useContext, createContext, useState } from "react";
import supabase from "../supabase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const session = supabase.auth.getSession().then(({data}) => {
      setUser(data.session.user || null)
    })
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    }

  },[])


  const registerAccount = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      console.log("registerAccount--error", error);
    } else {
      setUser(data?.user);
      return data;
    }
  };

  const loginAccount = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.log("loginAccounterror", error);
    }

    setUser(data?.user);
    return data;
  };

  const logOutAccount = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, registerAccount, loginAccount, logOutAccount }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
