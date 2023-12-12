using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CapaEntidad;
using System.Data.SqlClient;
using System.Data;

namespace CapaDatos
{
    public class UsuariosDAL : CadenaDAL
    {
        public List<UsuariosCLS> listarUsuarios()
        {

            List<UsuariosCLS>? lista = null;

            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("select * from usuarios", cn))
                    {
                        cmd.CommandType = CommandType.Text;

                        SqlDataReader drd = cmd.ExecuteReader();

                        if (drd != null)
                        {
                            UsuariosCLS oUsuariosCLS;
                            lista = new List<UsuariosCLS>();

                            int posUsuario = drd.GetOrdinal("usuario");
                            int posContrasenia = drd.GetOrdinal("contrasenia");

                            while (drd.Read())
                            {
                                oUsuariosCLS = new UsuariosCLS();
                                oUsuariosCLS.usuario = drd.IsDBNull(posUsuario) ? "" : drd.GetString(posUsuario);
                                oUsuariosCLS.contrasenia = drd.IsDBNull(posContrasenia) ? "" : drd.GetString(posContrasenia);
                                lista.Add(oUsuariosCLS);
                            }
                            cn.Close();
                        }
                    }
                }
                catch (System.Exception)
                {
                    cn.Close();
                    lista = null;
                }


                return lista;
            }
        }
    }
}