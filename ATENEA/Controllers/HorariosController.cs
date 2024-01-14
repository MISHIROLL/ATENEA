using ATENEA.Models;
using CapaEntidad;
using CapaNegocio;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace ATENEA.Controllers
{
    public class HorariosController : Controller
    {
        private readonly ILogger<HorariosController> _logger;

        public HorariosController(ILogger<HorariosController> logger)
        {
            _logger = logger;
        }

        public IActionResult Horarios()
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

        public List<HorariosCLS> consultarOcupabilidad(int idGrupo, int idSalon, int idCiclo, int idMateria, int idProfesor, string horaInicio, string horaFin, string dia)
        {
            HorariosBL obj = new HorariosBL();
            return obj.consultarOcupabilidad(idGrupo,idSalon,idCiclo,idMateria,idProfesor,horaInicio,horaFin,dia);
        }

        public string insertarHorarios(int? idGrupo,int? idSalon,int? idCiclo,int? idMateria,int? idProfesor,string horaInicio,string horaFin,string dia)
        {
            HorariosBL obj = new HorariosBL();
            return obj.insertarHorarios(idGrupo,idSalon,idCiclo,idMateria,idProfesor,horaInicio,horaFin,dia);
        }
        public List<Horarios2CLS> listarHorarios(string nombreHorario)
        {
            HorariosBL obj = new HorariosBL();
            return obj.listarHorarios(nombreHorario);
        }
        public string actualizarAlumno(string nombre,string apellidoPa,string apellidoMa,string boleta,int idAlumno)
        {
            AlumnosBL obj = new AlumnosBL();
            return obj.actualizarAlumno(nombre,apellidoPa,apellidoMa,boleta,idAlumno);
        }
        public string eliminarAlumno(int idAlumno)
        {
            AlumnosBL obj = new AlumnosBL();
            return obj.eliminarAlumno(idAlumno);
        }
 
    }
}