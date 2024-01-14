using System.Data.SqlTypes;

namespace CapaEntidad
{
    public class HorariosCLS
    {
        public int idHorario { get; set; }
        public string nombreHorario { get; set; }
        public string grupo { get; set; }
        public string salon { get; set; }
        public string ciclo { get; set; }
        public string materia { get; set; }
        public string profesor { get; set; }
        public string horaInicio { get; set; }
        public string hiraFin { get; set; }
        public string dia { get; set; }
        public string error { get; set; }
    }
    public class Horarios2CLS{
        public int idHorario { get; set; }
        public string nombreHorario { get; set; }
        public int idGrupo { get; set; }
        public int idSalon { get; set; }
        public int idCiclo { get; set; }
        public int idMateria { get; set; }
        public int idProfesor { get; set; }
        public string horaInicio { get; set; }
        public string horaFin { get; set; }
        public string diaSemana { get; set; }

    }
}