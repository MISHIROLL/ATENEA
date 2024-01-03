using System.Data.SqlTypes;

namespace CapaEntidad
{
    public class AlumnosCLS
    {
        public int idAlumno { get; set; }
        public string? nombre { get; set; }
        public string? apellidoPaterno { get; set; }
        public string? apellidoMaterno { get; set; }
        public string? numeroBoleta { get; set; }

    }
}