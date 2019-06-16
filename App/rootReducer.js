import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import FSStorage, { DocumentDir } from 'redux-persist-fs-storage';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import authReducer from './services/auth/reducer';
import * as authTypes from './services/auth/constants';

import AppNavigator from './index';

const storage = FSStorage(DocumentDir, 'parkmonitor');

const entitiesReducer = (state, action) => {
  const reducer = combineReducers({
    auth: authReducer,
  });

  if (action.type === authTypes.LOGOUT_SUCCESS) {
    return reducer(undefined, action);
  }
  return reducer(state, action);
};


const appPersistConfig = {
  timeout: 30000,
  key: 'app',
  keyPrefix: '',
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['ui'],
};

const uiPersistConfig = {
  timeout: 30000,
  key: 'ui',
  keyPrefix: '',
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: [],
};

const uiReducer = combineReducers({

});

const appReducer = combineReducers({
  entities: entitiesReducer,
  ui: persistReducer(uiPersistConfig, uiReducer),
});

const navReducer = createNavigationReducer(AppNavigator);

export default combineReducers({
  app: persistReducer(appPersistConfig, appReducer),
  nav: navReducer,
  form: formReducer,
});
