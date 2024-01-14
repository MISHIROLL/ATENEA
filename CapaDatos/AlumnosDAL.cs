using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CapaEntidad;
using System.Data.SqlClient;
using System.Data;

namespace CapaDatos
{
    public class AlumnosDAL : CadenaDAL
    {
        public string insertarAlumnos(string nombre,string apellidoPa,string apellidoMa,string boleta,string correo)
        {
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("insertarAlumnosWeb", cn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@nombre",nombre == null ? "" : nombre);
                        cmd.Parameters.AddWithValue("@apellidoPa",apellidoPa == null ? "" : apellidoPa);
                        cmd.Parameters.AddWithValue("@apellidoMa",apellidoMa == null ? "" : apellidoMa);
                        cmd.Parameters.AddWithValue("@boleta",boleta == null ? "" : boleta);
                        cmd.Parameters.AddWithValue("@correo",correo == null ? "" : correo);
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
        public string actualizarAlumno(string nombre,string apellidoPa,string apellidoMa,string boleta, string correo,int? idAlumno)
        {
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("actualizarAlumboWeb", cn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@nombre",nombre == null ? "" : nombre);
                        cmd.Parameters.AddWithValue("@apellidoPa",apellidoPa == null ? "" : apellidoPa);
                        cmd.Parameters.AddWithValue("@apellidoMa",apellidoMa == null ? "" : apellidoMa);
                        cmd.Parameters.AddWithValue("@boleta",boleta == null ? "" : boleta);
                        cmd.Parameters.AddWithValue("@correo",correo == null ? "" : correo);
                        cmd.Parameters.AddWithValue("@idAlumno",idAlumno == 0 ? 0 : idAlumno);
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
        public string eliminarAlumno(int? idAlumno)
        {
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("eliminarAlumnoWeb", cn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@idAlumno",idAlumno == 0 ? 0 : idAlumno);
                        cmd.ExecuteNonQuery();
                    }
                    cn.Close();
                    return "alumno eliminado correctamente";
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
        public List<AlumnosCLS> listarAlumnos(int? idAlumno)
        {
            List<AlumnosCLS> lista = null;

            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("consultarAlumno", cn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@idAlumno",idAlumno==null?"1":idAlumno);
                        SqlDataReader drd = cmd.ExecuteReader();
                        if (drd != null)
                        {
                            AlumnosCLS oAlumnosCLS;
                            lista = new List<AlumnosCLS>();

                            int posIdalumno  = drd.GetOrdinal("idAlumno");
                            int posNombre  = drd.GetOrdinal("nombre");
                            int posApellidopaterno  = drd.GetOrdinal("apellidoPaterno");
                            int posApellidomaterno  = drd.GetOrdinal("apellidoMaterno");
                            int posNumeroboleta  = drd.GetOrdinal("numeroBoleta");
                            int posCorreo  = drd.GetOrdinal("correo");

                            while (drd.Read())
                            {
                                oAlumnosCLS = new AlumnosCLS();
                                oAlumnosCLS.idAlumno = drd.IsDBNull(posIdalumno) ? 0 : drd.GetInt32(posIdalumno);
                                oAlumnosCLS.nombre = drd.IsDBNull(posNombre) ? "" : drd.GetString(posNombre);
                                oAlumnosCLS.apellidoPaterno = drd.IsDBNull(posApellidopaterno) ? "" : drd.GetString(posApellidopaterno);
                                oAlumnosCLS.apellidoMaterno = drd.IsDBNull(posApellidomaterno) ? "" : drd.GetString(posApellidomaterno);
                                oAlumnosCLS.numeroBoleta = drd.IsDBNull(posNumeroboleta) ? "" : drd.GetString(posNumeroboleta);
                                oAlumnosCLS.correo = drd.IsDBNull(posCorreo) ? "" : drd.GetString(posCorreo);

                                lista.Add(oAlumnosCLS);
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