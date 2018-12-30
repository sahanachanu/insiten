import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contacts } from './contacts';
import { Injectable } from '@angular/core';
import { Companies } from './companies';
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let contacts = [
      {
        "id": 1,
        "name" : "John Doe",
        "phone" : "4178976543"
      },
      {
        "id": 2,
        "name" : "Mike Fox",
        "phone" : "4078654312"
      },
      {
        "id": 3,
        "name" : "Robert Flin",
        "phone" : "8109678909"
      },
      {
        "id": 4,
        "name" : "Ryan Sam",
        "phone" : "7896786543"
      },
      {
        "id": 5,
        "name" : "Kaleb Stunkard",
        "phone" : "4077473569"
      }
    ];

    let companies = [
      {
      "id": 1,
      "name" : "HTC",
      "description" : "Electronics Company",
      "address1":" 2201 Highway 501",
      "address2":"",
      "city":"Conway",
      "state":"SC",
      "status":"Approved",
      "zip":"29526",
      "DateOfOffer": "10/15/2018",
      "DateOfClosure":"12/15/2018",
      "Shares":"230,897",
      "Price":"$1.10B",
      "Stake":"20%",
      "StakeAfter":"40%",
      "MarketPrice":"$1B",
      "AcqPremium":"$8933",
      "file":"HTC.pdf"
    }, 
    {
      "id": 2,
      "name" : "Apigee",
      "description" : "Analytics Software Company",
      "address1":"10 Almaden Blvd",
      "address2":"",
      "city":"San Jose",
      "state":"CA",
      "status":"Approved",
      "zip":"32675",
      "DateOfOffer": "08/22/2018",
      "DateOfClosure":"01/22/2019",
      "Shares":"420,700",
      "Price":"625M",
      "Stake":"10%",
      "StakeAfter":"15%",
      "MarketPrice":"480M",
      "AcqPremium":"$4567",
      "file":"Apigee.pdf"
    },
    {
      "id": 3,
      "name" : "Nest Labs",
      "description" : "Manufacturing Company",
      "address1":"3400 hillview avenue",
      "address2":"",
      "city":"Palo Alto",
      "state":"CA",
      "status":"Pending Approval",
      "zip":"94304",
      "DateOfOffer": "2018-11-05",
      "DateOfClosure":"2019-04-05",
      "Shares":"630,897",
      "Price":"$3.20B",
      "Stake":"32%",
      "StakeAfter":"45%",
      "MarketPrice":"$2.8B",
      "AcqPremium":"$12560",
      "file":"NestLabs.pdf"
    },
    {
      "id": 4,
      "name" : "Waze",
      "description" : "Software Company",
      "address1":"1600 Amphitheatre Pkwy",
      "address2":"",
      "city":"Mountain View",
      "state":"CA",
      "status":"Pending Approval",
      "zip":"94043",
      "DateOfOffer": "06/18/2018",
      "DateOfClosure":"01/18/2019",
      "Shares":"30,897",
      "Price":"$1.3B",
      "Stake":"12%",
      "StakeAfter":"20%",
      "MarketPrice":"$1.1B",
      "AcqPremium":"$5600",
      "file":"Waze.pdf"
    },
    {
      "id": 5,
      "name" : "Motorola",
      "description" : "Software Company",
      "address1":"1000 Enterprise Way",
      "address2":"",
      "city":"Sunnyvale",
      "state":"CA",
      "status":"Researching",
      "zip":"94089",
      "DateOfOffer": "12/20/2018",
      "DateOfClosure":"02/25/2019",
      "Shares":"130,197",
      "Price":"$12.5B",
      "Stake":"30%",
      "StakeAfter":"45%",
      "MarketPrice":"$10B",
      "AcqPremium":"$20360",
      "file":"Motorola.pdf"
    },
    {
      "id": 6,
      "name" : "ITA Software",
      "description" : "Software Company",
      "address1":"5 Cambridge Center",
      "address2":"",
      "city":"Cambridge",
      "state":"MA",
      "status":"Declined",
      "zip":"02142",
      "DateOfOffer": "07/20/2018",
      "DateOfClosure":"03/22/2019",
      "Shares":"430,237",
      "Price":"$700M",
      "Stake":"8%",
      "StakeAfter":"13%",
      "MarketPrice":"$540M",
      "AcqPremium":"$9087",
      "file":"ITASoftware.pdf"
    },
    {
      "id": 7,
      "name" : "Double Click",
      "description" : "Advertising Company",
      "address1":"76 Ninth Avenue, 4th Floor",
      "address2":"",
      "city":"New York City",
      "state":"NY",
      "status":"Researching",
      "zip":"32826",
      "DateOfOffer": "12/20/2018",
      "DateOfClosure":"05/22/2019",
      "Shares":"530,437",
      "Price":"$3.1B",
      "Stake":"20%",
      "StakeAfter":"26%",
      "MarketPrice":"$2.8B",
      "AcqPremium":"$7689",
      "file":"DoubleClick.pdf"
    },
    {
      "id": 8,
      "name" : "YouTube",
      "description" : "Software Company",
      "address1":"901 Cherry Ave",
      "address2":"",
      "city":"San Bruno",
      "state":"CA",
      "status":"Approved",
      "zip":"94066",
      "DateOfOffer": "02/16/2018",
      "DateOfClosure":"07/18/2018",
      "Shares":"710,490",
      "Price":"$1.65B",
      "Stake":"12%",
      "StakeAfter":"20%",
      "MarketPrice":"$1.4B",
      "AcqPremium":"$6789",
      "file":"YouTube.pdf"
    }


  ];
    return {companies, contacts};
   // return {contacts};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(contacts: Contacts[]): number {
    return contacts.length > 0 ? Math.max(...contacts.map(contact => contact.id)) + 1 : 11;
  }

  genCompId(companies: Companies[]): number {
    return companies.length > 0 ? Math.max(...companies.map(company => company.id)) + 1 : 11;
  }
}