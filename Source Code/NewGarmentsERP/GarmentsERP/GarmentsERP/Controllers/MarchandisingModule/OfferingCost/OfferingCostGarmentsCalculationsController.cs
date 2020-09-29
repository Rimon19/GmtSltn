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
    public class OfferingCostGarmentsCalculationsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public OfferingCostGarmentsCalculationsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/OfferingCostGarmentsCalculations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<OfferingCostGarmentsCalculation>>> GetOfferingCostGarmentsCalculation()
        {
            return await _context.OfferingCostGarmentsCalculation.ToListAsync();
        }

        // GET: api/OfferingCostGarmentsCalculations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<OfferingCostGarmentsCalculation>> GetOfferingCostGarmentsCalculation(int id)
        {
            var offeringCostGarmentsCalculation = await _context.OfferingCostGarmentsCalculation.FindAsync(id);

            if (offeringCostGarmentsCalculation == null)
            {
                return NotFound();
            }

            return offeringCostGarmentsCalculation;
        }

        // PUT: api/OfferingCostGarmentsCalculations/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOfferingCostGarmentsCalculation(int id, OfferingCostGarmentsCalculation offeringCostGarmentsCalculation)
        {
            if (id != offeringCostGarmentsCalculation.Id)
            {
                return BadRequest();
            }

            _context.Entry(offeringCostGarmentsCalculation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OfferingCostGarmentsCalculationExists(id))
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

        // POST: api/OfferingCostGarmentsCalculations
        [HttpPost]
        public async Task<ActionResult<OfferingCostGarmentsCalculation>> PostOfferingCostGarmentsCalculation(OfferingCostGarmentsCalculation offeringCostGarmentsCalculation)
        {
            _context.OfferingCostGarmentsCalculation.Add(offeringCostGarmentsCalculation);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOfferingCostGarmentsCalculation", new { id = offeringCostGarmentsCalculation.Id }, offeringCostGarmentsCalculation);
        }

        // DELETE: api/OfferingCostGarmentsCalculations/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<OfferingCostGarmentsCalculation>> DeleteOfferingCostGarmentsCalculation(int id)
        {
            var offeringCostGarmentsCalculation = await _context.OfferingCostGarmentsCalculation.FindAsync(id);
            if (offeringCostGarmentsCalculation == null)
            {
                return NotFound();
            }

            _context.OfferingCostGarmentsCalculation.Remove(offeringCostGarmentsCalculation);
            await _context.SaveChangesAsync();

            return offeringCostGarmentsCalculation;
        }

        private bool OfferingCostGarmentsCalculationExists(int id)
        {
            return _context.OfferingCostGarmentsCalculation.Any(e => e.Id == id);
        }
    }
}
