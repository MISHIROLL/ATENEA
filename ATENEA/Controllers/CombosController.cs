using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using CapaEntidad;
using CapaNegocio;

namespace WebApp.Controllers
{
    [Authorize]
    public class ComboController : Controller
    {
        private readonly ILogger<ComboController> _logger;

        public ComboController(ILogger<ComboController> logger)
        {
            _logger = logger;
        }

        public List<ComboCLS> ComboCiclo()
        {
            ComboBL obj = new ComboBL();
            return obj.ComboCiclo();
        }

    }
}