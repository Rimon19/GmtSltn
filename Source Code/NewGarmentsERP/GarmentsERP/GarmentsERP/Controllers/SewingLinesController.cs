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
    public class SewingLinesController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public SewingLinesController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/SewingLines
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SewingLine>>> GetSewingLine()
        {
            return await _context.SewingLine.ToListAsync();
        }

        // GET: api/SewingLines/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SewingLine>> GetSewingLine(int id)
        {
            var sewingLine = await _context.SewingLine.FindAsync(id);

            if (sewingLine == null)
            {
                return NotFound();
            }

            return sewingLine;
        }

        // PUT: api/SewingLines/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSewingLine(int id, SewingLine sewingLine)
        {
            if (id != sewingLine.Id)
            {
                return BadRequest();
            }

            _context.Entry(sewingLine).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SewingLineExists(id))
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

        // POST: api/SewingLines
        [HttpPost]
        public async Task<ActionResult<SewingLine>> PostSewingLine(SewingLine sewingLine)
        {
            _context.SewingLine.Add(sewingLine);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSewingLine", new { id = sewingLine.Id }, sewingLine);
        }

        // DELETE: api/SewingLines/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<SewingLine>> DeleteSewingLine(int id)
        {
            var sewingLine = await _context.SewingLine.FindAsync(id);
            if (sewingLine == null)
            {
                return NotFound();
            }

            _context.SewingLine.Remove(sewingLine);
            await _context.SaveChangesAsync();

            return sewingLine;
        }

        private bool SewingLineExists(int id)
        {
            return _context.SewingLine.Any(e => e.Id == id);
        }
    }
}
