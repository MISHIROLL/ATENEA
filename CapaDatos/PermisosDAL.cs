using CapaEntidad;
using System.Data.SqlClient;
using System.Data;

namespace CapaDatos
{
    public class PermisosDAL : CadenaDAL
    {
        /// <summary>
        /// Obtiene el listado de permisos que tiene asignados el usuario
        /// </summary>
        /// <param name="usuario">cuenta de correo electronico del usuario</param>
        public List<PermisosCLS> obtenerPermisos(string usuario)
        {
            List<PermisosCLS> permisos = null;

            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    if(usuario == null)
                    {
                        usuario = "";
                    }
                    using(SqlCommand cmd = new SqlCommand("SELECT  Username,Estatus,Permiso FROM  ATENEABASEDATOS.dbo.permisos where Estatus = 1 and Username = '"+ usuario +"'",cn))
                    {
                        cmd.CommandType = CommandType.Text;
                        SqlDataReader drd = cmd.ExecuteReader(CommandBehavior.SingleResult);
                        if(drd != null)
                        {
                            PermisosCLS oPermisosCLS;
                            permisos = new List<PermisosCLS>();
                            int posUsername = drd.GetOrdinal("UserName");
                            int posEstatus = drd.GetOrdinal("Estatus");
                            int posPermiso = drd.GetOrdinal("Permiso");

                            while (drd.Read())
                            {
                                oPermisosCLS = new PermisosCLS();
                                oPermisosCLS.UserName = drd.IsDBNull(posUsername) ? "" : drd.GetString(posUsername);
                                oPermisosCLS.Estatus = drd.IsDBNull(posEstatus) ? 0 : drd.GetInt32(posEstatus);
                                oPermisosCLS.Permiso = drd.IsDBNull(posPermiso) ? "" : drd.GetString(posPermiso);
                                permisos.Add(oPermisosCLS);
                            }

                            cn.Close();
                        }
                    }
                }
                catch (System.Exception)
                {
                    permisos = null;
                    cn.Close();
                }
            }

            return permisos;
        }
    }
}