using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GarmentsERP.Model;
using GarmentsERP.Model.MarchandisingModule.OfferingCost;

namespace GarmentsERP.Controllers.MarchandisingModule.OfferingCost
{
    [Route("api/[controller]")]
    [ApiController]
    public class OfferingCostFabricPriceCalculationBykgsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public OfferingCostFabricPriceCalculationBykgsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/OfferingCostFabricPriceCalculationBykgs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<OfferingCostFabricPriceCalculationBykg>>> GetOfferingCostFabricPriceCalculationBykg()
        {
            return await _context.OfferingCostFabricPriceCalculationBykg.ToListAsync();
        }

        // GET: api/OfferingCostFabricPriceCalculationBykgs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<OfferingCostFabricPriceCalculationBykg>> GetOfferingCostFabricPriceCalculationBykg(int id)
        {
            var offeringCostFabricPriceCalculationBykg = await _context.OfferingCostFabricPriceCalculationBykg.FindAsync(id);

            if (offeringCostFabricPriceCalculationBykg == null)
            {
                return NotFound();
            }

            return offeringCostFabricPriceCalculationBykg;
        }

        // PUT: api/OfferingCostFabricPriceCalculationBykgs/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOfferingCostFabricPriceCalculationBykg(int id, OfferingCostFabricPriceCalculationBykg offeringCostFabricPriceCalculationBykg)
        {
            if (id != offeringCostFabricPriceCalculationBykg.Id)
            {
                return BadRequest();
            }

            _context.Entry(offeringCostFabricPriceCalculationBykg).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OfferingCostFabricPriceCalculationBykgExists(id))
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

        // POST: api/OfferingCostFabricPriceCalculationBykgs
        [HttpPost]
        public async Task<ActionResult<OfferingCostFabricPriceCalculationBykg>> PostOfferingCostFabricPriceCalculationBykg(OfferingCostFabricPriceCalculationBykg offeringCostFabricPriceCalculationBykg)
        {
            _context.OfferingCostFabricPriceCalculationBykg.Add(offeringCostFabricPriceCalculationBykg);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOfferingCostFabricPriceCalculationBykg", new { id = offeringCostFabricPriceCalculationBykg.Id }, offeringCostFabricPriceCalculationBykg);
        }

        // DELETE: api/OfferingCostFabricPriceCalculationBykgs/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<OfferingCostFabricPriceCalculationBykg>> DeleteOfferingCostFabricPriceCalculationBykg(int id)
        {
            var offeringCostFabricPriceCalculationBykg = await _context.OfferingCostFabricPriceCalculationBykg.FindAsync(id);
            if (offeringCostFabricPriceCalculationBykg == null)
            {
                return NotFound();
            }

            _context.OfferingCostFabricPriceCalculationBykg.Remove(offeringCostFabricPriceCalculationBykg);
            await _context.SaveChangesAsync();

            return offeringCostFabricPriceCalculationBykg;
        }

        private bool OfferingCostFabricPriceCalculationBykgExists(int id)
        {
            return _context.OfferingCostFabricPriceCalculationBykg.Any(e => e.Id == id);
        }
    }
}
