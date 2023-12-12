using CapaDatos;
using CapaEntidad;

namespace CapaNegocio
{
    public class UsuariosBL
    {
        public List<UsuariosCLS> listarUsuarios()
        {
            UsuariosDAL obj = new UsuariosDAL();
            return obj.listarUsuarios();
        }
    }
}