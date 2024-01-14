using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CapaEntidad;
using System.Data.SqlClient;
using System.Data;

namespace CapaDatos
{
    public class ProfesoresDAL : CadenaDAL
    {
        public string insertarProfesores(string nombre,string apellidoPa,string apellidoMa,string numeroTrabajador,int? idMateria)
        {
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("insertarProfesoresWeb", cn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@nombre",nombre == null ? "" : nombre);
                        cmd.Parameters.AddWithValue("@apellidoPa",apellidoPa == null ? "" : apellidoPa);
                        cmd.Parameters.AddWithValue("@apellidoMa",apellidoMa == null ? "" : apellidoMa);
                        cmd.Parameters.AddWithValue("@numeroTrabajador",numeroTrabajador == null ? "" : numeroTrabajador);
                        cmd.Parameters.AddWithValue("@idMateria",idMateria == null ? "" : idMateria);
                        cmd.ExecuteNonQuery();
                    }
                    cn.Close();
                    return "datos insertados correctamente";
                }
                catch (System.Exception e)
                {
                    Console.BackgroundColor = ConsoleColor.DarkRed;
                    Console.WriteLine(e);
                    Console.ResetColor();
                    cn.Close();
                    return "Hubo un error";
                }
            }
        }
        public string actualizarProfesor(string nombre,string apellidoPa,string apellidoMa,string numeroTrabajador, int idProfesor)
        {
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("actualizarProfesorWeb", cn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@nombre",nombre == null ? "" : nombre);
                        cmd.Parameters.AddWithValue("@apellidoPa",apellidoPa == null ? "" : apellidoPa);
                        cmd.Parameters.AddWithValue("@apellidoMa",apellidoMa == null ? "" : apellidoMa);
                        cmd.Parameters.AddWithValue("@numeroTrabajador",numeroTrabajador == null ? "" : numeroTrabajador);
                        cmd.Parameters.AddWithValue("@idProfesor",idProfesor == 0 ? 0 : idProfesor);
                        cmd.ExecuteNonQuery();
                    }
                    cn.Close();
                    return "datos actualizados correctamente";
                }
                catch (System.Exception e)
                {
                    Console.BackgroundColor = ConsoleColor.DarkRed;
                    Console.WriteLine(e);
                    Console.ResetColor();
                    cn.Close();
                    return "Hubo un error";
                }
            }
        }
        public string eliminarProfesor(int idProfesor)
        {
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("eliminarProfesorWeb", cn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@idProfesor",idProfesor == 0 ? 0 : idProfesor);
                        cmd.ExecuteNonQuery();
                    }
                    cn.Close();
                    return "profesor eliminado correctamente";
                }
                catch (System.Exception e)
                {
                    Console.BackgroundColor = ConsoleColor.DarkRed;
                    Console.WriteLine(e);
                    Console.ResetColor();
                    cn.Close();
                    return "Hubo un error";
                }
            }
        }
        public List<ProfesoresCLS> listarProfesores(int? idProfesor)
        {
            List<ProfesoresCLS> lista = null;

            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("consultarProfesor", cn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@idProfesor",idProfesor==null?"":idProfesor);
                        SqlDataReader drd = cmd.ExecuteReader();
                        if (drd != null)
                        {
                            ProfesoresCLS oProfesoresCLS;
                            lista = new List<ProfesoresCLS>();

                            int posIdProfesor  = drd.GetOrdinal("idProfesor");
                            int posNombre  = drd.GetOrdinal("nombre");
                            int posApellidopaterno  = drd.GetOrdinal("apellidoPaterno");
                            int posApellidomaterno  = drd.GetOrdinal("apellidoMaterno");
                            int posNumeroTrabajador  = drd.GetOrdinal("numeroTrabajador");

                            while (drd.Read())
                            {
                                oProfesoresCLS = new ProfesoresCLS();
                                oProfesoresCLS.idProfesor = drd.IsDBNull(posIdProfesor) ? 0 : drd.GetInt32(posIdProfesor);
                                oProfesoresCLS.nombre = drd.IsDBNull(posNombre) ? "" : drd.GetString(posNombre);
                                oProfesoresCLS.apellidoPaterno = drd.IsDBNull(posApellidopaterno) ? "" : drd.GetString(posApellidopaterno);
                                oProfesoresCLS.apellidoMaterno = drd.IsDBNull(posApellidomaterno) ? "" : drd.GetString(posApellidomaterno);
                                oProfesoresCLS.numeroTrabajador = drd.IsDBNull(posNumeroTrabajador) ? "" : drd.GetString(posNumeroTrabajador);

                                lista.Add(oProfesoresCLS);
                            }
                            cn.Close();
                        }
                    }
                }
                catch (System.Exception e)
                {
                    Console.BackgroundColor = ConsoleColor.Green;
                    Console.WriteLine(e);
                    Console.ResetColor();
                    lista = null;
                    cn.Close();
                }
            }

            return lista;
        }
    }
}