using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GarmentsERP.Model;

namespace GarmentsERP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PreCostingsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public PreCostingsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/PreCostings
        [HttpGet]
        public IEnumerable<PreCosting> GetPreCosting()
        {
            return _context.PreCosting;
        }

        // GET: api/PreCostings/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPreCosting([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var preCosting = await _context.PreCosting.FindAsync(id);

            if (preCosting == null)
            {
                return NotFound();
            }

            return Ok(preCosting);
        }

        // GET: api/PreCostings/5
        // Search precosting id using order id
        [HttpGet("searchPreCostingId/{OrderID}")]
        public async Task<IActionResult> GetPreCostingIdUsingOrderID([FromRoute] int OrderID)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var preCosting = await _context.PreCosting
                                             .Where(x => x.OrderId == OrderID)
                                             .ToListAsync();

            if (preCosting == null)
            {
                return NotFound();
            }

            return Ok(preCosting);
        }


        [HttpGet("DetailsFabCost/{id}")]
        public IActionResult GetFabCost([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var Fabcost = _context.FabricCost.Where(x => x.PreCostingId == id);


            if (Fabcost == null)
            {
                return NotFound();
            }


            return Ok(Fabcost);

        }

        
   [HttpGet("DetailsYarncost/{id}")]
        public IActionResult GetYarnCost([FromRoute] int id)

        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var yarncost = _context.YarnCostPreCosting.Where(x => x.PreCostingId == id);


            if (yarncost == null)
            {
                return NotFound();
            }


            return Ok(yarncost);

        }


        [HttpGet("DetailsConversionCost/{id}")]
        public IActionResult GetConversionCost([FromRoute] int id)

        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var convocst = _context.ConversionCostPreCosting.Where(x => x.PreCostingId == id);


            if (convocst == null)
            {
                return NotFound();
            }


            return Ok(convocst);

        }

        // PUT: api/PreCostings/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPreCosting([FromRoute] int id, [FromBody] PreCosting preCosting)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != preCosting.PrecostingId)
            {
                return BadRequest();
            }

            _context.Entry(preCosting).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PreCostingExists(id))
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

        // POST: api/PreCostings
        [HttpPost]
        public async Task<IActionResult> PostPreCosting([FromBody] PreCosting preCosting)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.PreCosting.Add(preCosting);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPreCosting", new { id = preCosting.PrecostingId }, preCosting);
        }

        // DELETE: api/PreCostings/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePreCosting([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var preCosting = await _context.PreCosting.FindAsync(id);
            if (preCosting == null)
            {
                return NotFound();
            }

            _context.PreCosting.Remove(preCosting);
            await _context.SaveChangesAsync();

            return Ok(preCosting);
        }

        private bool PreCostingExists(int id)
        {
            return _context.PreCosting.Any(e => e.PrecostingId == id);
        }
    }
}