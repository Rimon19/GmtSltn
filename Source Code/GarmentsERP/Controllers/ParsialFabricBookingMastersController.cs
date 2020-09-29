using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GarmentsERP.Model;
using GarmentsERP.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GarmentsERP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ParsialFabricBookingMastersController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public ParsialFabricBookingMastersController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/ParsialFabricBookingMasters
        [HttpGet]
        public IEnumerable<ParsialFabricBookingMaster> GetParsialFabricBookingMaster()
        {
            //return _context.ParsialFabricBookingMaster;
            return _context.ParsialFabricBookingMaster.OrderByDescending(x => x.id);
        }

        // GET: api/ParsialFabricBookingMasters/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetParsialFabricBookingMaster([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var parsialFabricBookingMaster = await _context.ParsialFabricBookingMaster.FindAsync(id);

            if (parsialFabricBookingMaster == null)
            {
                return NotFound();
            }

            return Ok(parsialFabricBookingMaster);
        }


        // GET: api/ParsialFabricBookingMasters/searchBookingNo/tag
        [HttpGet("searchBookingNo/{tag}")]
        public async Task<IActionResult> GetParsisalFabricBookingMasterSearch([FromRoute] string tag)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            //  return _context.ParsialFabricBookingMaster.OrderByDescending(x => x.Id);
            var parsialFabricBookingMaster =  await  _context.ParsialFabricBookingMaster
                                             .Where(x => x.BookingNo.StartsWith(tag))
                                             .OrderByDescending(o=>o.id)
                                             .ToListAsync();
           
            
            if (parsialFabricBookingMaster == null)
            {
                return NotFound();
            }

            return  Ok(parsialFabricBookingMaster);
        }
        
        // PUT: api/ParsialFabricBookingMasters/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutParsialFabricBookingMaster([FromRoute] int id, [FromBody] ParsialFabricBookingMaster parsialFabricBookingMaster)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != parsialFabricBookingMaster.id)
            {
                return BadRequest();
            }

            _context.Entry(parsialFabricBookingMaster).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ParsialFabricBookingMasterExists(id))
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

        // POST: api/ParsialFabricBookingMasters
        [HttpPost]
        public async Task<IActionResult> PostParsialFabricBookingMaster([FromBody] FabricCostAndPreCostingNinitialOrderViewModel parsialFabricBookingMaster)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}


            // here we want to make a formation of the order like MKL-18-1

            //int max = _context.ParsialFabricBookingMaster.OrderByDescending(p => p.Id).FirstOrDefault().Id;
            //int b = max + 1;


            //var a = DateTime.Now.Year;
            //double year = Convert.ToDouble(a) % 100;
            //parsialFabricBookingMaster.BookingNo = "mkl-fb-" + Convert.ToString(year) +"-"+ b;

            //print(a);
            //print(year);


           // ParsialFabricBookingMaster parsialFabric=new ParsialFabricBookingMaster();

            FabricCost fabricCost=new FabricCost();
           // fabricCost.FabricCostId = parsialFabricBookingMaster.FabricCostId;
            fabricCost.PreCostingId = parsialFabricBookingMaster.PreCostingId;
            
            fabricCost.AvgGreyCons = 2;
          
            _context.FabricCost.Add(fabricCost);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetParsialFabricBookingMaster", new { }, parsialFabricBookingMaster);
        }

        // DELETE: api/ParsialFabricBookingMasters/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteParsialFabricBookingMaster([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var parsialFabricBookingMaster = await _context.ParsialFabricBookingMaster.FindAsync(id);
            if (parsialFabricBookingMaster == null)
            {
                return NotFound();
            }

            _context.ParsialFabricBookingMaster.Remove(parsialFabricBookingMaster);
            await _context.SaveChangesAsync();

            return Ok(parsialFabricBookingMaster);
        }

        private bool ParsialFabricBookingMasterExists(int id)
        {
            return _context.ParsialFabricBookingMaster.Any(e => e.id == id);
        }
    }
}