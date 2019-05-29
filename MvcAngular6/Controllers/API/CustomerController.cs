using MvcAngular6.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Http;

namespace MvcAngular6.Controllers.API
{
    [RoutePrefix("api/v1/customers")]
    public class CustomerController : ApiController
    {
        [ActionName("GetCustomersAction")]
        [Route("")]       
        [Route("Test")]
        [HttpGet]
        public List<Customer> GetCustomers()
        {
            return new List<Customer>()
            {
                new Customer() { CustomerID=1,Name="Customer AA",Reference="CU0001" },
                new Customer() { CustomerID=2,Name="Customer BB",Reference="CU0002" },
                new Customer() { CustomerID=3,Name="Customer CC",Reference="CU0003" },
                new Customer() { CustomerID=4,Name="Customer DD",Reference="CU0004" },
                new Customer() { CustomerID=5,Name="Customer EE",Reference="CU0005" },
                new Customer() { CustomerID=6,Name="Customer FF",Reference="CU0006" },
                new Customer() { CustomerID=7,Name="Customer GG",Reference="CU0007" },
            };
        }
      
        [HttpGet]       
        public List<Customer> GetCustomers2()
        {
            return new List<Customer>()
            {
                new Customer() { CustomerID=1,Name="Customer A",Reference="CU0001" },
                new Customer() { CustomerID=2,Name="Customer B",Reference="CU0002" },
                new Customer() { CustomerID=3,Name="Customer C",Reference="CU0003" },
                new Customer() { CustomerID=4,Name="Customer D",Reference="CU0004" },
                new Customer() { CustomerID=5,Name="Customer E",Reference="CU0005" },
                new Customer() { CustomerID=6,Name="Customer F",Reference="CU0006" },
                new Customer() { CustomerID=7,Name="Customer G",Reference="CU0007" },
            };
        }

        [Route("notes/{id}")]
        [HttpGet]
        public List<string> GetNotes(string id)
        {
            Thread.Sleep(1000);
            return new List<string>()
            {
                "Note 1 :"+id,
                "Note 2 :"+id,
                "Note 3 :"+id,
                "Note 4 :"+id               
            };
        }

    }
}
