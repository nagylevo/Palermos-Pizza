using Microsoft.AspNetCore.Mvc;
using PalermosPizza.Models;
using System.Diagnostics;

namespace PalermosPizza.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Contacts()
        {
            return View();
        }
    }
}
