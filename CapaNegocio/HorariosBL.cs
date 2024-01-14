using CapaDatos;
using CapaEntidad;

namespace CapaNegocio
{
    public class HorariosBL
    {
        public List<HorariosCLS> consultarOcupabilidad(int idGrupo, int idSalon, int idCiclo, int idMateria, int idProfesor, string horaInicio, string horaFin, string dia)
        {
            HorariosDAL obj = new HorariosDAL();
            return obj.consultarOcupabilidad(idGrupo,idSalon,idCiclo,idMateria,idProfesor,horaInicio,horaFin,dia);
        }
        public string insertarHorarios(int? idGrupo,int? idSalon,int? idCiclo,int? idMateria,int? idProfesor,string horaInicio,string horaFin,string dia)
        {
            HorariosDAL obj = new HorariosDAL();
            return obj.insertarHorarios(idGrupo,idSalon,idCiclo,idMateria,idProfesor,horaInicio,horaFin,dia);
        }
        public List<Horarios2CLS> listarHorarios(string nombreHorario)
        {
            HorariosDAL obj = new HorariosDAL();
            return obj.listarHorarios(nombreHorario);
        }

        public string actualizarAlumno(string nombre,string apellidoPa,string apellidoMa,string boleta,string correo,int idAlumno)
        {
            AlumnosDAL obj = new AlumnosDAL();
            return obj.actualizarAlumno(nombre,apellidoPa,apellidoMa,boleta,correo,idAlumno);
        }
        public string eliminarAlumno(int idAlumno)
        {
            AlumnosDAL obj = new AlumnosDAL();
            return obj.eliminarAlumno(idAlumno);
        }
    }
}