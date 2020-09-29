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
    public class TNATaskPercentsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public TNATaskPercentsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/TNATaskPercents
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TNATaskPercent>>> GetTNATaskPercent()
        {
            return await _context.TNATaskPercent.ToListAsync();
        }

        // GET: api/TNATaskPercents/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TNATaskPercent>> GetTNATaskPercent(int id)
        {
            var tNATaskPercent = await _context.TNATaskPercent.FindAsync(id);

            if (tNATaskPercent == null)
            {
                return NotFound();
            }

            return tNATaskPercent;
        }

        // PUT: api/TNATaskPercents/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTNATaskPercent(int id, TNATaskPercent tNATaskPercent)
        {
            if (id != tNATaskPercent.Id)
            {
                return BadRequest();
            }

            _context.Entry(tNATaskPercent).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TNATaskPercentExists(id))
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

        // POST: api/TNATaskPercents
        [HttpPost]
        public async Task<ActionResult<TNATaskPercent>> PostTNATaskPercent(TNATaskPercent tNATaskPercent)
        {
            _context.TNATaskPercent.Add(tNATaskPercent);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTNATaskPercent", new { id = tNATaskPercent.Id }, tNATaskPercent);
        }

        // DELETE: api/TNATaskPercents/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TNATaskPercent>> DeleteTNATaskPercent(int id)
        {
            var tNATaskPercent = await _context.TNATaskPercent.FindAsync(id);
            if (tNATaskPercent == null)
            {
                return NotFound();
            }

            _context.TNATaskPercent.Remove(tNATaskPercent);
            await _context.SaveChangesAsync();

            return tNATaskPercent;
        }

        private bool TNATaskPercentExists(int id)
        {
            return _context.TNATaskPercent.Any(e => e.Id == id);
        }
    }
}
