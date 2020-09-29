using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FastReport.Web;
using Npgsql;
using System.Data;
using FastReport.Data;
using FastReport;

namespace WebFastReportUsingCoreAngular.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }

        [HttpGet("[action]/{buyerID}")]
        public IActionResult ShowReport(string buyerID)
        {
            //Calling report using postgreSQL connectionstring
            WebReport WebReport = new WebReport();
            var connString = DBConnection.ConnectionString;
            try
            {
                //Calling report with function parameters
                //Report object initialization
                WebReport.Width = "1000";
                WebReport.Height = "1000";
                WebReport.Report.Load("App_Data/rptBuyerInfoByFunc.frx"); // Load the report into the WebReport object
                WebReport.Report.Dictionary.Connections[0].ConnectionString = connString;

                //Set value to report parameters
                WebReport.Report.SetParameterValue("Param", Convert.ToInt32(buyerID));
                WebReport.Report.Prepare();
                //END

                ////Report object initialization
                //WebReport.Width = "1000";
                //WebReport.Height = "1000";
                //WebReport.Report.Load("App_Data/rptBuyerInfo.frx"); // Load the report into the WebReport object
                //WebReport.Report.Dictionary.Connections[0].ConnectionString = connString;

                ////Set value to report parameters
                //WebReport.Report.SetParameterValue("FromDate", "01/Jan/2020");
                //WebReport.Report.SetParameterValue("ToDate", "30/Jan/2020");

                /////Filtering the report data using Dynamic Query
                //FastReport.Data.TableDataSource data = WebReport.Report.GetDataSource("public_tblBuyerInfo") as FastReport.Data.TableDataSource;
                //data.SelectCommand = "select * from \"tblBuyerInfo\" Where \"BuyerID\"=2";
                //WebReport.Report.Prepare();

                //WebReport.Report.RegisterData(dsBuyers, "Buyer"); // Registering the data source in the report
            }
            catch (Exception ex)
            {
                ViewBag.WebReport = ex.Message;
            }
            ViewBag.WebReport = WebReport; // pass the report to View

            //WebReport WebReport = new WebReport();
            //WebReport.Width = "1000";
            //WebReport.Height = "1000";
            //WebReport.Report.Load("App_Data/Master-Detail.frx"); // Load the report into the WebReport object
            //System.Data.DataSet dataSet = new System.Data.DataSet(); // Create a data source
            //dataSet.ReadXml("App_Data/nwind.xml");  // Open the xml database            
            //WebReport.Report.RegisterData(dataSet, "NorthWind"); // Registering the data source in the report
            //ViewBag.WebReport = WebReport; // pass the report to View

            return View();
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }
    }
}
