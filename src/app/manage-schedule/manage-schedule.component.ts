import { Component, OnInit } from '@angular/core';
import Flights from '../entity/Flights';
import FlightService from '../service/FlightServie';

@Component({
  selector: 'app-manage-schedule',
  templateUrl: './manage-schedule.component.html',
  styleUrls: ['./manage-schedule.component.sass']
})
export class ManageScheduleComponent implements OnInit {

  constructor(private flightService: FlightService) { }
 flight: Flights = new Flights(); //state
 flights: Flights[] = []; //state
 ngOnInit(){
  this.getFlightDetails();

 }
 deleteFlight(){
  const element1= document.getElementById("flightNumber");
  const from = ( element1 as HTMLInputElement).value;
  const promise= this.flightService.deleteFligt(from);
  promise.subscribe(function(response){
    console.log(response);
    alert('deleted successfully')
    
  })

 }
getFlightDetails(){
  const promise= this.flightService.getFlightDetails();
   promise.subscribe((response) =>{
     console.log(response);
     this.flights= response as Flights[];
   })
}
 


}
