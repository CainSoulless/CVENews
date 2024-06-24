import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CVEService {

  constructor(private http: HttpClient) { }

  readJSONCVE(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.get('assets/cves.json').subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          reject('Error al obtener el archivo JSON: ' + error);
        }
      );
    });
  }

  /**
   * No fue posible generar las consultas a la API por problemas con CORS.
   * @returns 
   */
  // private URL = "https://cve.circl.lu/api/"
  // async getLastCves(): Promise<CVE[]> {
  //   try {
  //     const config = {
  //       headers: {
  //         'Access-Control-Allow-Origin': 'cve.circl.lu'
  //       }
  //     };
  
  //     const response: AxiosResponse<CVE[]> = await axios.get<CVE[]>(`${this.URL}last`, config);
  
  //     return response.data.map(cve => new CVE(cve.id, cve.summary));
  //   } catch (error) {
  //     console.error('Error fetching CVEs:', error);
  //     throw error;
  //   }
  // }
}