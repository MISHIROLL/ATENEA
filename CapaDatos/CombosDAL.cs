using CapaEntidad;
using System.Data.SqlClient;
using System.Data;
using System.Drawing;

namespace CapaDatos
{
    public class CombosDAL : CadenaDAL
    {
        
        public List<ComboCLS> ComboCiclo()
        {
            List<ComboCLS> lista = null;

            using(SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using(SqlCommand cmd = new SqlCommand("select CAST(idCiclo AS VARCHAR) IdCombo, nombreCiclo as TxtCombo from CicloEscolar",cn))
                    {
                        cmd.CommandType = CommandType.Text;
                        SqlDataReader drd = cmd.ExecuteReader(CommandBehavior.SingleResult);
                        if(drd != null)
                        {
                            ComboCLS oComboCLS;
                            lista = new List<ComboCLS>();

                            int posId = drd.GetOrdinal("IdCombo");
                            int posTxtCombo = drd.GetOrdinal("TxtCombo");

                            while(drd.Read())
                            {
                                oComboCLS = new ComboCLS();
                                oComboCLS.IdCombo = drd.IsDBNull(posId) ? "" : drd.GetString(posId);
                                oComboCLS.TxtCombo = drd.IsDBNull(posTxtCombo) ? "" : drd.GetString(posTxtCombo);
                                lista.Add(oComboCLS);
                            }
                            cn.Close();
                        }
                    }
                }
                catch (System.Exception e)
                {
                    Console.BackgroundColor = ConsoleColor.DarkBlue;
                    Console.WriteLine(e);
                    Console.ResetColor();
                    lista = null;
                    cn.Close();
                }
            }

            return lista;
        }

        public List<ComboCLS> ComboGrupo()
        {
            List<ComboCLS> lista = null;

            using(SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using(SqlCommand cmd = new SqlCommand("select CAST(idGrupo AS VARCHAR) IdCombo, grupo as TxtCombo from Grupo",cn))
                    {
                        cmd.CommandType = CommandType.Text;
                        SqlDataReader drd = cmd.ExecuteReader(CommandBehavior.SingleResult);
                        if(drd != null)
                        {
                            ComboCLS oComboCLS;
                            lista = new List<ComboCLS>();

                            int posId = drd.GetOrdinal("IdCombo");
                            int posTxtCombo = drd.GetOrdinal("TxtCombo");

                            while(drd.Read())
                            {
                                oComboCLS = new ComboCLS();
                                oComboCLS.IdCombo = drd.IsDBNull(posId) ? "" : drd.GetString(posId);
                                oComboCLS.TxtCombo = drd.IsDBNull(posTxtCombo) ? "" : drd.GetString(posTxtCombo);
                                lista.Add(oComboCLS);
                            }
                            cn.Close();
                        }
                    }
                }
                catch (System.Exception e)
                {
                    Console.BackgroundColor = ConsoleColor.DarkBlue;
                    Console.WriteLine(e);
                    Console.ResetColor();
                    lista = null;
                    cn.Close();
                }
            }

            return lista;
        }
        public List<ComboCLS> ComboAlumnos(int ciclo,int grupo)
        {
            List<ComboCLS> lista = null;

            using(SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using(SqlCommand cmd = new SqlCommand("listarAlumnosWeb",cn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@ciclo",ciclo == null ? "0" : ciclo);
                        cmd.Parameters.AddWithValue("@grupo",grupo == null ? "0" : grupo);
                        SqlDataReader drd = cmd.ExecuteReader(CommandBehavior.SingleResult);
                        if(drd != null)
                        {
                            ComboCLS oComboCLS;
                            lista = new List<ComboCLS>();

                            int posId = drd.GetOrdinal("IdCombo");
                            int posTxtCombo = drd.GetOrdinal("TxtCombo");

                            while(drd.Read())
                            {
                                oComboCLS = new ComboCLS();
                                oComboCLS.IdCombo = drd.IsDBNull(posId) ? "" : drd.GetString(posId);
                                oComboCLS.TxtCombo = drd.IsDBNull(posTxtCombo) ? "" : drd.GetString(posTxtCombo);
                                lista.Add(oComboCLS);
                            }
                            cn.Close();
                        }
                    }
                }
                catch (System.Exception e)
                {
                    Console.BackgroundColor = ConsoleColor.DarkBlue;
                    Console.WriteLine(e);
                    Console.ResetColor();
                    lista = null;
                    cn.Close();
                }
            }

            return lista;
        }
        public List<ComboCLS> ComboProfesores(int idMateria)
        {
            List<ComboCLS> lista = null;

            using(SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using(SqlCommand cmd = new SqlCommand("listarProfesoresWeb",cn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@idMateria",idMateria == null ? "0" : idMateria);
                        SqlDataReader drd = cmd.ExecuteReader(CommandBehavior.SingleResult);
                        if(drd != null)
                        {
                            ComboCLS oComboCLS;
                            lista = new List<ComboCLS>();

                            int posId = drd.GetOrdinal("IdCombo");
                            int posTxtCombo = drd.GetOrdinal("TxtCombo");

                            while(drd.Read())
                            {
                                oComboCLS = new ComboCLS();
                                oComboCLS.IdCombo = drd.IsDBNull(posId) ? "" : drd.GetString(posId);
                                oComboCLS.TxtCombo = drd.IsDBNull(posTxtCombo) ? "" : drd.GetString(posTxtCombo);
                                lista.Add(oComboCLS);
                            }
                            cn.Close();
                        }
                    }
                }
                catch (System.Exception e)
                {
                    Console.BackgroundColor = ConsoleColor.DarkBlue;
                    Console.WriteLine(e);
                    Console.ResetColor();
                    lista = null;
                    cn.Close();
                }
            }

            return lista;
        }
        public List<ComboCLS> ComboMaterias()
        {
            List<ComboCLS> lista = null;

            using(SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using(SqlCommand cmd = new SqlCommand("select CAST(idMateria AS VARCHAR) IdCombo, nombreMateria as TxtCombo from Materia",cn))
                    {
                        cmd.CommandType = CommandType.Text;
                        SqlDataReader drd = cmd.ExecuteReader(CommandBehavior.SingleResult);
                        if(drd != null)
                        {
                            ComboCLS oComboCLS;
                            lista = new List<ComboCLS>();

                            int posId = drd.GetOrdinal("IdCombo");
                            int posTxtCombo = drd.GetOrdinal("TxtCombo");

                            while(drd.Read())
                            {
                                oComboCLS = new ComboCLS();
                                oComboCLS.IdCombo = drd.IsDBNull(posId) ? "" : drd.GetString(posId);
                                oComboCLS.TxtCombo = drd.IsDBNull(posTxtCombo) ? "" : drd.GetString(posTxtCombo);
                                lista.Add(oComboCLS);
                            }
                            cn.Close();
                        }
                    }
                }
                catch (System.Exception e)
                {
                    Console.BackgroundColor = ConsoleColor.DarkBlue;
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