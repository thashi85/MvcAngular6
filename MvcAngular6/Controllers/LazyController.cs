using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcAngular6.Controllers
{
    public class LazyController : Controller
    {
        // GET: Lazy
        public ActionResult Index()
        {
            return View();
        }
    }
}