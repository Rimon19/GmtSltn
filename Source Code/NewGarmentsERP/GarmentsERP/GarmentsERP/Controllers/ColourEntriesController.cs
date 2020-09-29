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
    public class ColourEntriesController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public ColourEntriesController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/ColourEntries
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ColourEntry>>> GetColourEntry()
        {
            return await _context.ColourEntry.ToListAsync();
        }

        // GET: api/ColourEntries/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ColourEntry>> GetColourEntry(int id)
        {
            var colourEntry = await _context.ColourEntry.FindAsync(id);

            if (colourEntry == null)
            {
                return NotFound();
            }

            return colourEntry;
        }

        // PUT: api/ColourEntries/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutColourEntry(int id, ColourEntry colourEntry)
        {
            if (id != colourEntry.Id)
            {
                return BadRequest();
            }

            _context.Entry(colourEntry).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ColourEntryExists(id))
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

        // POST: api/ColourEntries
        [HttpPost]
        public async Task<ActionResult<ColourEntry>> PostColourEntry(ColourEntry colourEntry)
        {
            _context.ColourEntry.Add(colourEntry);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetColourEntry", new { id = colourEntry.Id }, colourEntry);
        }

        // DELETE: api/ColourEntries/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ColourEntry>> DeleteColourEntry(int id)
        {
            var colourEntry = await _context.ColourEntry.FindAsync(id);
            if (colourEntry == null)
            {
                return NotFound();
            }

            _context.ColourEntry.Remove(colourEntry);
            await _context.SaveChangesAsync();

            return colourEntry;
        }

        private bool ColourEntryExists(int id)
        {
            return _context.ColourEntry.Any(e => e.Id == id);
        }
    }
}
