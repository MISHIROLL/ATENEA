using ATENEA.Models;
using CapaEntidad;
using CapaNegocio;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace ATENEA.Controllers
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

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public List<UsuariosCLS> listarUsuarios()
        {
            UsuariosBL obj = new UsuariosBL();
            return obj.listarUsuarios();
        }
    }
}