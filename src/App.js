import DriversFleet from "./components/Drivers/DriversFleet";
import Layout from "./components/Layout/Layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Notification from './components/UI/Notification';
import { fetchDriversData } from "./store/driversList-actions";
const url ='http://private-05627-frontendnewhire.apiary-mock.com/contact_list1'

function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  useEffect(() => dispatch(fetchDriversData(url)), [dispatch,url]);// when the address changes it doesn't reload

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        <DriversFleet />
      </Layout>
    </>
  );
}

export default App;
