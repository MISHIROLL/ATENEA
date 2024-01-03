using ATENEA.Models;
using CapaEntidad;
using CapaNegocio;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace ATENEA.Controllers
{
    public class ProfesoresController : Controller
    {
        private readonly ILogger<AlumnosController> _logger;

        public ProfesoresController(ILogger<AlumnosController> logger)
        {
            _logger = logger;
        }

        public IActionResult Profesores()
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

        public string insertarProfesores(string nombre,string apellidoPa,string apellidoMa,string numeroTrabajador,int idMateria)
        {
            ProfesoresBL obj = new ProfesoresBL();
            return obj.insertarProfesores(nombre,apellidoPa,apellidoMa,numeroTrabajador,idMateria);
        }
        public List<ProfesoresCLS> listarProfesores(int idProfesor)
        {
            ProfesoresBL obj = new ProfesoresBL();
            return obj.listarProfesores(idProfesor);
        }
        public string actualizarProfesor(string nombre,string apellidoPa,string apellidoMa,string numeroTrabajador, int idProfesor)
        {
            ProfesoresBL obj = new ProfesoresBL();
            return obj.actualizarProfesor(nombre,apellidoPa,apellidoMa,numeroTrabajador,idProfesor);
        }
        public string eliminarProfesor(int idProfesor)
        {
            ProfesoresBL obj = new ProfesoresBL();
            return obj.eliminarProfesor(idProfesor);
        }
 
    }
}