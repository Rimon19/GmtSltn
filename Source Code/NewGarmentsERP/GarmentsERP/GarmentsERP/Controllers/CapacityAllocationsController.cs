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
    public class CapacityAllocationsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public CapacityAllocationsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/CapacityAllocations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CapacityAllocation>>> GetCapacityAllocation()
        {
            return await _context.CapacityAllocation.ToListAsync();
        }

        // GET: api/CapacityAllocations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CapacityAllocation>> GetCapacityAllocation(int id)
        {
            var capacityAllocation = await _context.CapacityAllocation.FindAsync(id);

            if (capacityAllocation == null)
            {
                return NotFound();
            }

            return capacityAllocation;
        }

        // PUT: api/CapacityAllocations/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCapacityAllocation(int id, CapacityAllocation capacityAllocation)
        {
            if (id != capacityAllocation.Id)
            {
                return BadRequest();
            }

            _context.Entry(capacityAllocation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CapacityAllocationExists(id))
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

        // POST: api/CapacityAllocations
        [HttpPost]
        public async Task<ActionResult<CapacityAllocation>> PostCapacityAllocation(CapacityAllocation capacityAllocation)
        {
            _context.CapacityAllocation.Add(capacityAllocation);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCapacityAllocation", new { id = capacityAllocation.Id }, capacityAllocation);
        }

        // DELETE: api/CapacityAllocations/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<CapacityAllocation>> DeleteCapacityAllocation(int id)
        {
            var capacityAllocation = await _context.CapacityAllocation.FindAsync(id);
            if (capacityAllocation == null)
            {
                return NotFound();
            }

            _context.CapacityAllocation.Remove(capacityAllocation);
            await _context.SaveChangesAsync();

            return capacityAllocation;
        }

        private bool CapacityAllocationExists(int id)
        {
            return _context.CapacityAllocation.Any(e => e.Id == id);
        }
    }
}
