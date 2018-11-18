using MvcAngular6.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MvcAngular6.Controllers.API
{
    [RoutePrefix("api/v1/customers")]
    public class CustomerController : ApiController
    {
        [Route("")]
        [HttpGet]
        public List<Customer> Get()
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

    }
}
