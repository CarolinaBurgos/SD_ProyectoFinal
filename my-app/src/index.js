import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MetodosAxios from '../src/componentes/MetodosAxios';
import { LocaleProvider } from 'antd'
import esES from 'antd/lib/locale-provider/es_ES';

class AppLoaded extends React.Component {
    constructor() {
      super();
      this.state={
        loaded:false
      };
        
    }
    componentDidMount(){
        MetodosAxios.setInterceptor(function(){
            //store.dispatch(logout());
        });
        MetodosAxios.setTokenToAxio("2e5v7s&ue=9ryx99pxjp6!zkc1%_(3r$fwe3rz(&st9od86@t$");
        this.setState({loaded:true});
    }


    
    render() {
        
      return (
        <LocaleProvider  locale={esES}>
            <App />
        </LocaleProvider >
      )
    }
};

const DashApp = () => {
    return ReactDOM.render(
        <AppLoaded/>
    , document.getElementById('root'));
  };

DashApp();

serviceWorker.unregister();
