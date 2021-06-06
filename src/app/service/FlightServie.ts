import { Injectable } from "@angular/core";

import {HttpParams } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import Bookflight from "../entity/Bookflight";
import SearchedFlightDetails from "../entity/SearchedFlightDetails";
import Flights from "../entity/Flights";


const Base_Url = "http://localhost:3000/flights";
@Injectable()
export default class FlightService{
    constructor(private http:HttpClient){ }
    getFlightDetails(){
        return this.http.get(Base_Url);
    }
    addFlight(flight:Flights){
        console.log(flight);
        return this.http.post(Base_Url,flight)
    }
    getSearchedFlights(from:any,to:any) {
        return this.http.get(Base_Url+"?fromPlace="+from+'&toPlace='+to);
        
        
    }
    deleteFligt(id:any){
        return this.http.delete(Base_Url+"?flightNumber="+id);
    }
    updateFligt(flightNumber:any,flight:Flights){
        return this.http.put(Base_Url+"?flightNumber="+flightNumber,flight);
    }
}