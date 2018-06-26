using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace terr32.Controllers
{
    public class KatalogController : Controller
    {
        // GET: Katalog
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Step2()
        {
            return View();
        }
        public ActionResult Prod()
        {
            return View();
        }
    }
}