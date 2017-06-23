using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SmartCities.Controllers
{
    public class MapController : Controller
    {
        // GET: GoogleMaps
        public ActionResult Index()
        {
            return View();
        }
    }
}