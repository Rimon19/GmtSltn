using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace GarmentsERP.Model
{
    public class DBConnection

    {
       
        public static string ConnectionString { get; set; }
        //public IConfiguration Configuration { get; }

        //public DBConnection(IConfiguration configuration)
        //{
        //    Configuration = configuration;
        //}

        //public DBConnection()
        //{
        //    this.ConnectionString= Configuration.GetConnectionString("DefaultConnection");
        //}
    }
}
