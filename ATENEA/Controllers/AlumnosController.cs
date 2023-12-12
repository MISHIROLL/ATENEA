using ATENEA.Models;
using CapaEntidad;
using CapaNegocio;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace ATENEA.Controllers
{
    public class AlumnosController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public AlumnosController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Alumnos()
        {
            PermisosBL obj = new PermisosBL();
            string usuario = User.Identity.Name;
            string acceso = obj.acceso(usuario, "administracion");
            if (acceso == "Otorgado")
            {
                return View();
            }
            else
            {
                return View("Views/Permisos/Error.cshtml");
            }
        }



 
    }
}