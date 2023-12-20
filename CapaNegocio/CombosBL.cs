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
        public List<ComboCLS> ComboAlumnos(string ciclo,string grupo)
        {
            CombosDAL obj = new CombosDAL();
            return obj.ComboAlumnos(ciclo,grupo);
        }
        
        
    }
}