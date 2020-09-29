using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GarmentsERP.Model;
using Microsoft.AspNetCore.Http;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using System.Drawing;
using Microsoft.AspNetCore.StaticFiles;

namespace GarmentsERP.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class TblInitialOrdersController : ControllerBase
    {
        private readonly GarmentERPContext _context;
        private IHostingEnvironment _host;
        private string RootPath;
        private string OutputPath;
        private string filePath="";
        private List<string> FileList;

        public TblInitialOrdersController(GarmentERPContext context,IHostingEnvironment host)
        {
            _context = context;
            _host = host;
            RootPath = _host.ContentRootPath;
            OutputPath = Path.Combine(RootPath, "wwwroot/content");
            FileList = new List<string>();
        }

       // GET: api/TblInitialOrders
       [HttpGet]
        public async Task<ActionResult<IEnumerable<TblInitialOrder>>> GetTblInitialOrder()
        {
           // var orderImageList = _context.OrderImageUploadTable.ToList();
           // var tblInitialOrderlist = _context.TblInitialOrder;
            //foreach (var order in tblInitialOrderlist)
            //{
            //    foreach (var image in orderImageList)
            //    {
            //        if (image.OrderImageId == order.OrderAutoId)
            //        {
            //            order.OrderImagePath = image.OrderImagePath;

            //        }
            //    }

            //}
            return await _context.tblInitialOrder.ToListAsync();
        }

      
      


            // GET: api/TblInitialOrders/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TblInitialOrder>> GetTblInitialOrder(int id)
        {
            var tblInitialOrder = await _context.tblInitialOrder.FindAsync(id);

            if (tblInitialOrder == null)
            {
                return NotFound();
            }

            return tblInitialOrder;

   
        }

        // GET: api/TblInitialOrders
        

        // PUT: api/TblInitialOrders/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblInitialOrder(int id, TblInitialOrder tblInitialOrder)
        {
            if (id != tblInitialOrder.OrderAutoID)
            {
                return BadRequest();
            }

            _context.Entry(tblInitialOrder).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
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
        
        
        
      

        // POST: api/TblInitialOrders
        [HttpPost]
        public async Task<ActionResult<TblInitialOrder>> PostTblInitialOrder(TblInitialOrder tblInitialOrder)
        {   
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var a = DateTime.Now.Year;
                double year = Convert.ToDouble(a) % 100;
                 tblInitialOrder.JobNo = "MKL-" + Convert.ToString(year) + "-0" + _context.tblInitialOrder.Count();
                _context.tblInitialOrder.Add(tblInitialOrder);
               await _context.SaveChangesAsync();

            }
            catch(Exception e)
            {

            }
            // here we want to make a formation of the order like MKL-18-1

            return CreatedAtAction("GetTblInitialOrder", new { id = tblInitialOrder.OrderAutoID }, tblInitialOrder);


        }

       

        // DELETE: api/TblInitialOrders/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TblInitialOrder>> DeleteTblInitialOrder(int id)
        {
            var tblInitialOrder = await _context.tblInitialOrder.FindAsync(id);
            if (tblInitialOrder == null)
            {
                return NotFound();
            }

            _context.tblInitialOrder.Remove(tblInitialOrder);
            await _context.SaveChangesAsync();

            return tblInitialOrder;
        }

        private bool TblInitialOrderExists(int id)
        {
            return _context.tblInitialOrder.Any(e => e.OrderAutoID == id);
        }
    }
}
