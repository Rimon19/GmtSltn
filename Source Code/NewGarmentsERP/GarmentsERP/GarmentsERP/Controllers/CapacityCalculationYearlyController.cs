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
    public class CapacityCalculationYearlyController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public CapacityCalculationYearlyController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/CapacityCalculationYearly
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CapacityCalculationYearly>>> GetCapacityCalculationYearly()
        {
            return await _context.CapacityCalculationYearly.ToListAsync();
        }

        // GET: api/CapacityCalculationYearly/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CapacityCalculationYearly>> GetCapacityCalculationYearly(int id)
        {
            var capacityCalculationYearly = await _context.CapacityCalculationYearly.FindAsync(id);

            if (capacityCalculationYearly == null)
            {
                return NotFound();
            }

            return capacityCalculationYearly;
        }

        // PUT: api/CapacityCalculationYearly/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCapacityCalculationYearly(int id, CapacityCalculationYearly capacityCalculationYearly)
        {
            if (id != capacityCalculationYearly.Id)
            {
                return BadRequest();
            }

            _context.Entry(capacityCalculationYearly).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CapacityCalculationYearlyExists(id))
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

        // POST: api/CapacityCalculationYearly
        [HttpPost]
        public async Task<ActionResult<CapacityCalculationYearly>> PostCapacityCalculationYearly(CapacityCalculationYearly capacityCalculationYearly)
        {
            _context.CapacityCalculationYearly.Add(capacityCalculationYearly);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCapacityCalculationYearly", new { id = capacityCalculationYearly.Id }, capacityCalculationYearly);
        }

        // DELETE: api/CapacityCalculationYearly/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<CapacityCalculationYearly>> DeleteCapacityCalculationYearly(int id)
        {
            var capacityCalculationYearly = await _context.CapacityCalculationYearly.FindAsync(id);
            if (capacityCalculationYearly == null)
            {
                return NotFound();
            }

            _context.CapacityCalculationYearly.Remove(capacityCalculationYearly);
            await _context.SaveChangesAsync();

            return capacityCalculationYearly;
        }

        private bool CapacityCalculationYearlyExists(int id)
        {
            return _context.CapacityCalculationYearly.Any(e => e.Id == id);
        }
    }
}
