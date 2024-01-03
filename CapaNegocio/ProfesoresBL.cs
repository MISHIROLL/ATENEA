using CapaDatos;
using CapaEntidad;

namespace CapaNegocio
{
    public class ProfesoresBL
    {
        public string insertarProfesores(string nombre,string apellidoPa,string apellidoMa,string numeroTrabajador, int idMateria)
        {
            ProfesoresDAL obj = new ProfesoresDAL();
            return obj.insertarProfesores(nombre,apellidoPa,apellidoMa,numeroTrabajador,idMateria);
        }
        public List<ProfesoresCLS> listarProfesores(int idProfesor)
        {
            ProfesoresDAL obj = new ProfesoresDAL();
            return obj.listarProfesores(idProfesor);
        }

        public string actualizarProfesor(string nombre,string apellidoPa,string apellidoMa,string numeroTrabajador, int idProfesor)
        {
            ProfesoresDAL obj = new ProfesoresDAL();
            return obj.actualizarProfesor(nombre,apellidoPa,apellidoMa,numeroTrabajador,idProfesor);
        }
        public string eliminarProfesor(int idProfesor)
        {
            ProfesoresDAL obj = new ProfesoresDAL();
            return obj.eliminarProfesor(idProfesor);
        }
    }
}