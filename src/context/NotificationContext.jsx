import React, { createContext, useState, useContext } from "react";
import Notification from "../components/Notification";

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState({ message: "", type: "", show: false });

  const triggerNotification = (message, type = "info") => {
    setNotification({ message, type, show: true });

    setTimeout(() => {
      setNotification({ message: "", type: "", show: false });
    }, 3000); // Elimina la notificación después de 3 segundos
  };

  return (
    <NotificationContext.Provider value={{ triggerNotification }}>
      {children}
      {notification.show && (
        <Notification message={notification.message} type={notification.type} onClose={() => setNotification({ ...notification, show: false })} />
      )}
    </NotificationContext.Provider>
  );
};
