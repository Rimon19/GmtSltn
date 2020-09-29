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
    public class GarmentsItemEntriesController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public GarmentsItemEntriesController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/GarmentsItemEntries
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GarmentsItemEntry>>> GetGarmentsItemEntry()
        {
            return await _context.GarmentsItemEntry.ToListAsync();
        }

        // GET: api/GarmentsItemEntries/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GarmentsItemEntry>> GetGarmentsItemEntry(int id)
        {
            var garmentsItemEntry = await _context.GarmentsItemEntry.FindAsync(id);

            if (garmentsItemEntry == null)
            {
                return NotFound();
            }

            return garmentsItemEntry;
        }

        // PUT: api/GarmentsItemEntries/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGarmentsItemEntry(int id, GarmentsItemEntry garmentsItemEntry)
        {
            if (id != garmentsItemEntry.Id)
            {
                return BadRequest();
            }

            _context.Entry(garmentsItemEntry).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GarmentsItemEntryExists(id))
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

        // POST: api/GarmentsItemEntries
        [HttpPost]
        public async Task<ActionResult<GarmentsItemEntry>> PostGarmentsItemEntry(GarmentsItemEntry garmentsItemEntry)
        {
            _context.GarmentsItemEntry.Add(garmentsItemEntry);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGarmentsItemEntry", new { id = garmentsItemEntry.Id }, garmentsItemEntry);
        }

        // DELETE: api/GarmentsItemEntries/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<GarmentsItemEntry>> DeleteGarmentsItemEntry(int id)
        {
            var garmentsItemEntry = await _context.GarmentsItemEntry.FindAsync(id);
            if (garmentsItemEntry == null)
            {
                return NotFound();
            }

            _context.GarmentsItemEntry.Remove(garmentsItemEntry);
            await _context.SaveChangesAsync();

            return garmentsItemEntry;
        }

        private bool GarmentsItemEntryExists(int id)
        {
            return _context.GarmentsItemEntry.Any(e => e.Id == id);
        }
    }
}
