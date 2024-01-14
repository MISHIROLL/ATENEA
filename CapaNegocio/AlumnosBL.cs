using CapaDatos;
using CapaEntidad;

namespace CapaNegocio
{
    public class AlumnosBL
    {
        public string insertarAlumnos(string nombre,string apellidoPa,string apellidoMa,string boleta,string correo)
        {
            AlumnosDAL obj = new AlumnosDAL();
            return obj.insertarAlumnos(nombre,apellidoPa,apellidoMa,boleta,correo);
        }
        public List<AlumnosCLS> listarAlumnos(int idAlumno)
        {
            AlumnosDAL obj = new AlumnosDAL();
            return obj.listarAlumnos(idAlumno);
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