using ATENEA.Models;
using CapaEntidad;
using CapaNegocio;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace ATENEA.Controllers
{
    public class CombosController : Controller
    {
        private readonly ILogger<CombosController> _logger;

        public CombosController(ILogger<CombosController> logger)
        {
            _logger = logger;
        }

        public List<ComboCLS> ComboCiclo()
        {
            ComboBL obj = new ComboBL();
            return obj.ComboCiclo();
        }
        public List<ComboCLS> ComboGrupo()
        {
            ComboBL obj = new ComboBL();
            return obj.ComboGrupo();
        }
        public List<ComboCLS> ComboGrupo2()
        {
            ComboBL obj = new ComboBL();
            return obj.ComboGrupo2();
        }
        public List<ComboCLS> ComboSalon()
        {
            ComboBL obj = new ComboBL();
            return obj.ComboSalon();
        }
        public List<ComboCLS> ComboAlumnos(int ciclo, int grupo)
        {
            ComboBL obj = new ComboBL();
            return obj.ComboAlumnos(ciclo,grupo);
        }
        public List<ComboCLS> ComboMaterias()
        {
            ComboBL obj = new ComboBL();
            return obj.ComboMaterias();
        }
        public List<ComboCLS> ComboProfesores(int idMateria)
        {
            ComboBL obj = new ComboBL();
            return obj.ComboProfesores(idMateria);
        }
        public List<ComboCLS> ComboHorarios()
        {
            ComboBL obj = new ComboBL();
            return obj.ComboHorarios();
        }


    }
}