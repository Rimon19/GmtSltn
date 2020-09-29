using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GarmentsERP.Model;
using GarmentsERP.ViewModel;
using System.Web.Http;
using Microsoft.IdentityModel.Tokens;
using Npgsql;

namespace GarmentsERP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class initialordersController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public initialordersController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/initialorders/Index
        //[HttpGet]


        [HttpGet("Index")]
        public IEnumerable<TblInitialOrder> GetTblInitialOrder()
        {
            return _context.TblInitialOrder.OrderByDescending(x => x.OrderAutoId);
        }

        // GET: api/initialorders/5


        [HttpGet("{id}")]
        public async Task<IActionResult> GetTblInitialOrder([FromRoute] int id)

        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tblInitialOrder = await _context.TblInitialOrder.FindAsync(id);

            if (tblInitialOrder == null)
            {
                return NotFound();
            }

            return Ok(tblInitialOrder);
        }

        //api/initialorders/jobsearch/{tag}
        // Search using job no
        [HttpGet("jobsearch/{tag}")]
        public  IEnumerable<TabInitailOrderNTblDetailsInfro> GetTblInitialByJobNo([FromRoute] string tag)
        {
         
            var connString = DBConnection.ConnectionString;

            NpgsqlConnection conn=new NpgsqlConnection(connString);
            var sql = "";
            List<TabInitailOrderNTblDetailsInfro>  initailOrderNTblDetailsInfros=
                new List<TabInitailOrderNTblDetailsInfro>();
            conn.Open();
            sql = "select * from \"VwForSearchData\"";
            NpgsqlCommand cmd = new NpgsqlCommand(sql, conn);
            NpgsqlDataReader reader = cmd.ExecuteReader();

            while (reader.Read())
            {
                TabInitailOrderNTblDetailsInfro initailOrderNTblDetailsInfro=new TabInitailOrderNTblDetailsInfro();

                initailOrderNTblDetailsInfro.jobNo = reader["JobNo"].ToString();
                initailOrderNTblDetailsInfro.PoNo = reader["po_no"].ToString();
                initailOrderNTblDetailsInfro.Item = reader["item_sizes"].ToString();
                initailOrderNTblDetailsInfro.BodyPart = reader["BodyPartType"].ToString();
                initailOrderNTblDetailsInfro.Contruction = reader["Construction"].ToString();
                initailOrderNTblDetailsInfro.Composition = reader["Composition"].ToString();
                initailOrderNTblDetailsInfro.GSM = reader["GSM/Weight"].ToString();
                initailOrderNTblDetailsInfro.FabricNature = reader["FabNature"].ToString();
                initailOrderNTblDetailsInfro.FabricSource = reader["Fabric_SOurce"].ToString();
                initailOrderNTblDetailsInfro.UOM =reader["Uom"].ToString();
                initailOrderNTblDetailsInfros.Add(initailOrderNTblDetailsInfro);

            }
            conn.Close();
            initailOrderNTblDetailsInfros=initailOrderNTblDetailsInfros.Where(w => w.jobNo == tag).ToList();
            return initailOrderNTblDetailsInfros;
        }

        [HttpPost]
        public async Task<IActionResult> saveBookingDetails(FabricCostAndPreCostingNinitialOrderViewModel fabricCostAndPreCostingNinitialOrderView)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // here we want to make a formation of the order like MKL-18-1




            return Ok();
        }

        // GET: api/initialorders/Details/:id
        [HttpGet("Details/{id}")]
        public IActionResult GetOrdermasterDetails([FromRoute] int id)

        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var orderdetails = _context.TblPodetailsInfro
                            .Where(x => x.InitialOrderId == id);




            if (orderdetails == null)
            {
                return NotFound();
            }


            return Ok(orderdetails);

        }

        // PUT: api/initialorders/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblInitialOrder([FromRoute] int id, [FromBody] TblInitialOrder tblInitialOrder)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tblInitialOrder.OrderAutoId)
            {
                return BadRequest();
            }


            _context.Entry(tblInitialOrder).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
                return CreatedAtAction("GetTblInitialOrder", new { id = tblInitialOrder.OrderAutoId }, tblInitialOrder);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblInitialOrderExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/initialorders
        [HttpPost]
        public async Task<IActionResult> PostTblInitialOrder([FromBody] TblInitialOrder tblInitialOrder)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // here we want to make a formation of the order like MKL-18-1

            int max = _context.TblInitialOrder.OrderByDescending(p => p.OrderAutoId).FirstOrDefault().OrderAutoId;
            int b = max + 1;


            var a = DateTime.Now.Year;
            double year = Convert.ToDouble(a) % 100;
            tblInitialOrder.JobNo = "MKL-"+Convert.ToString(year) +"-"+ b;


            _context.TblInitialOrder.Add(tblInitialOrder);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTblInitialOrder", new { id = tblInitialOrder.OrderAutoId }, tblInitialOrder);
        }


        // DELETE: api/initialorders/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTblInitialOrder([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tblInitialOrder = await _context.TblInitialOrder.FindAsync(id);
            if (tblInitialOrder == null)
            {
                return NotFound();
            }

            _context.TblInitialOrder.Remove(tblInitialOrder);
            await _context.SaveChangesAsync();

            return Ok(tblInitialOrder);
        }

        private bool TblInitialOrderExists(int id)
        {
            return _context.TblInitialOrder.Any(e => e.OrderAutoId == id);
        }
    }

    
}