using System.Data.SqlTypes;

namespace CapaEntidad
{
    public class ProfesoresCLS
    {
        public int idProfesor { get; set; }
        public string? nombre { get; set; }
        public string? apellidoPaterno { get; set; }
        public string? apellidoMaterno { get; set; }
        public string? numeroTrabajador { get; set; }

    }
}