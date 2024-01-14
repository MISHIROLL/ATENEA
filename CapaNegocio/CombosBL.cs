using CapaDatos;
using CapaEntidad;

namespace CapaNegocio
{
    public class ComboBL
    {
        public List<ComboCLS> ComboCiclo()
        {
            CombosDAL obj = new CombosDAL();
            return obj.ComboCiclo();
        }
        public List<ComboCLS> ComboGrupo()
        {
            CombosDAL obj = new CombosDAL();
            return obj.ComboGrupo();
        }
        public List<ComboCLS> ComboGrupo2()
        {
            CombosDAL obj = new CombosDAL();
            return obj.ComboGrupo2();
        }
        public List<ComboCLS> ComboSalon()
        {
            CombosDAL obj = new CombosDAL();
            return obj.ComboSalon();
        }
        public List<ComboCLS> ComboAlumnos(int ciclo,int grupo)
        {
            CombosDAL obj = new CombosDAL();
            return obj.ComboAlumnos(ciclo,grupo);
        }
        public List<ComboCLS> ComboMaterias()
        {
            CombosDAL obj = new CombosDAL();
            return obj.ComboMaterias();
        }
        public List<ComboCLS> ComboProfesores(int idMateria)
        {
            CombosDAL obj = new CombosDAL();
            return obj.ComboProfesores(idMateria);
        }
        public List<ComboCLS> ComboHorarios()
        {
            CombosDAL obj = new CombosDAL();
            return obj.ComboHorarios();
        }
        
        
    }
}