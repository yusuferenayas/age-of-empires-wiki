import {Provider, useSelector} from "react-redux";
import reduxStore from "Stores";
import {appIsLoading} from "Stores/App";
import {CircularProgress} from "@material-ui/core";
import Navigator from "Navigator";

const App = () => {
  return (
    <Provider store={reduxStore}>
      <AppContent />
    </Provider>
  );
};

const AppContent = () => {
  const isLoading = useSelector(appIsLoading);

  if (isLoading) {
    return (
      <div className="loadingContainer">
        <CircularProgress />
      </div>
    );
  }

  return <Navigator />;
};

export default App;
