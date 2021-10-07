import {driversListActions} from './driversList-slice';
import { uiActions } from './ui-slice';
export const fetchDriversData = (address) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        address
      );

      if (!response.ok) {
        throw new Error('Could not fetch drivers data!');
      }

      const data = await response.json();

      return data;
    };

    try {
      const driversListData = await fetchData();
      
      dispatch(
        driversListActions.replaceDriversList({
          items: driversListData || [],
          length: driversListData.length,
        })
      );
      dispatch(
        uiActions.hideNotification()
      );
      console.log(driversListData.length);
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching drivers data failed!',
        })
      );
    }
  };
};
