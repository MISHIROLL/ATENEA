using CapaDatos;
using CapaEntidad;


namespace CapaNegocio
{
    public class PermisosBL
    {
        public List<PermisosCLS> obtenerPermisos(string usuario)
        {
            PermisosDAL obj = new PermisosDAL();
            return obj.obtenerPermisos(usuario);
        }

        public string acceso (string usuario, string permiso)
        {
            string acceso = "Pendiente";
            PermisosBL obj = new PermisosBL();
            List<PermisosCLS> per = obtenerPermisos(usuario);

            foreach (var item in per)
            {
                if(item.Permiso == permiso)
                {
                    acceso = "Otorgado";
                    break;
                }
            }

            return acceso;
        }
    }
}