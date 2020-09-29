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
    public class KnittingChargesController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public KnittingChargesController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/KnittingCharges
        [HttpGet]
        public async Task<ActionResult<IEnumerable<KnittingCharge>>> GetKnittingCharge()
        {
            return await _context.KnittingCharge.ToListAsync();
        }

        // GET: api/KnittingCharges/5
        [HttpGet("{id}")]
        public async Task<ActionResult<KnittingCharge>> GetKnittingCharge(int id)
        {
            var knittingCharge = await _context.KnittingCharge.FindAsync(id);

            if (knittingCharge == null)
            {
                return NotFound();
            }

            return knittingCharge;
        }

        // PUT: api/KnittingCharges/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutKnittingCharge(int id, KnittingCharge knittingCharge)
        {
            if (id != knittingCharge.Id)
            {
                return BadRequest();
            }

            _context.Entry(knittingCharge).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!KnittingChargeExists(id))
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

        // POST: api/KnittingCharges
        [HttpPost]
        public async Task<ActionResult<KnittingCharge>> PostKnittingCharge(KnittingCharge knittingCharge)
        {
            _context.KnittingCharge.Add(knittingCharge);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetKnittingCharge", new { id = knittingCharge.Id }, knittingCharge);
        }

        // DELETE: api/KnittingCharges/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<KnittingCharge>> DeleteKnittingCharge(int id)
        {
            var knittingCharge = await _context.KnittingCharge.FindAsync(id);
            if (knittingCharge == null)
            {
                return NotFound();
            }

            _context.KnittingCharge.Remove(knittingCharge);
            await _context.SaveChangesAsync();

            return knittingCharge;
        }

        private bool KnittingChargeExists(int id)
        {
            return _context.KnittingCharge.Any(e => e.Id == id);
        }
    }
}
