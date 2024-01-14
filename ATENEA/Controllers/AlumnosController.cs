using ATENEA.Models;
using CapaEntidad;
using CapaNegocio;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace ATENEA.Controllers
{
    public class AlumnosController : Controller
    {
        private readonly ILogger<AlumnosController> _logger;

        public AlumnosController(ILogger<AlumnosController> logger)
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
        public IActionResult AlumnoReporteAsistencia()
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

        public string insertarAlumnos(string nombre,string apellidoPa,string apellidoMa,string boleta,string correo)
        {
            AlumnosBL obj = new AlumnosBL();
            return obj.insertarAlumnos(nombre,apellidoPa,apellidoMa,boleta,correo);
        }
        public List<AlumnosCLS> listarAlumnos(int idAlumno)
        {
            AlumnosBL obj = new AlumnosBL();
            return obj.listarAlumnos(idAlumno);
        }
        public string actualizarAlumno(string nombre,string apellidoPa,string apellidoMa,string boleta,string correo,int idAlumno)
        {
            AlumnosBL obj = new AlumnosBL();
            return obj.actualizarAlumno(nombre,apellidoPa,apellidoMa,boleta,correo,idAlumno);
        }
        public string eliminarAlumno(int idAlumno)
        {
            AlumnosBL obj = new AlumnosBL();
            return obj.eliminarAlumno(idAlumno);
        }
 
    }
}