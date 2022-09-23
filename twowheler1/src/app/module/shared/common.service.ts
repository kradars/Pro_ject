import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Defaulter } from 'app/model/defaulter';
import { Ledger } from 'app/model/ledger';
import { LoanDisbursement } from 'app/model/loan-disbursement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  // Disbursement
  
  private getUrl="http://localhost:8081/getDisbursement";
  private getUrlId="http://localhost:8081/getDisbursement";
  private delUrl="http://localhost:8081/deleteDisbursement/";
  private postUrl="http://localhost:8081/postDisbursement";
  private urlLedger="http://localhost:8081/ledger";
  private postDef="http://localhost:8081/postDefault";

  
  

  postDispursement(dis:LoanDisbursement):Observable<LoanDisbursement[]>
  {
    return this.http.post<LoanDisbursement[]>(this.postUrl,dis);
  }

  getDispursement():Observable<LoanDisbursement[]>
  {
    return this.http.get<LoanDisbursement[]>(this.getUrl);
  }
  getDispursementId(id:number):Observable<LoanDisbursement[]>
  {
    return this.http.get<LoanDisbursement[]>(this.getUrlId+"/"+id);
  }

  deleteDispursement(id:number)
  {
    alert("deleted data");
    return this.http.delete(this.delUrl+id);
  }

  // -->Ledger<--
  saveledger(ledger: Ledger): Observable<Ledger[]> {

    return this.http.post<Ledger[]>(this.urlLedger,ledger);
  }

  getLedger(): Observable<Ledger[]> {
    return this.http.get<Ledger[]>(this.urlLedger);
  }

  deleteLedger(Id:number){
    alert("in common service delete")
    return this.http.delete(this.urlLedger+"/"+Id);
  }

  // -->Defauter<--
  postDefault(def:Defaulter):Observable<Defaulter[]>{
    return this.http.post<Defaulter[]>(this.postDef+"/"+def.sanctionId,def);
  }

}
