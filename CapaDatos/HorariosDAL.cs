using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CapaEntidad;
using System.Data.SqlClient;
using System.Data;

namespace CapaDatos
{
    public class HorariosDAL : CadenaDAL
    {
        public string insertarHorarios(int? idGrupo,int? idSalon,int? idCiclo,int? idMateria,int? idProfesor,string horaInicio,string horaFin,string dia)
        {
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("insertarHorariosWeb", cn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@idGrupo",idGrupo == null ? "" : idGrupo);
                        cmd.Parameters.AddWithValue("@idSalon",idSalon == null ? "" : idSalon);
                        cmd.Parameters.AddWithValue("@idCiclo",idCiclo == null ? "" : idCiclo);
                        cmd.Parameters.AddWithValue("@idMateria",idMateria == null ? "" : idMateria);
                        cmd.Parameters.AddWithValue("@idProfesor",idProfesor == null ? "" : idProfesor);
                        cmd.Parameters.AddWithValue("@horaInicio",horaInicio == null ? "" : horaInicio);
                        cmd.Parameters.AddWithValue("@horaFin",horaFin == null ? "" : horaFin);
                        cmd.Parameters.AddWithValue("@dia",dia == null ? "" : dia);
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
        public string actualizarAlumno(string nombre,string apellidoPa,string apellidoMa,string boleta, int idAlumno)
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
        public string eliminarAlumno(int idAlumno)
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
        public List<Horarios2CLS> listarHorarios(string nombreHorario)
        {
            List<Horarios2CLS> lista = null;

            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("listarHorariosWeb", cn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@nombreHorario",nombreHorario==null?"":nombreHorario);
                        SqlDataReader drd = cmd.ExecuteReader();
                        if (drd != null)
                        {
                            Horarios2CLS oHorarios2CLS;
                            lista = new List<Horarios2CLS>();

                            int posIdhorario  = drd.GetOrdinal("idHorario");
                            int posNombrehorario  = drd.GetOrdinal("nombreHorario");
                            int posIdgrupo  = drd.GetOrdinal("idGrupo");
                            int posIdsalon  = drd.GetOrdinal("idSalon");
                            int posIdciclo  = drd.GetOrdinal("idCiclo");
                            int posIdmateria  = drd.GetOrdinal("idMateria");
                            int posIdprofesor  = drd.GetOrdinal("idProfesor");
                            int posHorainicio  = drd.GetOrdinal("horaInicio");
                            int posHorafin  = drd.GetOrdinal("horaFin");
                            int posDiasemana  = drd.GetOrdinal("diaSemana");


                            while (drd.Read())
                            {
                                oHorarios2CLS = new Horarios2CLS();
                                oHorarios2CLS.idHorario = drd.IsDBNull(posIdhorario) ? 0 : drd.GetInt32(posIdhorario);
                                oHorarios2CLS.nombreHorario = drd.IsDBNull(posNombrehorario) ? "" : drd.GetString(posNombrehorario);
                                oHorarios2CLS.idGrupo = drd.IsDBNull(posIdgrupo) ? 0 : drd.GetInt32(posIdgrupo);
                                oHorarios2CLS.idSalon = drd.IsDBNull(posIdsalon) ? 0 : drd.GetInt32(posIdsalon);
                                oHorarios2CLS.idCiclo = drd.IsDBNull(posIdciclo) ? 0 : drd.GetInt32(posIdciclo);
                                oHorarios2CLS.idMateria = drd.IsDBNull(posIdmateria) ? 0 : drd.GetInt32(posIdmateria);
                                oHorarios2CLS.idProfesor = drd.IsDBNull(posIdprofesor) ? 0 : drd.GetInt32(posIdprofesor);
                                oHorarios2CLS.horaInicio = drd.IsDBNull(posHorainicio) ? "" : drd.GetString(posHorainicio);
                                oHorarios2CLS.horaFin = drd.IsDBNull(posHorafin) ? "" : drd.GetString(posHorafin);
                                oHorarios2CLS.diaSemana = drd.IsDBNull(posDiasemana) ? "" : drd.GetString(posDiasemana);
                                lista.Add(oHorarios2CLS);
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
        public List<HorariosCLS> consultarOcupabilidad(int idGrupo, int idSalon, int idCiclo, int idMateria, int idProfesor, string horaInicio, string horaFin, string dia)
        {
            List<HorariosCLS> lista = null;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("consultarOcupabilidadWeb", cn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@idGrupo",idGrupo );
                        cmd.Parameters.AddWithValue("@idSalon",idSalon );
                        cmd.Parameters.AddWithValue("@idCiclo",idCiclo );
                        cmd.Parameters.AddWithValue("@idMateria",idMateria );
                        cmd.Parameters.AddWithValue("@idProfesor",idProfesor );
                        cmd.Parameters.AddWithValue("@horaInicio",horaInicio == null ? "" : horaInicio);
                        cmd.Parameters.AddWithValue("@horaFin",horaFin == null ? "" : horaFin);
                        cmd.Parameters.AddWithValue("@dia",dia == null ? "" : dia);
                        SqlDataReader drd = cmd.ExecuteReader();
                        if (drd != null)
                        {
                            HorariosCLS oHorariosCLS;
                            lista = new List<HorariosCLS>();

                            int posIdhorario  = drd.GetOrdinal("idHorario");
                            int posNombrehorario  = drd.GetOrdinal("nombreHorario");
                            int posGrupo  = drd.GetOrdinal("grupo");
                            int posSalon  = drd.GetOrdinal("salon");
                            int posCiclo  = drd.GetOrdinal("ciclo");
                            int posMateria  = drd.GetOrdinal("materia");
                            int posProfesor  = drd.GetOrdinal("profesor");
                            int posHorainicio  = drd.GetOrdinal("horaInicio");
                            int posHirafin  = drd.GetOrdinal("horaFin");
                            int posDia  = drd.GetOrdinal("dia");
                            int posError  = drd.GetOrdinal("error");

                            while (drd.Read())
                            {
                                oHorariosCLS = new HorariosCLS();
                                oHorariosCLS.idHorario = drd.IsDBNull(posIdhorario) ? 0 : drd.GetInt32(posIdhorario);
                                oHorariosCLS.nombreHorario = drd.IsDBNull(posNombrehorario) ? "" : drd.GetString(posNombrehorario);
                                oHorariosCLS.grupo = drd.IsDBNull(posGrupo) ? "" : drd.GetString(posGrupo);
                                oHorariosCLS.salon = drd.IsDBNull(posSalon) ? "" : drd.GetString(posSalon);
                                oHorariosCLS.ciclo = drd.IsDBNull(posCiclo) ? "" : drd.GetString(posCiclo);
                                oHorariosCLS.materia = drd.IsDBNull(posMateria) ? "" : drd.GetString(posMateria);
                                oHorariosCLS.profesor = drd.IsDBNull(posProfesor) ? "" : drd.GetString(posProfesor);
                                oHorariosCLS.horaInicio = drd.IsDBNull(posHorainicio) ? "" : drd.GetString(posHorainicio);
                                oHorariosCLS.hiraFin = drd.IsDBNull(posHirafin) ? "" : drd.GetString(posHirafin);
                                oHorariosCLS.dia = drd.IsDBNull(posDia) ? "" : drd.GetString(posDia);
                                oHorariosCLS.error = drd.IsDBNull(posError) ? "" : drd.GetString(posError);

                                lista.Add(oHorariosCLS);
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