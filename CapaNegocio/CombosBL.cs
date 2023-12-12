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
    
        
    }
}