using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ATENEA.Models;
using CapaEntidad;
using CapaNegocio;

namespace WebApp.Controllers
{
    [Authorize]
    public class PermisosController : Controller
    {
        private readonly ILogger<PermisosController> _logger;
       
        

        public PermisosController(ILogger<PermisosController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {   
            string usuario = User.Identity.Name;
            return View();
        }
        public List<PermisosCLS> listarPermisos()
        {
            string usuario = User.Identity.Name;
            PermisosBL obj = new PermisosBL();
            return obj.obtenerPermisos(usuario); 
        }
        
        


    }
}
