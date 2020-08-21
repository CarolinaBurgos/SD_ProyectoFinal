import axios from 'axios';

export default class MetodosAxios {
    static instanceAxios = axios.create({
        baseURL: 'http://localhost:8000'
    });


    static setTokenToAxio = (token) => {
        MetodosAxios.instanceAxios.defaults.headers.common['Authorization'] = token;
      }


    static setInterceptor = (callback) => {
        MetodosAxios.instanceAxios.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            if (error.response.status === 403) {
                callback();
                throw Error("Su sesión ha expirado");
            } else {
                console.log(error.response);

                throw Error(error.response.data.estado);
            };
        });
    }



  //  http://localhost:8000/papers/
  static ObtenerDataCSV = ()=> {
    return MetodosAxios.instanceAxios.get('/papers/');
  }

  static ObtenerEventos2019 = ()=> {
    return MetodosAxios.instanceAxios.get('/papers/anio-2019');
  }

  static ObtenerEventos2020 = ()=> {
    return MetodosAxios.instanceAxios.get('/papers/anio-2020');
  }
  
 /* static ObtenerPapersXFecha= ()=> {
    return MetodosAxios.instanceAxios.get('papers/a%C3%B1o');
  }*/

  static ObtenerPapersMapa= ()=> {
    return MetodosAxios.instanceAxios.get('papers/mapa');
  }

  static obtenerPaperSudamerica= ()=> {
    return MetodosAxios.instanceAxios.get('papers/sudamerica');
  }


}

