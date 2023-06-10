import NetInfo from '@react-native-community/netinfo';

export function checkInternetConnection(setShowAlert, setAlertMessage, setRefreshing, setLoading) {
  NetInfo.fetch().then(state => {
    if (!state.isConnected) {
      setRefreshing(false);
      setLoading(false);
      setShowAlert(true);
      setAlertMessage("No Internet Connection");
    }
  });
}