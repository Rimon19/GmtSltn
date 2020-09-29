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
    public class MinLeadTimeSlabsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public MinLeadTimeSlabsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/MinLeadTimeSlabs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MinLeadTimeSlab>>> GetMinLeadTimeSlab()
        {
            return await _context.MinLeadTimeSlab.ToListAsync();
        }

        // GET: api/MinLeadTimeSlabs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MinLeadTimeSlab>> GetMinLeadTimeSlab(int id)
        {
            var minLeadTimeSlab = await _context.MinLeadTimeSlab.FindAsync(id);

            if (minLeadTimeSlab == null)
            {
                return NotFound();
            }

            return minLeadTimeSlab;
        }

        // PUT: api/MinLeadTimeSlabs/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMinLeadTimeSlab(int id, MinLeadTimeSlab minLeadTimeSlab)
        {
            if (id != minLeadTimeSlab.Id)
            {
                return BadRequest();
            }

            _context.Entry(minLeadTimeSlab).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MinLeadTimeSlabExists(id))
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

        // POST: api/MinLeadTimeSlabs
        [HttpPost]
        public async Task<ActionResult<MinLeadTimeSlab>> PostMinLeadTimeSlab(MinLeadTimeSlab minLeadTimeSlab)
        {
            _context.MinLeadTimeSlab.Add(minLeadTimeSlab);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMinLeadTimeSlab", new { id = minLeadTimeSlab.Id }, minLeadTimeSlab);
        }

        // DELETE: api/MinLeadTimeSlabs/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<MinLeadTimeSlab>> DeleteMinLeadTimeSlab(int id)
        {
            var minLeadTimeSlab = await _context.MinLeadTimeSlab.FindAsync(id);
            if (minLeadTimeSlab == null)
            {
                return NotFound();
            }

            _context.MinLeadTimeSlab.Remove(minLeadTimeSlab);
            await _context.SaveChangesAsync();

            return minLeadTimeSlab;
        }

        private bool MinLeadTimeSlabExists(int id)
        {
            return _context.MinLeadTimeSlab.Any(e => e.Id == id);
        }
    }
}
